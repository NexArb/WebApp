import axios from "axios"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYXJpc3llbmlndW4iLCJzY29wZXMiOlsidXNlcjpyZWFkIiwidXNlcjp3cml0ZSJdLCJleHAiOjE3MDU5NTMxMTd9.B2COfGzCoXd7Wag5Ql_SY_p5DvFqczZp7axBrcBJYAo";

/*
Examples 

----- Function With Body -----
const register = async (user: string) => {
    return axios.post("/register", user);
};

----- Function With Param -----
const getUser = async (userId: string) => {
    return axios.get("/user/" + userId);
};

----- Function With Query -----
const getAvailableUsers = async (isAvailable: string) => {
    return axios.get("/user?is_available=" + isAvailable);
};
*/

export const setOtpChoice = async (otpIdentifier: string) => {
    return axios.post("/auth/otp/set", {otp_type: "Email", otp_identifier: otpIdentifier}, {headers: {Authorization: `Bearer ${token}`}});
}

export const sendPasswordResetRequest = () => {
    axios.post("/auth/password-reset/request", {}, {headers: {Authorization: `Bearer ${token}`}});
}

export const verifyOtpAndUpdatePassword = (otpCode: string, newPassword: string) => {
    return axios.post(`/auth/password-reset/verify?otp_code=${otpCode}&new_password=${newPassword}`, {}, {headers: {Authorization: `Bearer ${token}`}});
}


