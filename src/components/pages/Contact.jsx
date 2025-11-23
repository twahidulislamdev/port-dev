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
    <div className="relative w-full lg:w-[24%] h-full lg:h-[770px] bg-[#1e1e1f] rounded-2xl p-3 lg:p-5 overflow-hidden">
      {/* ---------- Profile ---------- */}
      <div className="px-5 pt-5 lg:p-5 lg:border-b-2 lg:border-neutral-600 flex flex-row lg:flex-col justify-center items-center">
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
      <div className="flex lg:hidden absolute top-0 right-0 bg-[#202022] px-3 py-2 rounded-bl-3xl rounded-tr-2xl border-2 border-neutral-500 shadow-xs shadow-neutral-5 600">
        <IoChevronUp
          onClick={() => setOpen(!open)}
          className={`text-2xl cursor-pointer transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* ---------- Mobile Dropdown Items ---------- */}
      <div className="lg:hidden">
        {open && (
          <div className="hidden lg:block mt-5 space-y-5 border-t border-neutral-800/50 pt-5">
            {/* Email */}
            <div className="flex items-center gap-4 p-3 hover:bg-neutral-800/30 rounded-xl transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <IoMailOutline className="text-amber-400 text-lg" />
              </div>
              <div>
                <h6 className="text-neutral-400 text-sm">EMAIL</h6>
                <p className="text-white text-base">twahid746@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-3 hover:bg-neutral-800/30 rounded-xl transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <IoPhonePortraitOutline className="text-amber-400 text-lg" />
              </div>
              <div>
                <h6 className="text-neutral-400 text-sm">PHONE</h6>
                <p className="text-white text-base">+8801825653993</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-3 hover:bg-neutral-800/30 rounded-xl transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <IoLocation className="text-amber-400 text-lg" />
              </div>
              <div>
                <h6 className="text-neutral-400 text-sm">LOCATION</h6>
                <p className="text-white text-base">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 border-t border-neutral-800/50">
              <p className="text-neutral-400 text-sm mb-3 text-center">
                FOLLOW US
              </p>
              <div className="flex justify-center items-center gap-4">
                <div
                  className="p-3 bg-neutral-800/50 hover:bg-blue-600/20 border border-neutral-700/50 hover:border-blue-400/30 rounded-xl cursor-pointer transition-all group"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/twahidulislamdev104432",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedin className="text-neutral-400 group-hover:text-blue-400 text-xl transition-colors" />
                </div>
                <div
                  className="p-3 bg-neutral-800/50 hover:bg-gray-600/20 border border-neutral-700/50 hover:border-gray-400/30 rounded-xl cursor-pointer transition-all group"
                  onClick={() =>
                    window.open("https://github.com/twahidulislamDev", "_blank")
                  }
                >
                  <FaGithub className="text-neutral-400 group-hover:text-gray-300 text-xl transition-colors" />
                </div>
                <div
                  className="p-3 bg-neutral-800/50 hover:bg-blue-400/20 border border-neutral-700/50 hover:border-blue-300/30 rounded-xl cursor-pointer transition-all group"
                  onClick={() =>
                    window.open("https://twitter.com/twahidulislam", "_blank")
                  }
                >
                  <FaXTwitter className="text-neutral-400 group-hover:text-blue-400 text-xl transition-colors" />
                </div>
                <div
                  className="p-3 bg-neutral-800/50 hover:bg-blue-500/20 border border-neutral-700/50 hover:border-blue-400/30 rounded-xl cursor-pointer transition-all group"
                  onClick={() =>
                    window.open("https://t.me/twahidulislamDev", "_blank")
                  }
                >
                  <FaTelegramPlane className="text-neutral-400 group-hover:text-blue-500 text-xl transition-colors" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------- Desktop View (Always visible on desktop) ---------- */}
      <div className="hidden lg:block mt-5 space-y-5 border-t border-neutral-800/50 pt-5">
            {/* Email */}
            <div className="flex items-center gap-4 p-3 hover:bg-neutral-800/30 rounded-xl transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <IoMailOutline className="text-amber-400 text-lg" />
              </div>
              <div>
                <h6 className="text-neutral-400 text-sm">EMAIL</h6>
                <p className="text-white text-base">twahid746@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-3 hover:bg-neutral-800/30 rounded-xl transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <IoPhonePortraitOutline className="text-amber-400 text-lg" />
              </div>
              <div>
                <h6 className="text-neutral-400 text-sm">PHONE</h6>
                <p className="text-white text-base">+8801825653993</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-3 hover:bg-neutral-800/30 rounded-xl transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <IoLocation className="text-amber-400 text-lg" />
              </div>
              <div>
                <h6 className="text-neutral-400 text-sm">LOCATION</h6>
                <p className="text-white text-base">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 border-t border-neutral-800/50">
              <p className="text-neutral-400 text-sm mb-3 text-center">
                FOLLOW US
              </p>
              <div className="flex justify-center items-center gap-4">
                <div
                  className="p-3 bg-neutral-800/50 hover:bg-blue-600/20 border border-neutral-700/50 hover:border-blue-400/30 rounded-xl cursor-pointer transition-all group"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/twahidulislamdev104432",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedin className="text-neutral-400 group-hover:text-blue-400 text-xl transition-colors" />
                </div>
                <div
                  className="p-3 bg-neutral-800/50 hover:bg-gray-600/20 border border-neutral-700/50 hover:border-gray-400/30 rounded-xl cursor-pointer transition-all group"
                  onClick={() =>
                    window.open("https://github.com/twahidulislamDev", "_blank")
                  }
                >
                  <FaGithub className="text-neutral-400 group-hover:text-gray-300 text-xl transition-colors" />
                </div>
                <div
                  className="p-3 bg-neutral-800/50 hover:bg-blue-400/20 border border-neutral-700/50 hover:border-blue-300/30 rounded-xl cursor-pointer transition-all group"
                  onClick={() =>
                    window.open("https://twitter.com/twahidulislam", "_blank")
                  }
                >
                  <FaXTwitter className="text-neutral-400 group-hover:text-blue-400 text-xl transition-colors" />
                </div>
                <div
                  className="p-3 bg-neutral-800/50 hover:bg-blue-500/20 border border-neutral-700/50 hover:border-blue-400/30 rounded-xl cursor-pointer transition-all group"
                  onClick={() =>
                    window.open("https://t.me/twahidulislamDev", "_blank")
                  }
                >
                  <FaTelegramPlane className="text-neutral-400 group-hover:text-blue-500 text-xl transition-colors" />
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default SideBar;
