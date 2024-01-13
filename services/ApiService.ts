import axios from 'axios'

const token = 'YOUR_JWT_KEY'

/*
Examples 

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
  return axios.post(
    'https://platform-omggm8hk.b4a.run/auth/otp/set',
    { otp_type: 'Email', otp_identifier: otpIdentifier },
    { headers: { Authorization: `Bearer ${token}` } }
  )
}

export const sendPasswordResetRequest = () => {
  axios.post(
    'https://platform-omggm8hk.b4a.run/auth/password-reset/request',
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )
}

export const verifyOtpAndUpdatePassword = (
  otpCode: string,
  newPassword: string
) => {
  return axios.post(
    `https://platform-omggm8hk.b4a.run/auth/password-reset/verify?otp_code=${otpCode}&new_password=${newPassword}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )
}
