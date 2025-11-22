import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/resume" className="hover:text-yellow-400">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-yellow-400">
              Project
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-yellow-400">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Header for Desktop Device End */}

      {/* Header for Mobile Device Start */}
      <div className="fixed w-full py-5 left-0 bottom-0 m-auto lg:hidden bg-[#282829] px-3 z-10">
        <div className="w-full m-auto flex justify-between text-white">
          {/* ABOUT */}
          <Link
            to="/"
            className="flex flex-col items-center hover:text-yellow-400 text-xs"
          >
            <IoPersonOutline className="text-lg mb-1" />
            About
          </Link>

          {/* RESUME */}
          <Link
            to="/resume"
            className="flex flex-col items-center hover:text-yellow-400 text-xs"
          >
            <IoDocumentTextOutline className="text-lg mb-1" />
            Resume
          </Link>

          {/* PROJECT */}
          <Link
            to="/project"
            className="flex flex-col items-center hover:text-yellow-400 text-xs"
          >
            <IoFolderOpenOutline className="text-lg mb-1" />
            Project
          </Link>

          {/* BLOG */}
          <Link
            to="/blog"
            className="flex flex-col items-center hover:text-yellow-400 text-xs"
          >
            <IoNewspaperOutline className="text-lg mb-1" />
            Blog
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            className="flex flex-col items-center hover:text-yellow-400 text-xs"
          >
            <IoMailOutline className="text-lg mb-1" />
            Contact
          </Link>
        </div>
      </div>
      {/* Header for Mobile Device End */}
    </>
  );
};

export default Header;
