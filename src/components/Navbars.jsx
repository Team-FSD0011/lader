import React from 'react'
import logo from '../components/assets/logo.png'
import { Link } from "react-router-dom";


const Navbars = () => {
  return (
    <>
     <div className="flex justify-between items-center px-7 py-3 font-semibold italic cursor-pointer bg-sky-500 text-white scroll-smooth">
        <div>
          <img src={logo} alt="Logo" className="pt-2" />
        </div>
        <ul className="flex gap-10 mt-2">
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
            <Link to="/contactUs">ContactUs</Link>
          </li>
          <li>
            <button className="bg-white text-sky-500 hover:text-gray-600 rounded-lg px-2 py-2">
              <Link to="/index">Explore Now</Link>
            </button>
          </li>
        </ul>
      </div></>
  )
}

export default Navbars