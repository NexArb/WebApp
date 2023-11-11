import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/contants";

const Projects = () => {
  return (
    <section className="text-black">
      <div className="">
        <div className="mx-auto text-center text-[42px] font-bold leading-[52px] lg:w-[228px]">
          Our Works
        </div>
        <div className="mt-6 text-center text-[22px] leading-loose lg:w-[722px]">
          The most important part of the Startup Framework is the samples. The
          samples form a set of 20 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </div>
        <div className="lg:mg-20 mt-10 grid gap-10 md:grid-cols-3 lg:gap-20">
          {PROJECTS.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              image={project.image}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ProjectItem = {
  title: string;
  image: string;
  date: string;
};

const ProjectItem = ({ title, image, date }: ProjectItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full bg-green-50 p-4 lg:p-7">
        <Image src={image} alt="map" width={370} height={280} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 text-gray-30 mt-5 bg-white/80 lg:mt-[30px] lg:bg-none">
        {date}
      </p>
    </li>
  );
};

export default Projects;
