import React from 'react'
import { useLocation } from 'react-router-dom';
import BlogsComp from './Blogs/BlogsComp.jsx';
// import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = () => {
   const location = useLocation();
   console.log(location, "useLocation");
   const {image, title, description } = location.state;
  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[300px overflow-hidden]'>
        <img src={image} alt="" 
        className='mx-auto w-full object-cover
        transition duration-700 hover:scale-110'/>
      </div>
      <div className='container'>
        <p className='text-slate-600 text-sm py-3'>
          {" "}
        </p>
        <h1 className=' font-semibold text-3xl text-center italic mt-10 text-blue-700'>{title}</h1>
        <p className='mt-[21px]'>{description}</p>
      </div>
      <BlogsComp/>
    </div>
  )
}

export default BlogsDetails
