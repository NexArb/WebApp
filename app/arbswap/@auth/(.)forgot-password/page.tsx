"use client"

import React, { FormEvent, useState } from 'react'
import { sendPasswordResetRequest, setOtpChoice, verifyOtpAndUpdatePassword } from '@/services/ApiService';
import Modal from '@/components/CommonComponents/Modal';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");  
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isVerificationCodeSubmitted, setIsVerificationCodeSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordAgain, setNewPasswordAgain] = useState("");
  
  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpChoiceResponse = await setOtpChoice(email);

    if (otpChoiceResponse.data.error_code === -1) {
      sendPasswordResetRequest();
      setIsEmailSubmitted(true);
    }
                      
  }

  const handleSendVerificationCodeAgain = async (e: FormEvent<HTMLFormElement>) => {
    sendPasswordResetRequest();
  }

  const handleSubmitVerificationCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (verificationCode.length > 0) {
      setIsVerificationCodeSubmitted(true);
    }
  }

  const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword === newPasswordAgain) {
      const verifyOtpAndUpdatePasswordResponse = await verifyOtpAndUpdatePassword(verificationCode, newPassword);
      if (verifyOtpAndUpdatePasswordResponse.data.error_code === -1) {
        alert("Password changed successfully!");
      }
    }
  }

  return (
    <Modal routerBack='/arbswap'>
      <div className="flex justify-center mt-20">
          {!isVerificationCodeSubmitted ? (
              <div className="p-5 rounded-3xl bg-slate-700 w-80">
                  <div>
                      <form onSubmit={handleSubmitEmail}>
                          <label className="ml-4 text-sm" htmlFor="validEmail">Email</label>
                          <input id="validEmail" className="w-full rounded-full bg-slate-700 mt-1" type="email" placeholder="Enter your valid email" onChange={(e) => setEmail(e.target.value)}/>
                          <button className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 w-full py-2 px-5 rounded-full mt-5" type="submit">Send code</button>
                      </form>
                  </div>
                  <div className="mt-10">
                      <form onSubmit={handleSubmitVerificationCode}>
                          {isEmailSubmitted ? <label className="ml-4 text-sm" htmlFor="verificationCode">Verification Code</label> : <label className="ml-4 text-sm opacity-50" htmlFor="verificationCode">Verification Code</label>}
                          {isEmailSubmitted ? <input id="verificationCode" className="w-full rounded-full bg-slate-700 mt-1" type="text" placeholder="Enter verification code" onChange={(e) => setVerificationCode(e.target.value)}/> : <input id="verificationCode" className="w-full rounded-full bg-slate-700 mt-1" type="text" placeholder="Enter verification code" disabled/>}
                          {isEmailSubmitted ? <p className="text-center text-sm mt-2 mb-20">Don't you get code? <span onClick={(e) => handleSendVerificationCodeAgain} className="text-green-500">Send again</span></p> : <div className="mb-20"/>}
                          {isEmailSubmitted ? <button className="bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 w-full rounded-full py-2 px-5" type="submit">Verify</button> : <button className="bg-gray-500 text-gray-400 w-full rounded-full opacity-50 cursor-not-allowed py-2 px-8" disabled>Verify</button>}
                      </form>
                  </div>
              </div>
              ) : (
              <div className="p-5 rounded-3xl bg-slate-700 w-80">
                  <form onSubmit={handleChangePassword}>
                      <label className="ml-5 text-sm" htmlFor="newPassword">New Password</label>
                      <input id="newPassword" className="w-full rounded-full bg-slate-700 mt-2 mb-2" type="password" placeholder="Enter your password" onChange={(e) => setNewPassword(e.target.value)}/>
                      <label className="ml-5 text-sm" htmlFor="newPasswordAgain">New Password Again</label>
                      <input id="newPasswordAgain" className="w-full rounded-full bg-slate-700 mt-2" type="password" placeholder="Enter your password" onChange={(e) => setNewPasswordAgain(e.target.value)}/>
                      <button className="bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 w-full rounded-full py-2 px-5 mt-24" type="submit">Log in</button>
                  </form>
              </div>
          )}
      </div>
    </Modal>
  )
}

export default ForgotPassword