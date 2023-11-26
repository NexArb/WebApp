import React from 'react'

import CustomButton from '@/components/CustomButton'
import Input from '@/components/HomePage/Input'

function Contact() {
  return (
      <form className="flex flex-col w-full lg:mx-12 rounded-lg bg-white p-12 ">
        <span className="text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
          Your Name
        </span>
        <Input name="name" type="name" placeholder="Full name" />
        <span className="mt-8 text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
          INPUT FIELD
        </span>
        <Input name="senderEmail" type="email" placeholder="name@mail.com" />
        <span className="mt-8 text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
          YOUR MESSAGE
        </span>
        <textarea
          className="my-3 mt-4 h-52 rounded-lg border border-black/10 p-4"
          name="message"
          required
          maxLength={500}
          placeholder="Message"
        />
        <div className="flexCenter mt-8 flex-1">
          <CustomButton className="h-14 w-32 bg-teal-400" text="Send" />
        </div>
      </form>
  )
}

export default Contact
