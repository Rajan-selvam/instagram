import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AuthenticatedRoute from "./AuthenticatedRoute";

const Home = Loadable(lazy(() => import("../pages/Home")));
const Profile = Loadable(lazy(() => import("../pages/Profile")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp")));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthenticatedRoute />,
        children: [
            {
                index: true,
                element: <Layout layout="main" />,
                children: [
                    {
                        index: true,
                        element: <Home />
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
        element: <Navigate to="/404" replace />
    },
]);

export const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<>Loading..</>}>
            <Component {...props} />
        </Suspense>
    )
}