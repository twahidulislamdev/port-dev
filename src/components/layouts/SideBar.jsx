import React from 'react';
import MyPicture from '../../assets/myPicture.png';
import { IoMailOutline, IoPhonePortraitOutline, IoLocation } from 'react-icons/io5';

const SideBar = () => {
  return (
    <div className="w-full lg:w-[24%] h-[670px] bg-[#1e1e1f] rounded-2xl p-3 overflow-hidden">  
      <div className="pb-8 lg:border-b-2 lg:border-[#282829] flex flex-col items-center"> 
        <img
          src={MyPicture}
          alt="Profile"
          className="w-[200px] h-[230px] rounded-4xl object-cover mx-auto" 
        />
        <div className="w-full mt-4 flex flex-col items-center">
          <h2 className="text-xl font-bold text-center">Twahidul Islam</h2>  
          <div className="w-[200px] px-2 py-2 bg-[#282829] text-sm font-medium mt-3 text-center rounded">  
            MERN Stack Developer
          </div>
        </div>
      </div>
      <div className="w-full pt-5 gap-6 space-y-5">  
        <div className="flex justify-center lg:justify-start items-center gap-x-5">  
          <div className="relative w-10 h-12 rounded-lg bg-[#202022] shadow-xs shadow-gray-700 flex items-center justify-center">
            <IoMailOutline className="text-xl" /> 
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">EMAIL</h6>  
            <p className="text-base break-all">twahid746@gmail.com</p>  
          </div>
        </div>
        <div className="flex justify-center lg:justify-start gap-x-5">
          <div className="relative w-10 h-12 rounded-lg bg-[#202022] shadow-xs shadow-gray-700 flex items-center justify-center">
            <IoPhonePortraitOutline className="text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">PHONE</h6>
            <p className="text-lg">+8801825653993</p>  
          </div>
        </div>
        <div className="flex justify-center lg:justify-start gap-x-5">
          <div className="relative w-10 h-12 rounded-lg bg-[#202022] shadow-xs shadow-gray-700 flex items-center justify-center">
            <IoLocation className="text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">LOCATION</h6>
            <p className="text-lg">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;