import { isRejectedWithValue } from "@reduxjs/toolkit";

export const ErrorHandler = ({ dispatch }) => (next) => (action) => {
    if (isRejectedWithValue(action) && action.payload.status === 401) {
        // dispatch(setCredentials({
        //     user: null,
        //     token: null,
        // }));
        // removeToken();
        // history.go("/home");
    }
    return next(action);
}