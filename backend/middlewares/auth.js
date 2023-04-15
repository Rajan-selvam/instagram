import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const auth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            success: false,
            error: "UnAuthorized User!"
        })
    };
    const token = authorization.replace("Bearer ", "");
    // console.log("jwt", jwt.verify(token, process.env.JWT_SECERT));
    jwt.verify(token, process.env.JWT_SECERT, (err, payload) => {

        if (err) {
            return res.status(401).json({
                success: false,
                error: "You must be logged In!"
            });
        }
        const { _id } = payload;
        // console.log("_id", _id);
        User.findById(_id).then(userData => {
            req.user = userData;
            req.user.password = undefined;
            next();
        });
    });
}
