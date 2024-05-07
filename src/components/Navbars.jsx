// import React from 'react'
// import logo from '../components/assets/logo.png'
// import { Link } from "react-router-dom";


// const Navbars = () => {
//   return (
//     <>
//      <div className="flex justify-between items-center px-7 py-3 font-semibold italic cursor-pointer bg-sky-500 text-white scroll-smooth">
//         <div>
//           <img src={logo} alt="Logo" className="pt-2" />
//         </div>
//         <ul className="flex gap-10 mt-2">
//           <li className="hover:text-gray-600 pt-2">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="hover:text-gray-600 pt-2">
//             <Link to="/aboutUs">About Us</Link>
//           </li>
//           <li className="hover:text-gray-600 pt-2">
//             <Link to="/trainingPrograms">Training Programs</Link>
//           </li>
//           <li className="hover:text-gray-600 pt-2">
//             <Link to="/studyAbroad">Study Abroad</Link>
//           </li>
//           <li className="hover:text-gray-600 pt-2">
//             <Link to="/immigration">Immigration</Link>
//           </li>
//           <li className="hover:text-gray-600 pt-2">
//             <Link to="/blog">Blog</Link>
//           </li>
//           <li className="hover:text-gray-600 pt-2">
//             <Link to="/contactUs">ContactUs</Link>
//           </li>
//           <li>
//             <button className="bg-white text-sky-500 hover:text-gray-600 rounded-lg px-2 py-2">
//               <Link to="/index">Explore Now</Link>
//             </button>
//           </li>
//         </ul>
//       </div></>
//   )
// }

// export default Navbars

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../components/assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu"

const dropdownLinks = [
  {
    name: "Eraining Programs",
    link: "/#eraining programs",
  },
  {
    name: "Full Stack Developer",
    link: "/#full stack developer",
  },
  {
    name: "Data Science",
    link: "/#data science",
  },
];

const Navbar = ({handleOrderPopup}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
<nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md z-[99999]">
  <div className="bg-gradient-to-r from-primary to-secondary text-white ">
    <div className="container py-[2px] sm:block hidden">
      <div className="flex items-center justify-between">
        <p className="text-sm">20% off on next booking</p>
        <p>mobile no. +91 123456789</p>
      </div>
    </div>
  </div>
  <div className="container py-3 sm:py-0">
    <div className="flex justify-between items-center">
      {/* Logo section */}
      <div>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="" className="h-16" />
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
          <li className="py-4">
            <NavLink
              to="/"
              activeClassName="active"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              activeClassName="active"
              to="/aboutUs"
              onClick={() => window.scrollTo(0, 0)}
            >
              About Us
            </NavLink>
          </li>
          {/* Dropdown section */}
          <li className="py-4 relative group cursor-pointer">
            <div className="dropdown flex items-center">
              <span>Training Programs</span>
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </div>
            <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
              <ul>
                {dropdownLinks.map((data) => {
                  return (
                    <li key={data.name}>
                      <a
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="py-4">
            <NavLink
              activeClassName="active"
              to="/studyAbroad"
              onClick={() => window.scrollTo(0, 0)}
            >
              Study Abroad
            </NavLink>
          </li>

          <li className="py-4">
            <NavLink
              activeClassName="active"
              to="/immigration"
              onClick={() => window.scrollTo(0, 0)}
            >
              Immigration
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink
              activeClassName="active"
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
            >
              Blog
            </NavLink>
          </li>
          <li className="py-4">
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

      {/* Book Now button */}
      <div className="flex items-center">
        <button
          onClick={() => handleOrderPopup(true)}
          className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
  <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
</nav>

    </>
  );
};

export default Navbar;
