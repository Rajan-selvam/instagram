import mongoose from "mongoose";
import { ObjectId } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter the Title"],
    },
    body: {
        type: String,
        required: [true, "Please Enter the Body"],
    },
    photo: {
        type: String,
        default: "No Photo"
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
});

const Post = mongoose.model("Post", postSchema);

export default Post;