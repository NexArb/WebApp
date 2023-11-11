import { CREW } from "@/contants";
import Image from "next/image";
import React from "react";

const Crew = () => {
  return (
    <section className="relative mt-96 text-black">
      <div className="font-['DM Sans'] text-center text-[42px] font-bold leading-[52px]">
        Startup Crew
      </div>
      <div className="font-['DM Sans'] w-[754px] text-center text-[22px] font-medium leading-loose">
        The most important part of the Startup Framework is the samples. The
        samples form a set of 25 usable pages you can use as is or you can add
        new blocks from UI Kit.
      </div>
      <div className="lg:mg-20 mt-10 flex gap-10 md:grid-cols-3 lg:gap-20">
        {CREW.map((crew) => (
          <CrewItem
            key={crew.name}
            name={crew.name}
            profileImage={crew.profileImage}
            job={crew.job}
            icon1={crew.icon1}
            icon2={crew.icon2}
            icon3={crew.icon3}
          />
        ))}
      </div>
    </section>
  );
};

type CrewItem = {
  name: string;
  profileImage: string;
  job: string;
  icon1: string;
  icon2: string;
  icon3: string;
};

const CrewItem = ({
  name,
  job,
  icon1,
  icon2,
  icon3,
  profileImage,
}: CrewItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <Image src={profileImage} alt="profile image" width={100} height={100} />
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{name}</h2>
      <p className="regular-16 text-gray-30 mt-5 bg-white/80 lg:mt-[30px] lg:bg-none">
        {job}
      </p>
      <div className="bg-green-50 p-4 lg:p-7">
        <Image src={icon1} alt="socials" width={16} height={16} />
        <Image src={icon2} alt="socials" width={16} height={16} />
        <Image src={icon3} alt="socials" width={16} height={16} />
      </div>
    </li>
  );
};

export default Crew;
