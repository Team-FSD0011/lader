import { useEffect, React, useState } from 'react';
import BlogsComp from './Blogs/BlogsComp.jsx'
import Img1 from "../components/assets/studentsimag1.png";
import Img2 from "../components/assets/studentsimag2.png";
import Img3 from "../components/assets/studentsimag3.png";
import Img4 from "../components/assets/studentsimag4.png";


const Blog = () => {

  const [imageindex, setimageindes] = useState(0)
  const imagearray = [Img1, Img2, Img3, Img4]

  useEffect(() => {
    const interval = setInterval(() => {
      setimageindes((prev) => (prev + imagearray.length + 1) % imagearray.length)
    }, 3000)
    return () => clearInterval(interval)

  }, [imagearray])
  return (
    <>
    <div className="gap-10 flex items-center justify-center w-full relative">
      <img src={imagearray[imageindex]} alt="logo" className='scroll-smooth w-full h-[650px]' />
      <div className='w-full h-[650px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50'>
        <h1 className='text-5xl font-bold text-gray-50'>Welcome to Our Blog!</h1> <br />
        <h4 className='text-lg text-gray-50 mt-6 text-center font-serif flex justify-center items-center w-[75%]'>Are you looking for reliable immigration consultants to handle your immigration case? Our certified and reliable Immigration Consultant professionals can help you get a positive decision on your case! We provide services in all different areas of immigration.</h4>
      </div>
    </div>
    <div className='min-h-[650px] pt-20 '>
      <BlogsComp/>
    </div>
    </>
  )
}

export default Blog

