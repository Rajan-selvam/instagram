import express from "express";
import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";

const router = express.Router();

const defaultRoutes = [
    {
        path: "/",
        route: userRoutes,
    },
    {
        path: "/post",
        route: postRoutes,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;