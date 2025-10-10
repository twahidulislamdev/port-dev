import { FaLaptopCode } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import SkillsIcon from "../SkillsIcon";
import HtmlLogo from '../../assets/htmlLogo.png';
import CssLogo from '../../assets/cssLogo.png';
import TailwindLogo from '../../assets/tailwindLogo.png';
import JsLogo from '../../assets/jsLogo.png';
// import ReactLogo from '../../assets/reactLogo.png';
import ReduxLogo from '../../assets/reduxLogo.png';
import NextJsLogo from '../../assets/nextJsLogo.png';
import TypeScriptLogo from '../../assets/typeScriptLogo.png';

const About = () => {
  return (
    <div className="px-3 py-5">
      {/* About Me Section */}
      <div>
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-8 bg-amber-400 rounded" />
          <h3 className="text-3xl font-semibold">ABOUT ME</h3>
        </div>
        <p className="pt-5 text-md text-neutral-400 leading-6">
          I’m a passionate MERN Stack Developer committed to creating innovative, high-quality web and mobile applications. Having completed my journey in Front-End, Back-End, and React Native development, I’ve built strong expertise in React.js, Next.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, and React Native.
          <br />
          My mission is to craft seamless, scalable, and user-focused applications that deliver exceptional experiences. I’m now excited to take the next step as a Frontend Developer or MERN Stack Developer, where I can apply my skills, contribute to impactful projects, and grow with an innovative team.
        </p>
      </div>

      {/* What I Am Doing Section */}
      <div className="mt-10">
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-8 bg-amber-400 rounded" />
          <h3 className="text-3xl font-semibold">What I Am Doing</h3>
        </div>
        <div className="mt-5 flex flex-wrap gap-5">
          <div className="w-full md:w-1/2 h-auto bg-[#202022] px-5 py-10 rounded-lg shadow shadow-gray-700">
            <div className="flex items-center gap-x-5">
              <FaLaptopCode className="text-24" />
              <div className="space-y-2">
                <h6 className="text-2xl font-semibold">Web Development</h6>
                <p className="text-sm text-neutral-400">High-quality development of sites at the professional level.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-auto bg-[#202022] px-5 py-10 rounded-lg shadow shadow-gray-700">
            <div className="flex items-center gap-x-5">
              <SlScreenSmartphone className="text-24" />
              <div className="space-y-2">
                <h6 className="text-2xl font-semibold">Mobile Apps</h6>
                <p className="text-sm text-neutral-400">Professional development of applications for cross-platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Skills Section */}
      <div className="mt-10">
        <div className="flex items-center gap-x-2">
          <div className="w-4 h-8 bg-amber-400 rounded" />
          <h3 className="text-3xl font-semibold">My Skills</h3>
        </div>
        <div className="mt-5 flex flex-wrap gap-5">
          <div className="w-full bg-[#202022] p-4 flex flex-wrap gap-4 justify-center rounded-lg shadow shadow-gray-700">
            <SkillsIcon SkillsLogo={HtmlLogo} logoName="HTML" />
            <SkillsIcon SkillsLogo={CssLogo} logoName="CSS" />
            <SkillsIcon SkillsLogo={TailwindLogo} logoName="Tailwind" />
            <SkillsIcon SkillsLogo={JsLogo} logoName="JavaScript" />
            {/* <SkillsIcon SkillsLogo={ReactLogo} logoName="React" /> */}
            <SkillsIcon SkillsLogo={ReduxLogo} logoName="Redux" />
            <SkillsIcon SkillsLogo={NextJsLogo} logoName="Next.js" />
            <SkillsIcon SkillsLogo={TypeScriptLogo} logoName="TypeScript" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;