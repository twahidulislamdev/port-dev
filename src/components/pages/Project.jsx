import React from 'react'
import Container from '../Container'
import ProjectOne from '/src/assets/projectOne.png'
import { FaCalendarDays } from "react-icons/fa6";
import { BsTag } from "react-icons/bs";

const Project = () => {
  return (
    <>
      <div className="mt-5 px-2">
        <Container>
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
          <div className="w-full mt-8">
            <div className="w-[35%] h-[550px] border-1 border-gray rounded-lg">
              <div className="w-full">
                <img className='rounded-lg' src={ProjectOne} alt="" />
              </div>
              <div className="mt-3 px-3 " >
                <h6 className='text-2xl font-medium '>Uomo E-Commarce web Site</h6>
                <div className="flex justify-start items-center gap-x-3 mt-3">
                  <FaCalendarDays className='text-neutral-400' />
                  <p className='text-neutral-400'>Date</p>
                </div>
                <p className='text-sm mt-3 text-neutral-400'>A lightweight, production-ready microservice starterkit for Go applications with built-in middleware, observability, and clean architecture patterns.</p>

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

              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Project