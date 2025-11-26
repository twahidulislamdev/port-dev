import React from "react";
import { NavLink } from "react-router-dom";
import {
  IoPersonOutline,
  IoDocumentTextOutline,
  IoFolderOpenOutline,
  IoNewspaperOutline,
  IoMailOutline,
} from "react-icons/io5";

const Header = () => {
  return (
    <>
      {/* Header for Desktop Device start */}
      <div className="w-[60%] m-auto hidden lg:flex justify-center items-center bg-[#282829] p-4 rounded-b-xl">
        <ul className="w-full m-auto flex justify-between space-x-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }
            >
              Resume
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }
            >
              Project
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Header for Desktop Device End */}

      {/* Header for Mobile Device Start */}
      <div className="fixed w-full py-5 left-0 bottom-0 m-auto lg:hidden bg-[#282829] px-3 z-10">
        <div className="w-full m-auto flex justify-between text-white">
          {/* ABOUT */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }`
            }
          >
            <IoPersonOutline className="text-lg mb-1" />
            About
          </NavLink>

          {/* RESUME */}
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }`
            }
          >
            <IoDocumentTextOutline className="text-lg mb-1" />
            Resume
          </NavLink>

          {/* PROJECT */}
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }`
            }
          >
            <IoFolderOpenOutline className="text-lg mb-1" />
            Project
          </NavLink>

          {/* BLOG */}
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }`
            }
          >
            <IoNewspaperOutline className="text-lg mb-1" />
            Blog
          </NavLink>

          {/* CONTACT */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-amber-400" : "hover:text-yellow-400"
              }`
            }
          >
            <IoMailOutline className="text-lg mb-1" />
            Contact
          </NavLink>
        </div>
      </div>
      {/* Header for Mobile Device End */}
    </>
  );
};

export default Header;
