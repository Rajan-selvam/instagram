import express from "express";
import userRoutes from "./userRoutes.js";

const router = express.Router();

const defaultRoutes = [
    {
        path: "/",
        route: userRoutes,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;