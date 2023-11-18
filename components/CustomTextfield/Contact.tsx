import React from 'react'

import CustomButton from '@/components/CustomButton'
import Input from '@/components/CustomTextfield/Input'

function Contact (): React.JSX.Element {
  return (
    <div>
      <form className="flex h-[624.04px] w-[514.56px] flex-col rounded-lg bg-white p-12">
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
          <label htmlFor="c1">
            <div className="flexCenter group rounded-[10px]">
              <input
                id="c1"
                type="checkbox"
                className="h-6 w-6 cursor-pointer appearance-none rounded-[10px] bg-teal-400 text-teal-400 focus:ring-teal-100"
              />
            </div>
          </label>
          <p className="cursor-pointer pl-2 leading-relaxed text-slate-900 text-opacity-40">
            Send me a copy
          </p>
          <CustomButton
            className="h-14 w-32 bg-teal-400"
            text="Send"
          />
        </div>
      </form>
    </div>
  )
}

export default Contact
