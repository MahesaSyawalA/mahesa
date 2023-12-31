import React from "react";
import { FaGitlab, FaGithub, FaNpm } from "react-icons/fa";
import { GoPackageDependencies } from "react-icons/go";
import {GiWaterfall} from "react-icons/gi";
import {DiScrum} from "react-icons/di";
export function OtherComponent() {
  return (
    <div id="other" className="px-8 pt-[100px] lg:px-0 pb-36 flex items-center flex-col w-full gap-8 ">
      <div className="flex flex-grow items-center justify-between gap-3 lg:gap-0">
        <h1 className="text-xl lg:text-3xl text-left lg:w-[20%] font-extrabold">
          {" "}
          Other
          <br /> My Skills
        </h1>
        <p className="text-left text-sm lg:text-md font-bold text-[#8AAAE5]">
        Another useful skills in the field of web development, which I learned
          during in the job training and internships
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 w-full lg:w-[60%] justify-between py-2 lg:py-6 ">
        <div className="flex flex-col w-full lg:w-[30%] border border-[#8AAAE5] p-5 rounded-md">
          <div className="flex justify-center items-center gap-10 p-5 text-[#8AAAE5]">
            <FaGithub size={40} />
            <FaGitlab size={40} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold ">Version Control</h3>
            <p className="text-[#8AAAE5]">
              I can use version control systems, git is the tool that I use.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-[30%] border border-[#8AAAE5] p-5 rounded-md">
          <div className="flex justify-center items-center gap-10 p-5 text-[#8AAAE5]">
            <GiWaterfall size={40} />
            <DiScrum size={40} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold ">
              Software Development Methodology
            </h3>
            <p className="text-[#8AAAE5]">
              I gain knowledge and application of several software development
              methodologies such as waterfall and agile (scrum).
            </p>
          </div>
        </div>
        <div className="flex flex-col  w-full lg:w-[30%] border border-[#8AAAE5] p-5 rounded-md">
          <div className="flex justify-center items-center gap-10 p-5 text-[#8AAAE5]">
            <FaNpm size={40} />
            <GoPackageDependencies size={40} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold ">NPM & Depedencies</h3>
            <p className="text-[#8AAAE5] text-clip overflow-hidden">
              I have a good understanding of NPM. I also understand and can
              apply some of the dependencies which can be used for web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
