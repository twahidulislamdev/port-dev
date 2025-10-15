import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <nav className="hidden  w-[60%] m-auto lg:flex justify-center items-center   bg-[#282829] p-4 rounded-b-xl">
      <ul className="w-full m-auto flex justify-between space-x-10">
        <li><Link to="/" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/resume" className="hover:text-yellow-400">Resume</Link></li>
        <li><Link to="/project" className="hover:text-yellow-400">Project</Link></li>
        <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
    </nav>

     <nav className="fixed w-full px-20 py-15 bottom-0 m-auto lg:hidden   bg-[#282829] p-4 rounded-b-xl">
      <ul className="w-full m-auto flex justify-between space-x-5">
        <li><Link to="/" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/resume" className="hover:text-yellow-400">Resume</Link></li>
        <li><Link to="/project" className="hover:text-yellow-400">Project</Link></li>
        <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
    </nav>
    </>
   
  );
};

export default Header;