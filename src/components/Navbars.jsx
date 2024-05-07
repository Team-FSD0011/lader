import React from 'react'
import logo from '../components/assets/logo.png'
import { Link } from "react-router-dom";


const Navbars = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-7 py-3 font-semibold italic cursor-pointer bg-sky-500 text-white scroll-smooth">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="pt-2" />
      </div>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-10 mt-2 md:mt-0">
        <li className="hover:text-gray-600 pt-2">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-600 pt-2">
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li className="hover:text-gray-600 pt-2">
          <Link to="/trainingPrograms">Training Programs</Link>
        </li>
        <li className="hover:text-gray-600 pt-2">
          <Link to="/studyAbroad">Study Abroad</Link>
        </li>
        <li className="hover:text-gray-600 pt-2">
          <Link to="/immigration">Immigration</Link>
        </li>
        <li className="hover:text-gray-600 pt-2">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="hover:text-gray-600 pt-2">
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </ul>
      <div>
        <button className="bg-white text-sky-500 hover:text-gray-600 rounded-lg px-2 py-2">
          <Link to="/index">Explore Now</Link>
        </button>
      </div>
    </div>
  </>
  
  )
}

export default Navbars