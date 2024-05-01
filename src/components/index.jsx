import React from "react";
import { Link } from "react-router-dom";
import logo from"./assets/logo.png";
const Navbar = () =>{
    return(
        <>
           <div className="flex justify-between text-sky-600 items-center text-lg px-7 py-3 font-semibold italic cursor-pointer">
            <div>
                <img src={logo} alt="" className="pt-2" />
            </div>
        <div className=""></div>
        <ul className="flex gap-10 mt-2">
            <li className="hover:text-gray-400 pt-2"><Link to="/">Home</Link></li>
            <li className="hover:text-gray-400 pt-2"><Link to="/aboutUs">About Us</Link></li>
            <li className="hover:text-gray-400 pt-2"><Link to="/trainingPrograms">Training Programs</Link></li>
            <li className="hover:text-gray-400 pt-2"><Link to="/studyAbroad">Study Abroad</Link></li>
            <li className="hover:text-gray-400 pt-2"><Link to="/immigration">Immigration</Link></li>
            <li className="hover:text-gray-400 pt-2"><Link to="/blog">Blog</Link></li>
            <li className="hover:text-gray-400 pt-2"><Link to="/contactUs">Contact Us</Link></li>
            <li className="">
            <button className=" bg-sky-500 text-white hover:bg-transparent hover:border-sky-500 hover:text-sky-500 rounded-lg px-2 py-2 border border-sky-500 "><Link to="/index">Explore Now</Link></button>
            </li>
        </ul>
        </div>
        </>
    )
}

export default Navbar;