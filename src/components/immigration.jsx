import  { useEffect,React, useState } from 'react';
import image1 from "../components/assets/immigration1.jpg";
import image2 from "../components/assets/immigration2.jpg";
import Aos from 'aos';



const Immigration = () => {
  const[imageindex,setimageindes]=useState(0)
  const imagearray=[image1,image2]

useEffect(()=>{
  const interval=setInterval(()=>{
    setimageindes((prev)=>(prev+imagearray.length+1)%imagearray.length)
  },3000)
  return ()=> clearInterval(interval)

},[imagearray])
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="gap-10  w-full h-screen">
     <img src={imagearray[imageindex]} alt="logo" className='scroll-smooth  w-5 h-5' />
     
    </div>
  )
}

export default Immigration;