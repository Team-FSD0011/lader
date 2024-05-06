import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
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
import grp from "./assets/grp.png"
const Navbar = () => {
  return (
    <>
      {/* Navbar */}
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
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-32 m-8 scroll-smooth ">
   <div class="bg-gray-200 p-4 items-center justify-center rounded-lg">
      <img src={bg} alt="" class="max-w-full h-auto rounded-lg" />
   </div>   
   <div class="bg-gray-200 p-5 flex flex-col justify-center rounded-lg">
    <h3 className="text-3xl font-semibold ml-32">Planning to Study Abroad?</h3>
      <p class="text-md mb-6 mt-6 ml-2 mr-2">
Study abroad is becoming more common but the students are increasingly overwhelmed. You see lots of ads in magazines, social media and on TV, but do you know if they are the right places for you?
The process of studying abroad is not as simple as it seems. It can be a confusing, intimidating and expensive process. What you choose to study and where you study will affect your college career, and possibly the rest of your life!
Our team provides a comprehensive study abroad assistance to help you make the right choices when applying for higher education programs. Our services will help you with every step of your study abroad journey from application to arrival all under one roof!</p>
      <Link to="">
         <button class="text-md font-semibold text-white bg-sky-500 py-3 px-8 rounded-lg shadow-lg hover:bg-sky-600 ml-40">
            Enquire Now for Training Programs
         </button>
      </Link>
   </div>
</div>

<div className="container scroll-smooth">
    <h3 className="text-2xl font-semibold mb-4 mt-12 text-center ml-36 mb-8">Why Choose First Ladder for Study Abroad?</h3>
    <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-3 gap-8 ml-48">
        <div className="flex items-center bg-sky-200 p-12 rounded-lg">
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
        <div className="flex items-center bg-sky-200 p-12 rounded-lg">
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


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 cursor-pointer scroll-smooth">
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
        <div className="flex flex-col items-center rounded-lg p-6 shadow-md ">
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
        <div className="flex flex-col items-center rounded-lg p-6 shadow-md">
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

      <div className="flex flex-col justify-center items-center m-4 cursor-pointer bg-gray-100 rounded-lg shadow-lg scroll-smooth">
  <p className="text-md text-gray-700 mt-12 mb-2 ">
  We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers and employers.
  </p>
  <p className="text-md text-gray-700 mb-4">
  Our process starts with developing an accurate profile of each candidate and using that as our database to match them with the available opportunities in terms of education and jobs.
  </p>
  <Link to="/contactUs">
    <button className="text-md font-semibold text-white bg-sky-500 py-3 px-8 mb-2 rounded-lg shadow-lg hover:bg-sky-600">
      Know More
    </button>
  </Link>
</div>
<div className="relative flex items-center justify-center text-center p-24 rounded-lg mt-8 bg-gray-200">
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
  <div class="flex flex-wrap justify-between items-center bg-gray-200 p-8 shadow-2xl mt-4 cursor-pointer">
      <div class="col-md-4">
        <div className="ml-4">
          <h5 className="text-lg font-bold mb-2">About Us</h5>
          <p className="text-md">Your premier consultancy abroad, dedicated to guiding your global success.</p>
          <p className="text-md">First Ladder Company - Consultancy Abroad</p> 
        </div>
      </div>
      <div class="col-md-4">
        <div>
          <h5  className="text-lg font-bold mb-2" >Services</h5>
          <ul>
            <li className="text-md">Study Abroad</li>
            <li className="text-md">Training Programs</li>
            <li className="text-md">Immigration Services</li>
            <li className="text-md">Blog</li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div>
          <h5 className="text-lg font-bold mb-2">Contact Us</h5>
          <ul>
            <li className="text-md">First Ladder Management Solutions Private Limited</li>
            <li className="text-md">714, 7th Floor, PhaseII , Spencer Plaza, Anna Salai, Chennai 600002.</li>
            <li className="text-md">hr@firstladder.com</li>
            <li className="text-md">8300941219</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;