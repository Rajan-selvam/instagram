import express from "express";

import userControllers from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(userControllers.home);



export default router;