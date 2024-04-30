import { useEffect, React, useState } from 'react';
import image1 from "../components/assets/immigration1.jpg";
import image2 from "../components/assets/immigration2.jpg";
import ImmigrationCard from "./layoutes/immigration";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { PiPlanet } from "react-icons/pi";
import { MdContactEmergency } from "react-icons/md";

const Immigration = () => {
  const [imageindex, setimageindes] = useState(0)
  const imagearray = [image1, image2]

  useEffect(() => {
    const interval = setInterval(() => {
      setimageindes((prev) => (prev + imagearray.length + 1) % imagearray.length)
    }, 3000)
    return () => clearInterval(interval)

  }, [imagearray])
  const icon1 = ( <FaRegNewspaper size={35} className=" text-backgroundColor" />);
  const icon2 = (<MdHomeRepairService size={35} className=" text-backgroundColor" />);
  const icon3 = (<IoTimeOutline size={35} className=" text-backgroundColor" />);
  const icon4 = (<IoTimeOutline size={35} className=" text-backgroundColor" />);
  const icon5 = (<PiPlanet size={35} className=" text-backgroundColor" />);
  const icon6 = (<MdContactEmergency size={35} className=" text-backgroundColor" />);
  return (<>

    <h1 className='flex justify-center font-bold text-4xl bg-custom-blue'>Welcome to Our Company!</h1><br />
    <div className="gap-10 flex items-center justify-center">
      <img src={imagearray[imageindex]} alt="logo" className='scroll-smooth w-screen h-[650px]' />
    </div>
    <div className=" m-5 flex flex-col lg:flex-row gap-5 pt-14">
      <ImmigrationCard icon={icon1} title="Consultation per Hour" />
      <ImmigrationCard icon={icon2} title="Consultation per Question" />
      <ImmigrationCard icon={icon3} title="Full Package Service" />
      <ImmigrationCard icon={icon4} title="Immigration Plan " />
      <ImmigrationCard icon={icon5} title="Application Review " />
      <ImmigrationCard icon={icon6} title="Settlement Advising" />
      
    </div>
  </>
  )
}

export default Immigration;