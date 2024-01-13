'use client'

import React, { FormEvent, useState } from 'react'
import {
  sendPasswordResetRequest,
  setOtpChoice,
  verifyOtpAndUpdatePassword
} from '@/services/ApiService'
import Modal from '@/components/CommonComponents/Modal'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false)
  const [isVerificationCodeSubmitted, setIsVerificationCodeSubmitted] =
    useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordAgain, setNewPasswordAgain] = useState('')

  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const otpChoiceResponse = await setOtpChoice(email)

    if (otpChoiceResponse.data.error_code === -1) {
      sendPasswordResetRequest()
      setIsEmailSubmitted(true)
    }
  }

  const handleSendVerificationCodeAgain = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    sendPasswordResetRequest()
  }

  const handleSubmitVerificationCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (verificationCode.length > 0) {
      setIsVerificationCodeSubmitted(true)
    }
  }

  const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newPassword === newPasswordAgain) {
      const verifyOtpAndUpdatePasswordResponse =
        await verifyOtpAndUpdatePassword(verificationCode, newPassword)
      if (verifyOtpAndUpdatePasswordResponse.data.error_code === -1) {
        alert('Password changed successfully!')
      }
    }
  }

  return (
    <Modal routerBack="/arbswap">
      <div className="mt-20 flex justify-center">
        {!isVerificationCodeSubmitted ? (
          <div className="w-80 rounded-3xl bg-slate-700 p-5">
            <div>
              <form onSubmit={handleSubmitEmail}>
                <label className="ml-4 text-sm" htmlFor="validEmail">
                  Email
                </label>
                <input
                  id="validEmail"
                  className="mt-1 w-full rounded-full bg-slate-700"
                  type="email"
                  placeholder="Enter your valid email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="mt-5 w-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 px-5 py-2"
                  type="submit"
                >
                  Send code
                </button>
              </form>
            </div>
            <div className="mt-10">
              <form onSubmit={handleSubmitVerificationCode}>
                {isEmailSubmitted ? (
                  <label className="ml-4 text-sm" htmlFor="verificationCode">
                    Verification Code
                  </label>
                ) : (
                  <label
                    className="ml-4 text-sm opacity-50"
                    htmlFor="verificationCode"
                  >
                    Verification Code
                  </label>
                )}
                {isEmailSubmitted ? (
                  <input
                    id="verificationCode"
                    className="mt-1 w-full rounded-full bg-slate-700"
                    type="text"
                    placeholder="Enter verification code"
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                ) : (
                  <input
                    id="verificationCode"
                    className="mt-1 w-full rounded-full bg-slate-700"
                    type="text"
                    placeholder="Enter verification code"
                    disabled
                  />
                )}
                {isEmailSubmitted ? (
                  <p className="mb-20 mt-2 text-center text-sm">
                    Don't you get code?{' '}
                    <button
                      onClick={(e) => handleSendVerificationCodeAgain}
                      className="text-green-500"
                    >
                      Send again
                    </button>
                  </p>
                ) : (
                  <div className="mb-20" />
                )}
                {isEmailSubmitted ? (
                  <button
                    className="w-full rounded-full bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 px-5 py-2"
                    type="submit"
                  >
                    Verify
                  </button>
                ) : (
                  <button
                    className="w-full cursor-not-allowed rounded-full bg-gray-500 px-8 py-2 text-gray-400 opacity-50"
                    disabled
                  >
                    Verify
                  </button>
                )}
              </form>
            </div>
          </div>
        ) : (
          <div className="w-80 rounded-3xl bg-slate-700 p-5">
            <form onSubmit={handleChangePassword}>
              <label className="ml-5 text-sm" htmlFor="newPassword">
                New Password
              </label>
              <input
                id="newPassword"
                className="mb-2 mt-2 w-full rounded-full bg-slate-700"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label className="ml-5 text-sm" htmlFor="newPasswordAgain">
                New Password Again
              </label>
              <input
                id="newPasswordAgain"
                className="mt-2 w-full rounded-full bg-slate-700"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setNewPasswordAgain(e.target.value)}
              />
              <button
                className="mt-24 w-full rounded-full bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 px-5 py-2"
                type="submit"
              >
                Log in
              </button>
            </form>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default ForgotPassword
