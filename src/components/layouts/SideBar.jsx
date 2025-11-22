import React, { useState } from "react";
import MyPicture from "../../assets/myPicture.png";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocation,
  IoChevronUp,
} from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative  w-full lg:w-[24%] h-full lg:h-[670px] bg-[#1e1e1f] rounded-2xl p-3 lg:p-5 overflow-hidden">
      {/* ---------- Profile ---------- */}
      <div className="px-5 pt-5 lg:p-5 lg:border-b-2 lg:border-[#282829] flex flex-row lg:flex-col justify-center items-center">
        <img
          src={MyPicture}
          alt="Profile"
          className="w-[130px] lg:w-[200px] h-[100px] lg:h-[230px] rounded-2xl lg:rounded-4xl object-cover mx-auto"
        />

        <div className="w-full mt-0 lg:mt-4 flex flex-col items-center">
          <h2 className="text-xl font-bold text-center">Twahidul Islam</h2>

          <div className="w-[180px] lg:w-[200px] py-2 bg-[#282829] text-sm font-medium mt-3 text-center rounded">
            MERN Stack Developer
          </div>
        </div>
      </div>

      {/* ---------- Mobile Dropdown Toggle ---------- */}
      <div className="flex lg:hidden absolute top-0 right-0 bg-[#202022] px-3 py-2 rounded-tr-2xl border border-neutral-600">
        <IoChevronUp
          onClick={() => setOpen(!open)}
          className={`text-xl cursor-pointer transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* ---------- Mobile Dropdown Items ---------- */}
      <div className="lg:hidden mt-5">
        {open && (
          <div className="mt-5 space-y-5 border-t-2 border-[#282829] pt-5">
            {/* Email */}
            <div className="flex items-center gap-x-5">
              <div className="w-10 h-12 rounded-lg bg-[#202022] flex items-center justify-center">
                <IoMailOutline className="text-xl" />
              </div>
              <div>
                <h6 className="text-neutral-500 text-sm">EMAIL</h6>
                <p className="text-base break-all">twahid746@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-x-5">
              <div className="w-10 h-12 rounded-lg bg-[#202022] flex items-center justify-center">
                <IoPhonePortraitOutline className="text-xl" />
              </div>
              <div>
                <h6 className="text-neutral-500 text-sm">PHONE</h6>
                <p className="text-base">+8801825653993</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-x-5">
              <div className="w-10 h-12 rounded-lg bg-[#202022] flex items-center justify-center">
                <IoLocation className="text-xl" />
              </div>
              <div>
                <h6 className="text-neutral-500 text-sm">LOCATION</h6>
                <p className="text-base">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex justify-center items-center gap-x-10 pt-3 pb-5">
              <FaLinkedin
                className="text-2xl cursor-pointer hover:text-blue-600 duration-200"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/twahidulislamdev104432",
                    "_blank"
                  )
                }
              />

              <FaGithub
                className="text-2xl cursor-pointer hover:text-gray-300 duration-200"
                onClick={() =>
                  window.open("https://github.com/twahidulislamDev", "_blank")
                }
              />

              <FaXTwitter
                className="text-2xl cursor-pointer hover:text-blue-400 duration-200"
                onClick={() =>
                  window.open("https://twitter.com/twahidulislam", "_blank")
                }
              />

              <FaTelegramPlane
                className="text-2xl cursor-pointer hover:text-blue-500 duration-200"
                onClick={() =>
                  window.open("https://t.me/twahidulislamDev", "_blank")
                }
              />
            </div>
          </div>
        )}
      </div>

      {/* ---------- Desktop View (unchanged) ---------- */}
      <div className="hidden lg:block mt-5 space-y-5">
        <div className="flex items-center gap-x-5">
          <div className="w-10 h-12 rounded-lg bg-[#202022] flex items-center justify-center">
            <IoMailOutline className="text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">EMAIL</h6>
            <p className="text-base break-all">twahid746@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <div className="w-10 h-12 rounded-lg bg-[#202022] flex items-center justify-center">
            <IoPhonePortraitOutline className="text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">PHONE</h6>
            <p className="text-base">+8801825653993</p>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <div className="w-10 h-12 rounded-lg bg-[#202022] flex items-center justify-center">
            <IoLocation className="text-xl" />
          </div>
          <div>
            <h6 className="text-neutral-500 text-sm">LOCATION</h6>
            <p className="text-base">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center items-center gap-x-8 pt-3 pb-5">
          <FaLinkedin
            className="text-2xl cursor-pointer hover:text-[#0077B5] duration-200"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/twahidulislamdev104432",
                "_blank"
              )
            }
          />

          <FaGithub
            className="text-2xl cursor-pointer hover:text-gray-300 duration-200"
            onClick={() =>
              window.open("https://github.com/twahidulislamDev", "_blank")
            }
          />

          <FaXTwitter
            className="text-2xl cursor-pointer hover:text-blue-400 duration-200"
            onClick={() =>
              window.open("https://twitter.com/twahidulislam", "_blank")
            }
          />

          <FaTelegramPlane
            className="text-2xl cursor-pointer hover:text-[#0088CC] duration-200"
            onClick={() =>
              window.open("https://t.me/twahidulislamDev", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
