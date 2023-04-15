import express from "express";

import postController from "../controllers/postController.js";

import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.route("/createpost").post(auth, postController.createPost);

router.route("/allpost").get(auth, postController.getAllPost);

router.route("/mypost").get(auth, postController.getMyPost);

export default router;