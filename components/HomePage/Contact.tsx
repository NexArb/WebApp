import React from 'react'

import Button from '@/components/CommonComponents/Button'
import Input from '@/components/HomePage/Input'
import { footerDictionary } from '@/localesContent'

function Contact({locale}: {locale: string}) {
  return (
    <form className="flex w-full flex-col rounded-lg bg-white p-12 lg:mx-12 ">
      <span className="text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
        {footerDictionary[locale]?.yourName}
      </span>
      <Input
        className="mt-4 h-14"
        name="name"
        type="name"
        placeholder="Full name"
      />
      <span className="mt-8 text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
        {footerDictionary[locale]?.inputField}
      </span>
      <Input
        className="mt-4 h-14"
        name="senderEmail"
        type="email"
        placeholder="name@mail.com"
      />
      <span className="mt-8 text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
        {footerDictionary[locale]?.yourMessage}
      </span>
      <textarea
        className="my-3 mt-4 h-52 rounded-lg border border-black/10 p-4"
        name="message"
        required
        maxLength={500}
        placeholder="Message"
      />
      <div className="flexCenter mt-8 flex-1">
        <Button className="h-14 w-32 bg-teal-400">
          <span className="text-lg">{footerDictionary[locale]?.send}</span>
        </Button>
      </div>
    </form>
  )
}

export default Contact
