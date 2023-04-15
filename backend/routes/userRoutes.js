import express from "express";

import userController from "../controllers/userController.js";

const router = express.Router();

router.route("/sign-up").post(userController.signUp);

router.route("/sign-in").post(userController.signIn);

export default router;