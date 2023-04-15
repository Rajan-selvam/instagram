import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter the Name"],
        minlength: [4, "Name should be greater than 5 character's!"],
        maxlength: [20, "Name should be lesser than 20 character's!"],
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: false
    },
    avtar: {
        publiv_id: {
            type: String,
            required: false
        }
    }
});

const User = mongoose.model("User", userSchema);

export default User;