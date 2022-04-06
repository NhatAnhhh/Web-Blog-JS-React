export const LoginStart = (UserCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (User) => ({
    type: "LOGIN_SUCCESS",
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
});

export const Logout = () => ({
    type: "LOGOUT"
});

export const UpdateStart = (UserCredentials) => ({
    type: "UPDATE_START",
});

export const UpdateSuccess = (User) => ({
    type: "UPDATE_SUCCESS",
});

export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE"
});

