
import React from "react";
import k2 from "../components/assets/k2.png";

const TrainingPrograms = () => {
  return (
    <div className="pt-[80px]">
      <div className="flex font-bold text-4xl relative">
        <h1 className="ml-[50px]">
          Take pride in successful training programs
          <span className="text-sky-400">
            <br />
            <br />
            - Get the best
          </span>
        </h1>
      </div>

      <div className="mt-[30px] ml-[60px] mb-[30px] font-bold block">
        <p>Welcome to Firstladder — your gateway to career advancement and skill enhancement. Our mission is to empower individuals with the knowledge and tools they need to succeed in their careers. Whether you're just starting out or looking to advance to the next level, Firstladder offers a range of courses designed to meet your needs.</p>
      </div>

      <div className="relative flex justify-end items-center h-[400px] w-full">
        <img src={k2} alt="Course banner" className=" object-cover" />

        <div className="absolute">
          <h1 className="text-3xl font-bold text-current mr-[505px] my-[-70px]">
           <span className="text-4xl"> Explore the <span className="text-sky-400">TOPPEST</span> </span> <span className="text-white"> "TRENDing" FirstLadder Courses</span>
          </h1>
        </div>
       
      </div>
      <div className="m-[80px] my-[-170px] ml-[160px]">
<a
  class="group relative inline-block overflow-hidden border border-sky-600 px-8 py-3 focus:outline-none focus:ring"
  href="#"
>
  <span
    class="absolute inset-y-0 left-0 w-[2px] bg-sky-400 transition-all group-hover:w-full group-active:bg-indigo-500"
  ></span>

  <span
    class="relative text-sm font-medium text-sky-400 transition-colors group-hover:text-white"
  >
    Get Started
  </span>
</a>
</div>
    </div>
  );
};

export default TrainingPrograms;

