import React from 'react'
import Container from '../Container'
import ProjectOne from '/src/assets/projectOne.png'
import ProjectTwo from '/src/assets/projectTwo.png'
import { FaCalendarDays } from "react-icons/fa6";
import { BsTag } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <>
      <div className="mt-5 px-2 ">
          <div className="flex justify-start items-center gap-x-2">
            <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
            <h3 className='text-3xl font-semibold'>Portfolio</h3>
          </div>
          <ul className='flex justify-start items-center gap-x-10 mt-8'>
            <li className='text-base font-semibold hover:text-yellow-400'>All</li>
            <li className='text-base font-semibold hover:text-yellow-400'>Application</li>
            <li className='text-base font-semibold hover:text-yellow-400'>Web Development</li>
            <li className='text-base font-semibold hover:text-yellow-400'>Mobile Apps</li>
          </ul>
          <div className="w-full mt-8 flex justify-between gap-x-3 gap-y-10 flex-wrap">
            {/* First project part start  */}
            <div className="w-[90%] lg:w-[49%] h-[750px] lg:h-[550px] m-auto border-1 border-gray rounded-lg">
              <div className="w-full">
                <img className='w-full h-[500px] lg:h-[240px] rounded-lg ' src={ProjectOne} alt="" />
              </div>
              <div className="mt-3 px-3 " >
                <h6 className='text-2xl font-medium '>Uomo E-Commarce web Site</h6>
                <div className="flex justify-start items-center gap-x-3 mt-3">
                  <FaCalendarDays className='text-neutral-400' />
                  <p className='text-neutral-400'>Date</p>
                </div>
                <p className='text-sm mt-3 text-neutral-400'>A lightweight, production-ready microservice starterkit for Go applications with built-in middleware, observability, and clean architecture patterns.</p>

                {/* Futures and Technology part Start  */}
                <div className="grid grid-cols-3 gap-3  pt-5">
                  {/* Tag */}
                  <div className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-xl">
                    <BsTag />
                    <span>Figma</span>
                  </div>
                  {/* Tag */}
                  <div className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-xl">
                    <BsTag />
                    <span>Tailwind</span>
                  </div>
                  {/* Tag */}
                  <div className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-xl">
                    <BsTag />
                    <span>React</span>
                  </div>
                </div>
                {/* Futures and Technology part End  */}

                {/* Github and Live Link part Start  */}
                <div class="flex items-center justify-between w-full max-w-xl mx-auto py-6">
                  {/* Left Button  */}
                  <Link to={"https://github.com/twahidulislamdev/uomo"}>
                    <div
                      class="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg border border-gray-800 hover:bg-gray-900 transition hover:cursor-pointer"
                    >
                      <span><FaGithub /></span>
                      <span class="font-medium">Code</span>
                    </div>
                  </Link>


                  {/* Right Button */}
                  <Link to={"https://uomo-black.vercel.app/"}>
                    <div
                      class="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg border border-gray-800 hover:bg-gray-900 transition hover:cursor-pointer"
                    >
                      <span><FiExternalLink /></span>
                      <span class="font-medium">Live </span>
                    </div>
                  </Link>
                </div>
                {/* Github and Live Link part End  */}
              </div>
            </div>
            {/* First project part End  */}
            {/* Second project part start  */}
            <div className="w-[90%] lg:w-[49%] h-[750px] lg:h-[550px] m-auto border-1 border-gray rounded-lg">
              <div className="w-full">
                <img className='w-full h-[500px] lg:h-[240px] rounded-lg' src={ProjectTwo} alt="" />
              </div>
              <div className="mt-3 px-3 " >
                <h6 className='text-2xl font-medium '>Uomo E-Commarce web Site</h6>
                <div className="flex justify-start items-center gap-x-3 mt-3">
                  <FaCalendarDays className='text-neutral-400' />
                  <p className='text-neutral-400'>Date</p>
                </div>
                <p className='text-sm mt-3 text-neutral-400'>A lightweight, production-ready microservice starterkit for Go applications with built-in middleware, observability, and clean architecture patterns.</p>

                {/* Futures and Technology part Start  */}
                <div className="grid grid-cols-3 gap-3  pt-5">
                  {/* Tag */}
                  <div className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-xl">
                    <BsTag />
                    <span>Figma</span>
                  </div>
                  {/* Tag */}
                  <div className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-xl">
                    <BsTag />
                    <span>Tailwind</span>
                  </div>
                  {/* Tag */}
                  <div className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-xl">
                    <BsTag />
                    <span>React</span>
                  </div>
                </div>
                {/* Futures and Technology part End  */}

                {/* Github and Live Link part Start  */}
                <div class="flex items-center justify-between w-full max-w-xl mx-auto py-6">
                  {/* Left Button  */}
                  <Link to={"https://github.com/twahidulislamdev/creative-agency"}>
                    <div
                      href="#"
                      class="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg border border-gray-800 hover:bg-gray-900 transition hover:cursor-pointer"
                    >
                      <span><FaGithub /></span>
                      <span class="font-medium">Code</span>
                    </div>
                  </Link>

                  {/* Right Button */}
                  <Link to={"https://twahidulislamdev.github.io/creative-agency/"}>
                    <div
                      href="#"
                      class="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg border border-gray-800 hover:bg-gray-900 transition hover:cursor-pointer"
                    >
                      <span><FiExternalLink /></span>
                      <span class="font-medium">Link</span>
                    </div>
                  </Link>

                </div>
                {/* Github and Live Link part End  */}
              </div>
            </div>
            {/* Second project part End  */}
          </div>

      </div>
    </>
  )
}

export default Project