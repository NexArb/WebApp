"use client";

import Image from "next/image";
import React from "react";

import CustomButton from "@/components/CustomButton";

const Contact = () => {
  return (
    <section className="flexCenter relative ">
      <Image
        src="/img/footer-bg.png"
        alt="mountains"
        fill
        className="max-md:hidden"
        quality={95}
      />
      <Image
        src="/img/footer-bg-small.png"
        alt="mountains"
        fill
        className="md:hidden"
        quality={95}
      />
      <div className="z-20 mt-40 flex flex-row gap-20">
        <div>
          <div className="mt-14 text-[42px] font-bold leading-[52px]">
            Let’s Keep in Touch
          </div>
          <div className="mt-8 h-[140.14px] w-[436.83px] text-[22px] font-medium leading-loose">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </div>
          <div>
            {/* <Image src  */}
            <div className="mt-14 h-[28.46px] w-[263.85px] text-base font-normal leading-relaxed">
              +1 555 505 5050
            </div>
          </div>
          <div>
            {/* <Image src  */}
            <div className="mt-14 h-[28.46px] w-[251.81px] text-base font-normal leading-relaxed">
              info@designmodo.com
            </div>
          </div>
          <div>
            {/* <Image src  */}
            <div className="mt-14 h-[85.39px] w-[275.89px] text-base font-normal leading-relaxed">
              San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
              230909
            </div>
          </div>
        </div>
        <form
          className="flex h-[624.04px] w-[514.56px] flex-col rounded-[10px] bg-white p-12"
          action={() => {}}
        >
          <span className="text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
            Your Name
          </span>
          <input
            className="borderBlack h-14 rounded-lg px-4"
            name="name"
            type="name"
            required
            maxLength={500}
            placeholder="Full name"
          />
          <span className="text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
            INPUT FIELD
          </span>
          <input
            className="borderBlack h-14 rounded-lg px-4"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="name@mail.com"
          />
          <span className="text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
            YOUR MESSAGE
          </span>
          <textarea
            className="my-3 h-52 rounded-lg border border-black/10 p-4"
            name="message"
            required
            maxLength={500}
            placeholder="Message"
          />
          <div className="flex flex-1 ">
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
              className="h-[54.74px] w-[131.38px] bg-teal-400"
              text="Send"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
