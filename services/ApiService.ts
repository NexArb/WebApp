import { env } from '@/env.mjs'
import { PublicKey } from '@solana/web3.js'
import Cookies from 'js-cookie'

const token = Cookies.get('token')

const baseURL = env.NEXT_PUBLIC_BASE_URL

export const loginUser = async (data: { email: string; password: string }) => {
  const formData = new URLSearchParams()
  formData.append('username', data.email)
  formData.append('password', data.password)

  try {
    const response = await fetch(`${baseURL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    })
    const responseData = await response.json()
    return responseData
  } catch (e) {
    console.error('login user ---->', e)
  }
}

export const registerUser = async (data: {
  username: string
  password: string
}) => {
  const formData = new URLSearchParams()
  formData.append('username', data.username)
  formData.append('password', data.password)

  const response = await fetch(`${baseURL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData
  })
  return await response.json()
}

export const setOtpChoice = async (otpIdentifier: string) => {
  const response = await fetch(`${baseURL}/profile/otp/set/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ otp_type: 'Email', otp_identifier: otpIdentifier })
  })
  return await response.json()
}

export const getOtp = async (otpIdentifier: string) => {
  const response = await fetch(`${baseURL}/auth/otp/${otpIdentifier}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}

export const sendPasswordResetRequest = async () => {
  try {
    const response = await fetch(`${baseURL}/auth/password-reset/request`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    return await response.json()
  } catch (error) {
    console.error('Error sending password reset request:', error)
  }
}

export const verifyOtpAndUpdatePassword = async (
  otpCode: string,
  newPassword: string
) => {
  try {
    const response = await fetch(
      `${baseURL}/auth/password-reset/verify?otp_code=${otpCode}&new_password=${newPassword}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return await response.json()
  } catch (error) {
    console.error('Error verifying OTP and updating password:', error)
  }
}

export const getMyOffers = async (pastOffers: boolean) => {
  try {
    const response = await fetch(
      `${baseURL}/offer/my?pastOffers=${pastOffers}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }
      }
    )
    return response.json()
  } catch (error) {
    console.error('Error getting my offers:', error)
  }
}

export const getListings = async () => {
  try {
    const response = await fetch(`${baseURL}/listing`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
    return await response.json()
  } catch (error) {
    console.error('Error getting listings:', error)
  }
}

export const registerWallet = async (pubKey: PublicKey | null) => {
  const response = await fetch(`${baseURL}/auth/register/wallet`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ wallet_address: pubKey })
  })
  return response.json()
}
