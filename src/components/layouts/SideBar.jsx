import React from 'react';
import MyPicture from '../../assets/myPicture.png'
import { IoMailOutline, IoPhonePortraitOutline, IoLocation } from "react-icons/io5";

const SideBar = () => {
    return (
        <aside className="w-[23%] h-[670px] bg-[#1e1e1f] p-6 rounded-2xl overflow-hidden">
            <div className="pb-8 border-b-2 border-[#282829]">
                <img src={MyPicture} alt="Profile" className="w-[200px] h-[240px] mx-auto rounded-4xl" />
                <h2 className="text-xl font-bold mt-4 text-center">Twahidul Islam</h2>
                <p className="py-3 bg-[#282829] text-sm font-medium mt-3 text-center rounded">MERN Stack Developer</p>
            </div>
            <div className="w-full m-auto pt-5 ">
                <div className="flex justify-start items-center gap-x-5">
                    <div className="relative w-[45px] h-[50px] rounded-lg bg-[#202022] shadow-xs shadow-gray-700">
                        <IoMailOutline className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="">
                        <h6 className='text-neutral-500 text-sm'>EMAIL</h6>
                        <p className=''>twahid746@gmail.com</p>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-x-5 pt-8">
                    <div className="relative w-[45px] h-[50px] rounded-lg bg-[#202022] shadow-xs shadow-gray-700">
                        <IoPhonePortraitOutline className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="">
                        <h6 className='text-neutral-500 text-sm'>PHONE</h6>
                        <p className='text-lg '>+8801825653993</p>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-x-5 pt-8">
                    <div className="relative w-[45px] h-[50px] rounded-lg bg-[#202022] shadow-xs shadow-gray-700">
                        <IoLocation className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="">
                        <h6 className='text-neutral-500 text-sm'>PHONE</h6>
                        <p className='text-lg '>Dhaka, Bangladesh</p>
                    </div>
                </div>


            </div>

            {/* Add social media icons with Tailwind classes */}
        </aside>
    );
};

export default SideBar;