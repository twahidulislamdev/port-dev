import React, { useState } from "react";
import MyPicture from "../../assets/myPicture.png";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocation,
} from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full lg:w-[24%] h-full lg:h-[670px] bg-[#1e1e1f] rounded-2xl p-5 overflow-hidden">
      {/* ---------- DO NOT CHANGE THIS PART (IMAGE + NAME + TITLE) ---------- */}
      <div className="px-5 pb-5 lg:p-5 border-b-2 border-[#282829] flex flex-row lg:flex-col justify-center items-center">
        <img
          src={MyPicture}
          alt="Profile"
          className="w-[130px] lg:w-[200px] h-[100px] lg:h-[230px] rounded-2xl lg:rounded-4xl object-cover mx-auto"
        />

        <div className="w-full mt-0 lg:mt-4 flex flex-col items-center">
          <h2 className="text-xl font-bold text-center">Twahidul Islam</h2>

          <div className="w-[180px] lg:w-[200px] px-0 lg:px-2 py-2 bg-[#282829] text-sm font-medium mt-3 text-center rounded ml-2">
            MERN Stack Developer
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}

      {/* ---------- MOBILE DROPDOWN ONLY (lg:hidden) ---------- */}
      <div className="lg:hidden mt-5">
        <button
          className="w-full bg-[#282829] py-3 px-4 rounded-lg flex justify-between items-center text-sm font-medium"
          onClick={() => setOpen(!open)}
        >
          Contact Info
          <IoChevronDown
            className={`text-lg transition-all duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="mt-5 space-y-5">
            {/* Email */}
            <div className="flex items-center gap-x-5">
              <div className="w-10 h-12 rounded-lg bg-[#202022] shadow-md flex items-center justify-center">
                <IoMailOutline className="text-xl" />
              </div>
              <div>
                <h6 className="text-neutral-500 text-sm">EMAIL</h6>
                <p className="text-base break-all">twahid746@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-x-5">
              <div className="w-10 h-12 rounded-lg bg-[#202022] shadow-md flex items-center justify-center">
                <IoPhonePortraitOutline className="text-xl" />
              </div>
              <div>
                <h6 className="text-neutral-500 text-sm">PHONE</h6>
                <p className="text-base">+8801825653993</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-x-5">
              <div className="w-10 h-12 rounded-lg bg-[#202022] shadow-md flex items-center justify-center">
                <IoLocation className="text-xl" />
              </div>
              <div>
                <h6 className="text-neutral-500 text-sm">LOCATION</h6>
                <p className="text-base">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-5 pt-3 ">
              <FaLinkedin className="text-2xl" />
              <FaLinkedin className="text-2xl" />
              <FaLinkedin className="text-2xl" />
              <FaLinkedin className="text-2xl" />
            </div>
          </div>
        )}
      </div>

      {/* ---------- DESKTOP VIEW (unchanged) ---------- */}
      <div className="hidden lg:block mt-5 space-y-5">
        <div className="flex items-center gap-x-5">
          <div className="w-10 h-12 rounded-lg bg-[#202022] shadow-md flex items-center justify-center">
            <IoMailOutline className="text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">EMAIL</h6>
            <p className="text-base break-all">twahid746@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <div className="w-10 h-12 rounded-lg bg-[#202022] shadow-md flex items-center justify-center">
            <IoPhonePortraitOutline className="text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">PHONE</h6>
            <p className="text-base">+8801825653993</p>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <div className="w-10 h-12 rounded-lg bg-[#202022] shadow-md flex items-center justify-center">
            <IoLocation className="text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">LOCATION</h6>
            <p className="text-base">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-5 pt-3 ">
          <FaLinkedin className="text-3xl" />
          <FaLinkedin className="text-3xl" />
          <FaLinkedin className="text-3xl" />
          <FaLinkedin className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
