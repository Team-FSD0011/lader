import { useEffect, React, useState } from 'react';
import image1 from "../components/assets/immigration1.jpg";
import image2 from "../components/assets/immigration2.jpg";
import ImmigrationCard from "./layoutes/immigration";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { PiPlanet } from "react-icons/pi";
import { MdContactEmergency } from "react-icons/md";
import { MdMedicalServices } from "react-icons/md";
import img from "../components/assets/img1.jpg";
import iman from "../components/assets/blog7.jpg";
import mans from "../components/assets/Australia.jpg";



const Immigration = () => {
  const [imageindex, setimageindes] = useState(0)
  const imagearray = [image1, image2]

  useEffect(() => {
    const interval = setInterval(() => {
      setimageindes((prev) => (prev + imagearray.length + 1) % imagearray.length)
    }, 3000)
    return () => clearInterval(interval)

  }, [imagearray])
  const icon1 = (<FaRegNewspaper size={35} className=" text-backgroundColor" />);
  const icon2 = (<MdHomeRepairService size={35} className=" text-backgroundColor" />);
  const icon3 = (<MdMedicalServices size={35} className=" text-backgroundColor" />);
  const icon4 = (<IoTimeOutline size={35} className=" text-backgroundColor" />);
  const icon5 = (<PiPlanet size={35} className=" text-backgroundColor" />);
  const icon6 = (<MdContactEmergency size={35} className=" text-backgroundColor" />);
  return (<>
    <div className="gap-10 flex items-center justify-center w-full relative">
      <img src={imagearray[imageindex]} alt="logo" className='scroll-smooth w-full h-[650px]' />
      <div className='w-full h-[650px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50'>
        <h1 className='text-5xl font-bold text-gray-50'>Welcome to Our Company!</h1> <br />
        <h4 className='text-lg text-gray-50 mt-6 text-center font-serif flex justify-center items-center w-[75%]'>Are you looking for reliable immigration consultants to handle your immigration case? Our certified and reliable Immigration Consultant professionals can help you get a positive decision on your case! We provide services in all different areas of immigration.</h4>
        <button className='w-24 h-10 bg-orange-600 rounded-lg font-bold text-white mt-6'>Service</button>
      </div>
    </div>
    <div className=" flex flex-col lg:flex-row gap-5 pt-14">
      <ImmigrationCard icon={icon1} title="Consultation per Hour" />
      <ImmigrationCard icon={icon2} title="Consultation per Question" />
      <ImmigrationCard icon={icon3} title="Full Package Service" />
      <ImmigrationCard icon={icon4} title="Immigration Plan " />
      <ImmigrationCard icon={icon5} title="Application Review " />
      <ImmigrationCard icon={icon6} title="Settlement Advising" />
    </div>
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 gap-8">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">Our Vision And Mission</h1>
        <p className=" text-justify lg:text-start mt-8 font-semibold">
          Empower through education. First Ladder envisions <br /> fostering tax expertise.
          Our mission is to shape Enrolled <br />  Agents, fueling their success in the field of taxation.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
    <div className="bg-[url('src/components/assets/contactform.jpg')] bg-no-repeat bg-cover opacity-90">
      <br /><br />
      <h1 className='flex justify-center font-bold text-2xl bg-custom-blue'>Looking To Study Abroad?</h1><br />
      <h5 className='flex justify-center text-xl font-semibold'>You see lots of ads in magazines and on TV, but do you know if they are the right places for you?</h5>
      <p className='flex justify-center ml-10 mr-10 mt-3'>Study abroad is becoming more common but students are increasingly overwhelmed. The process of studying abroad is not as simple as it seems. It can be a confusing, intimidating and expensive process. We provide a comprehensive study abroad assistance to help you make the right choices when applying for higher education programs. Our service will help you with every step of your study abroad journey from application, information on tuition costs, locations and course durations as well as reviews from students currently studying there, on arrival assistance, all under one roof.</p>
    </div>
    <div>
      <h1 className='flex justify-center font-bold text-2xl text-gray-700 m-5'>Immigrate with First Ladder</h1>
      <div className=' flex-row flex justify-evenly'>
        <div className='relative w-[80%] '>
          <img src={iman} alt="iman" className='w-[80%] h-[80%] rounded-xl ml-24' />

          <div className='absolute flex  items-end left-0 top-0 w-[80%] h-[80%] '>

            <h1 className='rounded-b-lg absolute h-10 ml-24 bg-gray-500 text-white justify-center items-center text-center w-[100%] pt-2' >Welcome to Our Landon!</h1>
          </div>

        </div>
        <div className='relative w-[80%] '>
          <img src={mans} alt="iman" className='w-[80%] h-[80%] rounded-xl ml-12' />

          <div className='absolute flex  items-end left-0 top-0 w-[80%] h-[80%] '>

            <h1 className='bg-gray-500 text-white rounded-b-lg absolute h-10 ml-12 justify-center items-center text-center w-[100%] pt-2' >Welcome to Our Australia!</h1>
          </div>

        </div>
      </div>
    </div>
    <div>
      <h1 className='flex justify-center font-bold text-2xl text-gray-700'>Change Your Life Now!</h1>
      <form action="" className='p-10'>
        <div className='flex flex-row justify-center gap-10 '>
          <div>
          <h5 className='ml-2 font-semibold mb-2'>Name</h5>
            <input
              className="py-3 px-4  rounded-lg w-96 bg-white border border-gray-400"
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
            />
          </div>
          <div>
          <h5 className='ml-2 font-semibold mb-2'>Email</h5>
            <input
              className="py-3 px-4 rounded-lg w-96 bg-white border border-gray-400"
              type="email"
              name="Email"
              id="Email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <h5 className='ml-[23.3%] font-semibold m-2'>Choose Services</h5>
           <select className='ml-[23%] block justify-center appearance-none w-[54%] bg-white border border-gray-400 hover:border-gray-500 px-4 py-4 pr-8 rounded-lg shadow leading-tight focus:outline-none '>
            <option value="">Select</option>
            <option value="Overseas Education">Overseas Education</option>
            <option value="Engineering Jobs">Engineering Jobs</option>
            <option value="Training & Placement">Training & Placement</option>
            <option value="Immigration">Immigration</option>
            <option value="Campus Requirement">Campus Requirement</option>

           </select>
          </div>
          <button className='ml-[22%] m-5 w-24 h-10 bg-sky-500 rounded-lg font-bold text-white'>Submit</button>
      </form>
    </div>
   
  </>

  )
}

export default Immigration;