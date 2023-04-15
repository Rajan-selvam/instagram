import { Navigate, Outlet } from "react-router-dom";
// import { getToken } from "../utills/auth";

const AuthenticatedRoute = () => {
    // const validUser = getToken();
    return <Outlet />
    // return validUser ? <Outlet /> : <Navigate to="/home" />
}