
import React from "react";
import k2 from "../components/assets/k2.png";
import live from"../components/assets/live.png";
import rec from "../components/assets/place.png";
import study from "../components/assets/study.png";
import fsd from "../components/assets/fsd.png"




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
      <div className="m-[80px] my-[-170px] ml-[140px]">
<a
  class="group relative inline-block overflow-hidden border border-sky-600 px-8 py-3 focus:outline-none focus:ring"
  href="#course"
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
   
  {/* slider */}
  
    <div className="">
    
    <div className="mt-[300px] py-[50px]">
    <div className=" mx-48 h-1 border -2 bg-blue-300" id="course"></div>
      <h1 className="text-3xl flex justify-center mt-[100px]" ><strong><span className="font-bold text-5xl text-sky-400">THE 3</span> Course ! You Must Have a Knowledge About.</strong></h1>
    </div>
    <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800" >

	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row">
      
			<img src={fsd} alt="" className="h-100 dark:bg-gray-500 aspect-video mr-[100px]" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50 pb-[170px]">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
				<h3 className="text-3xl font-bold">FULL STACK WEB DEVOLEPMENT</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start text-sky-500 border border-2 border-sky-400 rounded-3xl transition duration-300 transform hover:scale-110 p-3 hover:bg-sky-500 font-bold hover:text-white">Join</button>
			</div>
		</div>
    <br />
    <br />
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video ml-[100px]" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50 pb-[170px]">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
				<h3 className="text-3xl font-bold">ENROLLED AGENT TRAINING</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start text-sky-500 border border-2 border-sky-400 rounded-3xl transition duration-300 transform hover:scale-110 p-3 hover:bg-sky-500 font-bold hover:text-white">Join</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video mr-[100px]" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50 pb-[190px]">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
				<h3 className="text-3xl font-bold">DATA SCIENCE</h3>
				<p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start text-sky-500 border border-2 border-sky-400 rounded-3xl transition duration-300 transform hover:scale-110 p-3 hover:bg-sky-500 font-bold hover:text-white">Join</button>
			</div>
		</div>
	</div>
</section>
   
</div>

<center>
<fieldset className="border border-4 border-sky-300 w-[1100px]">
  <div className="pt-[30px]">        
  <h1 className="flex justify-center font-bold text-4xl text-sky-400 ">KEY FRAMES</h1>
  </div>
  <div className="flex justify-evenly pt-[60px]">
        <div>
        <img src={live} alt="" className="h-[70px]" />
        <h1 className="pt-[30px] font-bold">LIVE ITERACTIVE CLASSES</h1>
        </div>
        <div>
        <img src={rec} alt="" className="h-[70px]"/>
        <h1 className="pt-[30px] font-bold">  PLACEMENT ASSURED PROGRAM</h1>
        </div>
        <div>
        <img src={study} alt="" className="h-[70px] "/>
        <h1 className="pt-[30px] font-bold">COMPREHENSIVE STUDY MATERIAL</h1>
        </div>
        
      

        </div>
        <div className="pt-[60px]">

      </div>
        </fieldset>
        </center>
</div>
  );
};

export default TrainingPrograms;

