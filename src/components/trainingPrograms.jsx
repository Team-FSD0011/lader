
import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import k2 from "../components/assets/k2.png";
import rec from "../components/assets/ic2.png";
// import study from "../components/assets/ic3.png";
import fsd from "../components/assets/fsd.png";
import datas from "../components/assets/datas.png";
import ent from "../components/assets/ent.png";

const TrainingPrograms = () => {
  return (
    <div className="pt-24">
      {/* Banner section */}
      <div className="relative h-64 pb-[550px] lg:h-96 mt-[20px] bg-[url('src/components/assets/k2.png')]  bg-no-repeat bg-cover ">
    

        <div className="absolute inset-0 flex justify-start items-center pl-[80px] ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white ">
            Explore the{" "} <br />
            <span className="text-white">TOP</span>
            <span className="text-black">{" "}"TRENDING" <br /> FirstLadder Courses</span>
          </h1>
        </div>
      </div>
     

<br />
      {/* Get Started button */}
      <div className="flex justify-center">
      <a className="group relative inline-block focus:outline-none focus:ring" href="#">
  <span
    className="absolute inset-0 sm:translate-x-0 sm:translate-y-0 bg-sky-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

  <span
    className="relative inline-block border-2 border-current sm:px-6 md:px-8 lg:px-10 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-widest"
  >
    Get Started
  </span>
</a>
</div>

      {/* Section introduction */}
      <div className="mt-20 mx-4 lg:mx-16 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Take pride in successful training programs
        </h2>
        <p className="mt-4">
          Welcome to Firstladder — your gateway to career advancement and skill
          enhancement. Our mission is to empower individuals with the knowledge
          and tools they need to succeed in their careers. Whether you're just
          starting out or looking to advance to the next level, Firstladder
          offers a range of courses designed to meet your needs.
        </p>
      </div>

      {/* Courses section */}
      <div className="mt-20 mx-4 lg:mx-16">
        <h3 className="text-center text-3xl lg:text-4xl font-bold">
          THE 3 Courses You Must Know About
        </h3>
        <div className="mt-8 space-y-12">
          {/* Full Stack Web Development */}
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-sky-500 rounded-md shadow-lg overflow-hidden">
            <img
              src={fsd}
              alt="Full Stack Web Development"
              className="w-full lg:w-1/2 h-64 object-cover"
            />
            <div className="p-6 lg:p-12">
              <h4 className="text-3xl font-bold">Full Stack Web Development</h4>
              <p className="my-4">
                Learn the ins and outs of full-stack web development. Build
                modern websites with cutting-edge technology.
              </p>
              <button className="px-4 py-2 border border-sky-400 rounded-lg text-sky-500 transition duration-300 hover:bg-sky-400 hover:text-white">
                Join
              </button>
            </div>
          </div>

          {/* Enrolled Agent Training */}
          <div className="flex flex-col lg:flex-row-reverse items-center bg-gradient-to-r from-sky-500 to-white rounded-md shadow-lg overflow-hidden">
            <img
              src={ent}
              alt="Enrolled Agent Training"
              className="w-full lg:w-1/2 h-64 object-cover"
            />
            <div className="p-6 lg:p-12">
              <h4 className="text-3xl font-bold">Enrolled Agent Training</h4>
              <p className="my-4">
                Become a certified enrolled agent. Learn about taxes, financial
                regulations, and more.
              </p>
              <button className="px-4 py-2 border border-sky-400 rounded-lg text-sky-500 transition duration-300 hover:bg-sky-400 hover:text-white">
                Join
              </button>
            </div>
          </div>

          {/* Data Science */}
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-sky-500 rounded-md shadow-lg overflow-hidden">
            <img
              src={datas}
              alt="Data Science"
              className="w-full lg:w-1/2 h-64 object-cover"
            />
            <div class="p-6 lg:p-12">
              <h4 className="text-3xl font-bold">Data Science</h4>
              <p className="my-4">
                Dive into data science and learn how to work with large datasets
                to extract valuable insights.
              </p>
              <button
                className="px-4 py-2 border border-sky-400 rounded-lg text-sky-500 transition duration-300 hover:bg-sky-400 hover:text-white"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key features section */}
      <div className="mt-20 flex justify-center">
        <fieldset className="border border-4 border-sky-300 rounded-3xl w-full max-w-6xl p-8">
          <legend className="text-4xl font-bold text-sky-400">Key Features</legend>
          <div className="flex flex-col lg:flex-row justify-evenly items-center mt-8">
            <div className="text-center">
              <RiComputerLine size={70} className="text-sky-500" />
              <h5 className="mt-4 text-xl font-bold">Live Interactive Classes</h5>
            </div>
            <div className="text-center mt-8 lg:mt-0">
              <img src={rec} alt="Placement Assured Program" className="w-16 h-16" />
              <h5 className="mt-4 text-xl font-bold">Placement Assured Program</h5>
            </div>
            <div className="text-center mt-8 lg:mt-0">
              <IoBookSharp size={70} className="text-sky-500" />
              <h5 className="mt-4 text-xl font-bold">Comprehensive Study Material</h5>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default TrainingPrograms;

