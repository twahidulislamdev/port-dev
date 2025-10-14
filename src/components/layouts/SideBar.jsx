import React from 'react';
import MyPicture from '../../assets/myPicture.png';
import { IoMailOutline, IoPhonePortraitOutline, IoLocation } from 'react-icons/io5';

const SideBar = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[23%] p-3 sm:p-4 md:p-5 lg:p-6 h-auto lg:h-[670px] bg-[#1e1e1f] rounded-2xl mx-auto">
      <div className="pb-6 sm:pb-8 border-b-2 border-[#282829] flex flex-col items-center">
        <img
          src={MyPicture}
          alt="Profile"
          className="w-[80px] h-[0px] sm:w-[100px] sm:h-[110px] md:w-[140px] md:h-[160px] lg:w-[200px] lg:h-[230px] rounded-4xl object-cover mx-auto"
        />
        <div className="w-full mt-4 flex flex-col items-center">
          <h2 className="text-lg sm:text-xl font-bold text-center">Twahidul Islam</h2>
          <div className="w-full sm:w-[200px] px-2 py-2 bg-[#282829] text-xs sm:text-sm font-medium mt-3 text-center rounded">
            MERN Stack Developer
          </div>
        </div>
      </div>
      <div className="w-full pt-5 flex flex-col gap-6">
        <div className="flex items-center gap-x-4 sm:gap-x-5">
          <div className="relative w-10 h-12 rounded-lg bg-[#202022] shadow-xs shadow-gray-700 flex items-center justify-center">
            <IoMailOutline className="text-lg sm:text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-xs sm:text-sm">EMAIL</h6>
            <p className="text-xs sm:text-base break-all">twahid746@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 sm:gap-x-5">
          <div className="relative w-10 h-12 rounded-lg bg-[#202022] shadow-xs shadow-gray-700 flex items-center justify-center">
            <IoPhonePortraitOutline className="text-lg sm:text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-xs sm:text-sm">PHONE</h6>
            <p className="text-xs sm:text-lg">+8801825653993</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 sm:gap-x-5">
          <div className="relative w-10 h-12 rounded-lg bg-[#202022] shadow-xs shadow-gray-700 flex items-center justify-center">
            <IoLocation className="text-lg sm:text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-xs sm:text-sm">LOCATION</h6>
            <p className="text-xs sm:text-lg">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;