import React from "react";
import lkjhj from '../components/assets/lkjhj.png';
import welcome1 from '../components/assets/welcome1.png';
import vision from '../components/assets/vision.jpg';
// import { Link } from "react-router-dom";
import n1 from "./assets/n1.jpeg";
import studentsimag4 from "./assets/studentsimag4.png";
import aaaasd from "./assets/aaaasd.jpg";

const AboutUs = () => {

  return (
    <>
      <div className="relative">
        <img src={lkjhj} alt="" className=" h-full ounded-xl object-cover opacity-90 w-full" />
        <div className="absolute inset-0 text-center font-bold text-5xl md:mt-56">
          <h1 className="font-serif block rounded-lg p-2 text-white pt-30">ABOUT US</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <img src={welcome1} alt="" className="md:ml-14 h-64 w-80 rounded-xl md:mt-20" />
        <div className="md:ml-4 md:mr-10">
          <h1 className="text-3xl font-bold text-center italic md:mt-10 text-sky-500">Welcome to Fisrt Ladder</h1>
          <p className="text-lg md:mt-5 md:mr-4 md:mr-10 md:ml-5 font-serif text-justify">First-Ladder is an International Education, Immigration, and Recruitment Consulting Company headquartered in Chennai, India. We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers, and employers. Our process starts with developing an accurate profile of each candidate and using that as our database to match them with the available opportunities in terms of education and jobs. Our aim is to help students and professionals from all over the world to find opportunities that match their requirements, skills, interests, and aspirations, so that they can pursue their while achieving higher returns on investment.</p>
        </div>
      </div>

    {/* return (
        <>
            <div className="relative">
                <img src={grpp} alt="" className=" h-full rounded-xl  opacity-90 w-full" />
                <div className="absolute inset-0 text-center font-bold text-5xl md:mt-56">
                    <h1 className="font-serif block rounded-lg p-2 text-white pt-30">ABOUT US</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <img src={welcome1} alt="" className="md:ml-14 h-64 w-80 rounded-xl md:mt-20" />
                <div className="md:ml-4 md:mr-10">
                    <h1 className="text-3xl font-bold text-center italic md:mt-10 text-sky-500">Welcome to Fisrt Ladder</h1>
                    <p className="text-lg md:mt-5 md:mr-4  md:ml-5 font-serif text-justify">First-Ladder is an International Education, Immigration, and Recruitment Consulting Company headquartered in Chennai, India. We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers, and employers. Our process starts with developing an accurate profile of each candidate and using that as our database to match them with the available opportunities in terms of education and jobs. Our aim is to help students and professionals from all over the world to find opportunities that match their requirements, skills, interests, and aspirations, so that they can pursue their while achieving higher returns on investment.</p>
                </div>
            </div> */}


      <div className="bg-grey-400">
        <div className="flex">
          <img src={vision} alt="" className="md:ml-14 h-64 w-80 rounded-xl md:mt-20" />
          <div>
            <h1 className="text-3xl font-bold text-center italic md:mt-10 text-sky-500">Our Vision And Mission</h1>
            <ul className="text-lg md:mt-10 md:mr-10 font-serif md:ml-14 text-justify">
              <li className="">Empower through education.</li>
              <li>First Ladder envisions fostering tax expertise.</li>
              <li>Our mission is to shape Enrolled Agents, fueling their success in the field of taxation.</li>
            </ul>
          </div>
        </div>

      </div>
      {/* <div className="flex justify-center">
        <Link to="/news">
          <button className=" bg-sky-500 p-2 rounded-lg pl-2">NEWS</button>
        </Link>

        <h1 className="ml-5">&</h1>
        <button className="ml-5 bg-sky-500 rounded-lg pl-2">EVENTS</button>
      </div>  */}
    
     
      
       
  <div className="grid grid-cols-1 flex md:grid-cols-3 gap-8 mt-16 ml-14 mr-9 md:cursor-pointer md:scroll-sm">
    <div className="flex flex-col items-center rounded-lg p-4 shadow-md max-w-xs">
      <img
        src={n1}
        alt="UK"
        className="mb-4 h-48  rounded-md object-cover"
      />
      <h3 className="text-xl font-semibold mb-4">Study in Abroad</h3>
      <p className="text-md text-gray-700">
        Discover top universities and programs in UK.
      </p>
    </div>
        <div className="flex flex-col items-center  rounded-lg p-4 shadow-md max-w-xs"> {/* Added max-w-xs */}
          <img
            src={studentsimag4}
            alt="Ireland"
            className=" mb-4 h-48 rounded-md object-cover"
          />
          <h3 className="text-xl  font-semibold mb-4">Assured Placement</h3>
          <p className="text-md text-gray-700">
            Explore education opportunities in Ireland.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-md max-w-xs"> {/* Added max-w-xs */}
          <img
            src={aaaasd}
            alt="US"
            className="mb-4 rounded-md h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-4">Grow with Us</h3>
          <p className="text-md text-gray-700">
            Learn about studying in the United States.
          </p>
        </div>
       
      </div>
      
      
      
      


    </>
  )
}

export default AboutUs;
