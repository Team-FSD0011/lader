import { useEffect, React, useState } from 'react';
import image1 from "../components/assets/immigration1.jpg";
import image2 from "../components/assets/immigration2.jpg";
import ImmigrationCard from "./layoutes/immigration";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { PiPlanet } from "react-icons/pi";
import { MdContactEmergency } from "react-icons/md";
import img from "../components/assets/img1.jpg"
import imman from "../components/assets/blog7.jpg"

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
  const icon3 = (<IoTimeOutline size={35} className=" text-backgroundColor" />);
  const icon4 = (<IoTimeOutline size={35} className=" text-backgroundColor" />);
  const icon5 = (<PiPlanet size={35} className=" text-backgroundColor" />);
  const icon6 = (<MdContactEmergency size={35} className=" text-backgroundColor" />);
  return (<>

    <div className="gap-10 flex items-center justify-center w-full relative">
      <img src={imagearray[imageindex]} alt="logo" className='scroll-smooth w-full h-[650px]' />
      <div className='w-full h-[650px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50'>
      <h1 className='text-6xl font-bold text-gray-50'>Welcome to Our Company!</h1> <br />
      <h4 className='text-lg text-gray-50 mt-6 text-center font-serif flex justify-center items-center w-[75%]'>Are you looking for reliable immigration consultants to handle your immigration case? Our certified and reliable Immigration Consultant professionals can help you get a positive decision on your case! We provide services in all different areas of immigration.</h4>
      <button className='w-24 h-10 bg-orange-600 rounded-lg font-bold text-white mt-6'>Service</button>
</div>
    </div>

    <div className=" m-5 flex flex-col lg:flex-row gap-5 pt-14">
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
      <h1 className='flex justify-center font-bold text-4xl bg-custom-blue'>Looking To Study Abroad?</h1><br />
      <h5 className='flex justify-center text-xl font-semibold'>You see lots of ads in magazines and on TV, but do you know if they are the right places for you?</h5>
      <p className='flex justify-center ml-10 mr-10 mt-3'>Study abroad is becoming more common but students are increasingly overwhelmed. The process of studying abroad is not as simple as it seems. It can be a confusing, intimidating and expensive process. We provide a comprehensive study abroad assistance to help you make the right choices when applying for higher education programs. Our service will help you with every step of your study abroad journey from application, information on tuition costs, locations and course durations as well as reviews from students currently studying there, on arrival assistance, all under one roof.</p>
    </div>
    <div>
      <h1 className='flex justify-center font-bold text-2xl m-6'>Immigrate with First Ladder</h1>
      <div className=' flex-row gap-5 flex justify-evenly'>
        <img src={imman} alt="imman"  className='w-[45%] h-[40%] rounded-xl'/> <img src={imman} alt="imman" className='w-[45%] h-[40%] rounded-xl' />
      </div>
    </div>
  </>
  )
}

export default Immigration;