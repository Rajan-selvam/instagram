'use strict';
import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userController = new function () {
    this.home = (req, res) => {
        res.json({
            name: "Hello Rajan"
        })
    }

    this.signUp = (req, res) => {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(422).json({ error: "Please add all the fields" })
        }
        User.findOne({ email: email }).then(async (userExist) => {
            if (userExist) {
                return res.status(200).json({
                    success: false,
                    message: "User Email Already Exist!"
                })
            }
            let hashedPassword = await bcryptjs.hash(password, 12);
            const user = await User.create({
                email,
                name,
                password: hashedPassword
            }).then((user) => {
                return res.status(200).json({
                    user: user,
                    message: "User Created SuccessFully!",
                    success: true
                })
            }).catch(err => {
                return res.status(200).json({
                    success: false,
                    message: err
                })
            });

        }).catch((err) => {
            res.status(200).json({
                success: false,
                message: err
            });
        });
    }

    this.signIn = (req, res) => {
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                return res.status(422).json({
                    succcess: false,
                    error: "Please add email or password!"
                });
            }
            User.findOne({ email: email })
                .then((savedUser) => {
                    if (!savedUser) {
                        return res.status(422).json({
                            succcess: false,
                            error: "Invalid Credentials!"
                        });
                    }
                    bcryptjs.compare(password, savedUser.password)
                        .then(doMatch => {
                            if (!doMatch) {
                                return res.status(200).json({
                                    succcess: false,
                                    error: "Invalid Credentials!"
                                });
                            }
                            if (doMatch) {
                                const token = jwt.sign({_id: savedUser._id}, process.env.JWT_SECERT);
                                // console.log(process.env.JWT_SECERT, token);
                                return res.status(202).json({
                                    succcess: true,
                                    token, 
                                    user: savedUser
                                })
                            }

                        })
                });
        } catch (err) {
            console.log("sign-in catch", err);
        }
    }
}

export default userController;