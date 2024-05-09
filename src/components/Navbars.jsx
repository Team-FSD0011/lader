

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../components/assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  
} from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu"

const Navbar = ({handleOrderPopup}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
<nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md z-[99999]">
  <div className="bg-sky-500 text-white ">
    <div className="container py-[2px] sm:block hidden">
  
      <div className="flex items-center">
        <div className="flex flex-row ">
      <FaPhoneSquareAlt className="mt-1"/>
        <p className=" mr-4">+91123456789</p>
        <IoMdMail className="ml-3 mt-1"/>
        <p>hr@firstladder.com</p>
      </div>
      <div className="container py-[2px] sm:block hidden ">
        <div className="flex items-center  justify-center ml-[90%] cursor-pointer">
        <FaInstagram className="mx-1 "/>
        <FaFacebook className="mx-1"/>
        <FaLinkedin className="mx-1"/>
        </div> 
        </div>
      </div>
    </div>
  </div>
  <div className="container py-3 sm:py-0">
    <div className="flex justify-between items-center">
      {/* Logo section */}
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="" className="" />
        </Link>
      </div>
      {/* Navlinks section */}
      <div className="md:hidden block">
        {/* Mobile Hamburger Menu */}
        {showMenu ? (
          <HiMenuAlt1
            onClick={toggleMenu}
            className="cursor-pointer transition-all"
            size={30}
          />
        ) : (
          <HiMenuAlt3
            onClick={toggleMenu}
            className="cursor-pointer transition-all"
            size={30}
          />
        )}
      </div>
      <div className="hidden md:block">
        {/* Navigation Links for medium and larger screens */}
        <ul className="flex items-center gap-6">
          <li className="py-4 hover:text-sky-500">
            <NavLink
              to="/"
              activeClassName="active"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </NavLink>
          </li>
          <li className="py-4 hover:text-sky-500">
            <NavLink
              activeClassName="active"
              to="/aboutUs"
              onClick={() => window.scrollTo(0, 0)}
            >
              About Us
            </NavLink>
          </li>
          <li className="py-4 hover:text-sky-500">
            <NavLink
              activeClassName="active"
              to="/trainingPrograms"
              onClick={() => window.scrollTo(0, 0)}
            >
             Training Programs
            </NavLink>
          </li>
          <li className="py-4 hover:text-sky-500">
            <NavLink
              activeClassName="active"
              to="/studyAbroad"
              onClick={() => window.scrollTo(0, 0)}
            >
              Study Abroad
            </NavLink>
          </li>

          <li className="py-4 hover:text-sky-500">
            <NavLink
              activeClassName="active"
              to="/immigration"
              onClick={() => window.scrollTo(0, 0)}
            >
              Immigration
            </NavLink>
          </li>
          <li className="py-4 hover:text-sky-500">
            <NavLink
              activeClassName="active"
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
            >
              Blog
            </NavLink>
          </li>
          <li className="py-4 hover:text-sky-500">
            <NavLink
              activeClassName="active"
              to="/contactUs"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <Link to="/contactUs">
            <button className="bg-sky-500 text-white hover:bg-transparent hover:border-sky-500 hover:text-sky-500 font-size-2 border border-sky-500 px-3 py-1 rounded-full">
            Explore Now
            </button>
      </Link>

    </div>
  </div>
  <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
</nav>

    </>
  );
};

export default Navbar;
