import { Carousel } from "@mantine/carousel";
import React from "react";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 ">
      <div className="text-4xl text-center text-mine-shaft-100 font-semibold mb-10">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg mb-10 text-mine-shaft-300 text-center w-1/2 mx-auto">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today !
      </div>
      <Carousel slideSize="auto" slideGap="md" loop className="focus-visible:[&_button]:!outline-none
      [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:!opacity-75
      [&_button]:!opacity-0 hover:[&_button]:!opacity-100"
      nextControlIcon={<IconArrowRight className="h-8 w-8 "/>}
      previousControlIcon={<IconArrowLeft className="h-8 w-8"/>}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 my-5 transition duration-300 ease-in-out gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-400">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-9 w-9"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-200 font-semibold text-xl">
                {category.name}
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.desc}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {category.jobs}+ New Jobs Posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
