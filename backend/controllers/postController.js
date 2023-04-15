"use strict"
import Post from "../models/postModel.js";

const postController = new function () {
    this.createPost = (req, res) => {

        const { title, body } = req.body;
        if (!title || !body) {
            return res.status(422).json({
                success: false,
                error: "Please Add all the fields"
            });
        }
        const post = Post.create({
            title,
            body,
            postedBy: req.user
        }).then((result) => {
            if (result) {
                return res.status(200).json({
                    success: true,
                    post: result
                })
            }
        }).catch(err => {
            console.log(err);
        });
    }

    this.getAllPost = (req, res) => {
        Post.find().populate("postedBy", "_id name")
            .then((posts) => {
                return res.status(200).json({
                    success: true,
                    posts
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    this.getMyPost = (req, res) => {
        Post.find({ postedBy: req.user._id })
            .populate("postedBy", "_id name")
            .then((myposts) => {
                return res.status(200).json({
                    success: true,
                    posts: myposts
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export default postController;