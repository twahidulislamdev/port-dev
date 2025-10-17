import React from 'react';  // Add this if not using JSX elsewhere
import { FaLaptopCode } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import SkillsIcon from "../SkillsIcon";
import HtmlLogo from '/src/assets/htmlLogo.png';
import CssLogo from '/src/assets/cssLogo.png';
import TailwindLogo from '/src/assets/tailwindLogo.png';
import JsLogo from '/src/assets/jsLogo.png';
import RIcon from "/src/assets/rIcon.png";
import ReduxLogo from '/src/assets/reduxLogo.png';
import NextJsLogo from '/src/assets/nextJsLogo.png';
import TsIcon from "/src/assets/tsIcon.png";

const About = () => {
  return (
    <>
      <div className='w-full mb-10 lg:mb-5 lg:py-5'>
        {/* About Me part Start */}
        <div className="">
          <div className="flex justify-center lg:justify-start items-center gap-x-2">
            <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
            <h3 className='text-3xl font-semibold'>ABOUT ME</h3>
          </div>
          <p className='text-center lg:text-start pt-5 text-md text-neutral-400 leading-6.5  lg:w-full m-auto'>
            I’m a passionate MERN Stack Developer committed to creating innovative, high-quality web and mobile applications. Having completed my journey in Front-End, Back-End, and React Native development, I’ve built strong expertise in React.js, Next.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, and React Native.
            <br />
            <br />
            My mission is to craft seamless, scalable, and user-focused applications that deliver exceptional experiences. I’m now excited to take the next step as a Frontend Developer or MERN Stack Developer, where I can apply my skills, contribute to impactful projects, and grow with an innovative team.
          </p>
        </div>
        {/* About Me part End */}

        {/* What I Am Doing Part Start */}
        <div className="mt-10">
          <div className="flex justify-center lg:justify-start items-center gap-x-2">
            <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
            <h3 className='text-3xl font-semibold'>What I Am Doing</h3>
          </div>

          <div className="flex justify-start items-center gap-x-5 gap-y-5 mt-5 flex-wrap">
            {/* First part start  */}
            <div className="w-full lg:w-[48%] m-auto h-[200px] lg:h-[180px] bg-[#202022] px-5  py-0 lg:py-10 rounded-lg shadow shadow-gray-700">
              <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-5 py-2">
                <FaLaptopCode className="text-[80px] lg:text-[100px]" />
                <div className="space-y-2">
                  <h6 className="text-2xl font-semibold">Web Development</h6>
                  <p className="text-sm text-neutral-400">High-quality development of sites at the professional level.</p>
                </div>
              </div>
            </div>
            {/* First part End  */}
            {/* Second part Start  */}
            <div className="w-full lg:w-[48%] m-auto h-[200px] lg:h-[180px] bg-[#202022] px-5  py-0 lg:py-10 rounded-lg shadow shadow-gray-700">
              <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-5 py-2">
                <SlScreenSmartphone className="text-[80px] lg:text-[100px]" />
                <div className="space-y-2">
                  <h6 className="text-2xl font-semibold">Mobile Apps</h6>
                  <p className="text-sm text-neutral-400">Professional development of applications for Cross Platform</p>
                </div>
              </div>
            </div>
            {/* Second part End  */}

          </div>
        </div>

        {/* What I Am Doing Part End */}

        {/* Skills Part Start */}
        <div className="mb-40 lg:mb-0 mt-10 py-5">
          <div className="flex justify-center lg:justify-start items-center gap-x-2">
            <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
            <h3 className='text-3xl font-semibold'>My Skills</h3>
          </div>
          <div className="w-full mt-10 flex justify-center lg:justify-between items-center m-auto flex-wrap gap-y-40">
            <div className="w-[95%] lg:w-[48%] m-auto h-[350px] lg:h-[300px]">
              <h4 className="w-full pb-3 text-lg font-semibold text-start lg:text-center">Front-End () </h4>  {/* Centered like lg */}
              <div className="w-full h-[350px] lg:h-[310px] bg-[#202022] gap-2 flex justify-between items-center flex-wrap rounded-lg shadow shadow-gray-700">
                <SkillsIcon className={""} SkillsLogo={HtmlLogo} logoName={"Html"} />
                <SkillsIcon className={""} SkillsLogo={CssLogo} logoName={"CSS"} />
                <SkillsIcon className={""} SkillsLogo={TailwindLogo} logoName={"Tailwind"} />
                <SkillsIcon className={""} SkillsLogo={JsLogo} logoName={"JavaScript"} />
                <SkillsIcon className={""} SkillsLogo={RIcon} logoName={"React"} />
                <SkillsIcon className={""} SkillsLogo={ReduxLogo} logoName={"Redux"} />
                <SkillsIcon className={""} SkillsLogo={NextJsLogo} logoName={"Next.js"} />
                <SkillsIcon className={""} SkillsLogo={TsIcon} logoName={"TypeScript"} />
              </div>
            </div>
            <div className="w-[95%] lg:w-[48%] m-auto h-[350px] lg:h-[300px]">
              <h4 className="w-full pb-3 text-lg font-semibold text-start lg:text-center">Back-End () </h4>  {/* Guessed this; update if wrong */}
              <div className="w-full h-[350px] lg:h-[310px] bg-[#202022] gap-2 flex justify-between items-center flex-wrap rounded-lg shadow shadow-gray-700">
                <SkillsIcon className={""} SkillsLogo={HtmlLogo} logoName={"Html"} />  {/* Update logos if needed */}
                <SkillsIcon className={""} SkillsLogo={CssLogo} logoName={"CSS"} />
                <SkillsIcon className={""} SkillsLogo={TailwindLogo} logoName={"Tailwind"} />
                <SkillsIcon className={""} SkillsLogo={JsLogo} logoName={"JavaScript"} />
                <SkillsIcon className={""} SkillsLogo={RIcon} logoName={"React"} />
                <SkillsIcon className={""} SkillsLogo={ReduxLogo} logoName={"Redux"} />
                <SkillsIcon className={""} SkillsLogo={NextJsLogo} logoName={"Next.js"} />
                <SkillsIcon className={""} SkillsLogo={TsIcon} logoName={"TypeScript"} />
              </div>
            </div>
          </div>
        </div>
        {/* Skills Part End */}
      </div>
    </>
  );
};

export default About;