import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AuthenticatedRoute from "./AuthenticatedRoute";

export const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<>Loading..</>}>
            <Component {...props} />
        </Suspense>
    )
}

const Home = Loadable(lazy(() => import("../pages/Home")));
const Profile = Loadable(lazy(() => import("../pages/Profile")));
const CreatePost = Loadable(lazy(() => import("../pages/CreatePost")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp")));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthenticatedRoute />,
        children: [
            {
                path: "",
                element: <Layout layout="main" />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    },
                    {
                        path: "/create-post",
                        element: <CreatePost />
                    },
                    {
                        path: "/profile",
                        element: <Profile />
                    },
                ]
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "*",
        element: <Navigate to="/" replace />
    },
]);