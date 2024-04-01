import axios from 'axios'
import Cookies from "js-cookie";

const token = Cookies.get("token");

const baseURL = 'http://3.121.235.40:8080';

export const loginUser = async (data: {
  email: string
  password: string
  rememberDevice: boolean
}) => {
  try {
    const formData = new URLSearchParams()
    formData.append('username', data.email)
    formData.append('password', data.password)
    const response = await axios.post(`${baseURL}/auth/login`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    return response
  } catch (e) {
    console.log(e)
  }
}

export const registerUser = async (data: {
  username: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}) => {
  const formData = new URLSearchParams()
  formData.append('username', data.username)
  formData.append('password', data.password)
  const response = await axios.post(`${baseURL}/auth/register`, formData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
  return response
}

export const setOtpChoice = async (otpIdentifier: string) => {
  return axios.post(
    `${baseURL}/profile/otp/set/`,
    { otp_type: 'Email', otp_identifier: otpIdentifier },
    { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
  )
}

export const getOtp = async (otpIdentifier: string) => {
  return axios.post(`${baseURL}/auth/otp/${otpIdentifier}`,
  {},
  {headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json"}})
}

export const sendPasswordResetRequest = () => {
  axios.post(
    `${baseURL}/auth/password-reset/request`,
    {},
    { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
  )
}

export const verifyOtpAndUpdatePassword = (
  otpCode: string,
  newPassword: string
) => {
  return axios.post(
    `${baseURL}/auth/password-reset/verify?otp_code=${otpCode}&new_password=${newPassword}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )
}

export const getMyOffers = (pastOffers: boolean) => {
  return axios.get(`${baseURL}/offer/my?pastOffers=${pastOffers}`, {headers: {Authorization: `Bearer ${token}`, Accept: "application/json"}})
}

export const getListings = () => {
  return axios.get(`${baseURL}/listing`, {headers: {Authorization: `Bearer ${token}`, Accept: "application/json"}})
}