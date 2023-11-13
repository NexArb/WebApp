"use client";

import Image from "next/image";
import React from "react";

import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { FooterSocials } from "@/constants";

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
      <div className="flexCenter z-20 flex-col ">
        <div className="mt-40 flex flex-col">
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 gap-28 px-6 lg:px-20 xl:px-0">
            <div>
              <div className="mt-14 text-[42px] font-bold leading-[52px]">
                Let’s Keep in Touch
              </div>
              <div className="mt-8 h-[140.14px] w-[436.83px] text-[22px] font-medium leading-loose">
                We have created a new product that will help designers,
                developers and companies create websites for their startups
                quickly and easily.
              </div>
              <div className="mt-20 flex flex-row gap-5">
                <Image
                  src={"/img/fa-phone.svg"}
                  alt="logo"
                  width={19}
                  height={19}
                />
                <div className="h-[28.46px] w-[263.85px] text-base font-normal leading-relaxed">
                  +1 555 505 5050
                </div>
              </div>
              <div className="mt-16 flex flex-row gap-5">
                <Image
                  src={"/img/fa-envelope.svg"}
                  alt="logo"
                  width={21}
                  height={16}
                />
                <div className="h-[28.46px] w-[251.81px] text-base font-normal leading-relaxed">
                  info@designmodo.com
                </div>
              </div>
              <div className="mt-14 flex flex-row gap-5">
                <Image
                  src={"/img/fa-building-o.svg"}
                  alt="logo"
                  width={19}
                  height={19}
                />
                <div className="h-[85.39px] w-[275.89px] text-base font-normal leading-relaxed">
                  San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                  230909
                </div>
              </div>
            </div>
            <div>
              <form
                className="flex h-[624.04px] w-[514.56px] flex-col rounded-[10px] bg-white p-12"
                action={() => {}}
              >
                <span className="text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
                  Your Name
                </span>
                <input
                  className="borderBlack mt-4 h-14 rounded-full border-2 border-gray-200 px-4"
                  name="name"
                  type="name"
                  required
                  maxLength={500}
                  placeholder="Full name"
                />
                <span className="mt-8 text-sm font-bold uppercase leading-relaxed tracking-widest text-violet-950">
                  INPUT FIELD
                </span>
                <input
                  className="borderBlack mt-4 h-14 rounded-full border-2 border-gray-200 px-4"
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="name@mail.com"
                />
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
                    className="h-[54.74px] w-[131.38px] bg-teal-400"
                    text="Send"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="mb-10 mt-48 border bg-white bg-opacity-20" />
          <div className="mb-20 flex justify-between">
            <div className="text-sm leading-7 text-emerald-50">
              © 2023 NexArb. All Rights Reserved.
            </div>
            <div className="flex flex-row gap-6">
              {FooterSocials.map((e) => (
                <Link href="/" key={e.svg}>
                  <div className="flexCenter h-[35.70px] w-[35.70px] rounded-lg bg-white bg-opacity-20">
                    <Image src={e.svg} alt="logo" width={19} height={19} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
