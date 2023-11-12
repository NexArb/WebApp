import React from "react";
import Image from "next/image";

import CustomButton from "@/components/CustomButton";

const Hero = () => {
  return (
    <section className="flexCenter flex-col">
      <Image
        src="/img/hero-mountains.png"
        alt="mountains"
        fill
        className="backgroundImage max-md:hidden"
        quality={95}
      />
      <Image
        src="/img/hero-mountains-small.png"
        alt="mountains"
        fill
        className="backgroundImage md:hidden"
        quality={95}
      />
      <div className="relative flex min-h-[100vh] flex-col items-end justify-center pb-[7vh]">
        <div className="mx-auto mb-6 text-center text-7xl font-bold leading-[86px] lg:w-[692px]">
          Digital Solutions for the Future
        </div>
        <div className="mb-16 text-center text-[22px] font-medium leading-loose lg:w-[794.88px]">
          Startup Framework gives you complete freedom over your creative
          process — you don’t have to think about any technical aspects. There
          are no limits and absolutely no coding.{" "}
        </div>
        <CustomButton />
      </div>
    </section>
  );
};

export default Hero;
