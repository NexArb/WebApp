import axios from 'axios'
import { useUserStore } from '@/hooks/useStore'

const token = useUserStore.getState().token

export const loginUser = async (data: {
  email: string
  password: string
  rememberDevice: boolean
}) => {
  const response = await axios.post(
    'https://platform-omggm8hk.b4a.run/auth/login',
    {
      username: data.email,
      password: data.password
    }
  )
  return response
}

export const registerUser = async (data: {
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
}) => {
  const response = await axios.post(
    'https://platform-omggm8hk.b4a.run/auth/register',
    {
      username: data.email,
      password: data.password
    }
  )
  return response
}

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
