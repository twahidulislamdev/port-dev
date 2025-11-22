import React from 'react'
import Container from '../Container'
import { IoBookOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";

const Resume = () => {
  return (
    <>
      <div className="pt-2 pb-20 relative mb-10 lg:mb-0 ">
        {/* Page Title start  */}
        <div className="flex justify-center lg:justify-start items-center gap-x-2">
          <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
          <h3 className='text-3xl font-semibold'>Resume</h3>
        </div>
        {/* Page Title End  */}

        {/* Education part start  */}
        <div className=" text-white p-5 mt-3">
          <div className="text-xl font-semibold mb-4 flex items-center space-x-5">
            <IoBookOutline className='text-3xl text-yellow-100' />
            <p className='text-2xl'>Eduction</p>
          </div>
          {/* Time Line start  */}
          <div className="relative border-l-2 border-yellow-100 ml-3.5">
            <div className="ml-6 mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-100 rounded-full absolute -left-2" />
                <div>
                  <h3 className="text-lg font-medium pt-3">
                    Protyashi R A High School
                  </h3>
                  <p className="text-gray-400 py-1">
                    SSC (Science ) and  ( GPA- 4.56/5.00)
                  </p>
                  <p className="text-gray-400">2016 - 2021</p>
                </div>
              </div>
            </div>
            <div className="ml-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-100 rounded-full absolute -left-2.5" />
                <div>
                  <h3 className="text-lg font-medium">
                    Shyamoli Ideal Polytechnic Institute
                  </h3>
                  <p className="text-gray-400">
                    Diploma in Engineering (Computer science)</p>
                  <p className="text-gray-400">2022 - 2025</p>
                </div>
              </div>
            </div>
          </div>
          {/* Time Line End  */}
        </div>
        {/* Education part End  */}

        {/* Exprience part start  */}
        <div className=" text-white p-5">
          <div className="text-xl font-semibold mb-4 flex items-center space-x-5">
            <IoBookOutline className='text-3xl text-yellow-100' />
            <p className='text-2xl'>Exprience</p>
          </div>
          {/* Time Line start  */}
          <div className="relative border-l-2 border-yellow-100 ml-3.5">
            <div className="ml-6 mb-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-100 rounded-full absolute -left-2" />
                <div>
                  <h3 className="text-lg font-medium pt-3">
                    Creative IT Institute
                  </h3>
                  <p className="text-gray-400 py-1">
                    MERN stack Development (Course)
                  </p>
                  <p className="text-gray-400">January
                    2025  - Present</p>
                </div>
              </div>
            </div>
            <div className="ml-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-100 rounded-full absolute -left-2.5" />
                <div>
                  <h3 className="text-lg font-medium">
                    Genuity Systems Limited
                  </h3>
                  <p className="text-gray-400">
                    MERN stack Development (Training)</p>
                  <p className="text-gray-400">September 2025 - Present</p>
                </div>
              </div>
            </div>
          </div>
          {/* Time Line End  */}
        </div>
        {/* Exprience part End  */}

        <div className="absolute right-0.5 lg:right-2 bottom-5.5 lg:bottom-2 w-[170px] lg:w-[200px]  px-2 py-4 bg-[#222224] flex justify-center items-center gap-x-3 rounded-xl border-2 border-neutral-600 shadow-xs shadow-neutral-600">
          <FiFileText className='text-lg lg:text-xl'/>
          <p className='text-base lg:text-lg'>Download CV</p>
        </div>
      </div>
    </>
  )
}

export default Resume