import React from "react";
import { Link } from "react-router-dom";
import bg from "./assets/bg.jpg";
import bg4 from "./assets/uk.jpg";
import bg5 from "./assets/ireland.jpg";
import bg6 from "./assets/us.jpg";
import logo2 from "./assets/logo2.jpg";
import logo3 from "./assets/logo3.jpg";
import logo4 from "./assets/logo4.jpg";
import logo5 from "./assets/logo5.jpg";
import logo6 from "./assets/logo6.jpg";
import logo7 from "./assets/logo7.jpg";
import grp from "./assets/grp.png";

const Home = () => {
  return (
    <>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 m-8 md:scroll-sm ">
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={bg} alt="" className="max-w-full h-auto rounded-lg" />
        </div>   
        <div className="bg-gray-200 p-5 flex flex-col justify-center rounded-lg">
          <h3 className="text-3xl font-semibold text-center md:text-left">Planning to Study Abroad?</h3>
          <p className="text-md mb-6 mt-6 ml-2 mr-2 text-center md:text-left">
            Study abroad is becoming more common but the students are increasingly overwhelmed. You see lots of ads in magazines, social media and on TV, but do you know if they are the right places for you? The process of studying abroad is not as simple as it seems. It can be a confusing, intimidating and expensive process. What you choose to study and where you study will affect your college career, and possibly the rest of your life! Our team provides a comprehensive study abroad assistance to help you make the right choices when applying for higher education programs. Our services will help you with every step of your study abroad journey from application to arrival all under one roof!
          </p>
          <Link to="/">
            <button className="text-md font-semibold text-white bg-sky-500 py-3 px-8 rounded-lg shadow-lg hover:bg-sky-600 self-center md:self-start">
              Enquire Now for Training Programs
            </button>
          </Link>
        </div>
      </div>

      <div className="container md:scroll-sm">
        <h3 className="text-2xl font-semibold mt-12 text-center md:ml-36 mb-8">Why Choose First Ladder for Study Abroad?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:ml-48">
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <img src={logo3} alt="" className="h-12 mr-2" />
            <p className="text-md">Interview Preparation</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <img src={logo4} alt="" className="h-12 mr-2" />
            <p className="text-md">University & Program Shortlist</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <img src={logo6} alt="" className="h-12 mr-2" />
            <p className="text-md">Letter of Recommendation Guidance</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <img src={logo2} alt="" className="h-12 mr-2" />
            <p className="text-md">Profile Analysis</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <img src={logo5} alt="" className="h-12 mr-2" />
            <p className="text-md">Scholarship & Financial Aid Advice</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <img src={logo7} alt="" className="h-12 mr-2" />
            <p className="text-md">SAT & IELTS Prep</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:cursor-pointer md:scroll-sm">
        <div className="flex flex-col items-center rounded-lg p-4 shadow-md">
          <img
            src={bg4}
            alt="UK"
            className="h-64 w-64 mb-4 rounded-md object-cover"
          />
          <h3 className="text-xl font-semibold mb-4">Study in the UK</h3>
          <p className="text-md text-gray-700">
            Discover top universities and programs in the UK.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-md">
          <img
            src={bg5}
            alt="Ireland"
            className="h-64 w-64 mb-4 rounded-md object-cover"
          />
          <h3 className="text-xl font-semibold mb-4">Study in Ireland</h3>
          <p className="text-md text-gray-700">
            Explore education opportunities in Ireland.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-md">
          <img
            src={bg6}
            alt="US"
            className="h-64 w-64 mb-4 rounded-md object-cover"
          />
          <h3 className="text-xl font-semibold mb-4">Study in the US</h3>
          <p className="text-md text-gray-700">
            Learn about studying in the United States.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center m-4 md:cursor-pointer bg-gray-100 rounded-lg shadow-lg md:scroll-sm">
        <p className="text-md text-gray-700 mt-12 mb-2 text-center">
          We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers and employers.
        </p>
        <p className="text-md text-gray-700 mb-4 text-center">
          Our process starts with developing an accurate profile of each candidate and using that as our database to match them with the available opportunities in terms of education and jobs.
        </p>
        <Link to="/contactUs">
          <button className="text-md font-semibold text-white bg-sky-500 py-3 px-8 mb-2 rounded-lg shadow-lg hover:bg-sky-600">
            Know More
          </button>
        </Link>
      </div>
      <div className="relative flex items-center justify-center text-center p-24 rounded-lg mt-8 bg-gray-200 md:scroll-sm">
        <div className="absolute">
          <img src={grp} alt="Study Abroad" className="w-full h-full rounded-lg" />
        </div>
        <div className="relative mt-28">
          <h2 className="text-xl font-bold text-white mb-2">Start your Study Abroad journey</h2>
          <Link to="/contactUs">
            <button className="text-md font-semibold text-white bg-sky-500 py-3 px-8 mb-2 rounded-lg shadow-lg hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-400">
              Make an Appointment
            </button>
          </Link>
          <p className="text-md text-white">Consultancy Services Provided</p>
        </div>
      </div>
    </>
  );
};

export default Home;
