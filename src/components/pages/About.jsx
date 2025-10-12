import { FaLaptopCode } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import SkillsIcon from "../SkillsIcon";
import HtmlLogo from '/src/assets/htmlLogo.png'
import CssLogo from '/src/assets/cssLogo.png'
import TailwindLogo from '/src/assets/tailwindLogo.png'
import JsLogo from '/src/assets/jsLogo.png'
import RIcon from "/src/assets/rIcon.png"
import ReduxLogo from '/src/assets/reduxLogo.png'
import NextJsLogo from '/src/assets/nextJsLogo.png'
import TsIcon from "/src/assets/tsIcon.png"
const About = () => {
  return (
    <>
      <div className='w-full py-5'>
        {/* About Me parat Start  */}
        <div className="">
          <div className="flex justify-start items-center gap-x-2">
            <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
            <h3 className='text-3xl font-semibold'>ABOUT ME</h3>
          </div>
          <p className='pt-5 text-md text-neutral-400 leading-6.5 lg:auto px-2  '>
            I’m a passionate MERN Stack Developer committed to creating innovative, high-quality web and mobile applications. Having completed my journey in Front-End, Back-End, and React Native development, I’ve built strong expertise in React.js, Next.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, and React Native.
            <br />

            My mission is to craft seamless, scalable, and user-focused applications that deliver exceptional experiences. I’m now excited to take the next step as a Frontend Developer or MERN Stack Developer, where I can apply my skills, contribute to impactful projects, and grow with an innovative team.</p>
        </div>
        {/* About Me part End  */}

        {/* What i am doing Part start  */}
        <div className="mt-10">
          <div className="flex justify-start items-center gap-x-2">
            <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
            <h3 className='text-3xl font-semibold'>What I Am Doing</h3>
          </div>
          <div className="">
            <div className="flex-none lg:flex justify-start items-center  gap-x-5 mt-5">
              <div className="w-full lg:w-[48%] h-[180px] bg-[#202022] px-5  py-10  rounded-lg shadow shadow-gray-700">
                <div className="flex justify-start items-center gap-x-5">
                  <FaLaptopCode className="text-[100px]" />
                  <div className="space-y-2">
                    <h6 className="text-2xl font-semibold">Web Development</h6>
                    <p className="text-sm text-neutral-400">High-quality development of sites at the professional level. </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[48%] h-[180px] bg-[#202022] px-5 py-10  rounded-lg shadow shadow-gray-700">
                <div className="flex justify-start items-center gap-x-5">
                  <SlScreenSmartphone className="text-[90px]" />
                  <div className="space-y-2">
                    <h6 className="text-2xl font-semibold">Mobile Apps</h6>
                    <p className="text-sm text-neutral-400">Professional development of applications for Cross Plartform </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
        {/* What i am doing Part ENd  */}

        {/* Sikils Part Start  */}
        <div className="mt-10">
          <div className="flex justify-start items-center gap-x-2">
            <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
            <h3 className='text-3xl font-semibold'>My Skills</h3>
          </div>
          <div className="w-full pt-5 flex-none lg:flex justify-between items-center ">
            <div className="w-full lg:w-[49%] h-auto lg:h-[235px]">
              <h4 className="w-full pb-5 text-xl font-semibold text-start lg:text-center">Front-End  </h4>
              <div className="w-[400px] bg-[#202022] lg:gap-2 flex justify-between items-center flex-wrap rounded-lg shadow shadow-gray-700">
                <SkillsIcon className={""} SkillsLogo={HtmlLogo} logoName={"Html"} />
                <SkillsIcon className={""} SkillsLogo={CssLogo} logoName={"CSS"} />
                <SkillsIcon className={""} SkillsLogo={TailwindLogo} logoName={"Tailwind "} />
                <SkillsIcon className={""} SkillsLogo={JsLogo} logoName={"JavaScript"} />
                <SkillsIcon className={""} SkillsLogo={RIcon} logoName={"React"} />
                <SkillsIcon className={""} SkillsLogo={ReduxLogo} logoName={"Redux"} />
                <SkillsIcon className={""} SkillsLogo={NextJsLogo} logoName={"Next.js"} />
                <SkillsIcon className={""} SkillsLogo={TsIcon} logoName={"TypeScript"} />
              </div>
            </div>
            <div className="w-full lg:w-[49%] h-auto lg:h-[235px] mt-10 lg:mt-0">
              <h4 className="w-full pb-5 text-xl font-semibold text-start lg:text-center">Front-End  </h4>
              <div className="w-[400px] bg-[#202022] lg:gap-2 flex justify-between items-center flex-wrap rounded-lg shadow shadow-gray-700">
                <SkillsIcon className={""} SkillsLogo={HtmlLogo} logoName={"Html"} />
                <SkillsIcon className={""} SkillsLogo={CssLogo} logoName={"CSS"} />
                <SkillsIcon className={""} SkillsLogo={TailwindLogo} logoName={"Tailwind "} />
                <SkillsIcon className={""} SkillsLogo={JsLogo} logoName={"JavaScript"} />
                <SkillsIcon className={""} SkillsLogo={RIcon} logoName={"React"} />
                <SkillsIcon className={""} SkillsLogo={ReduxLogo} logoName={"Redux"} />
                <SkillsIcon className={""} SkillsLogo={NextJsLogo} logoName={"Next.js"} />
                <SkillsIcon className={""} SkillsLogo={TsIcon} logoName={"TypeScript"} />
              </div>
            </div>
          </div>
        </div>
        {/* Sikils Part End  */}
      </div>

    </>
  )
}

export default About