
import React from 'react'
import { useLocation } from 'react-router-dom';
import BlogsComp from './Blogs/BlogsComp';



const BlogsDetails = () => {
  const location = useLocation();
  console.log(location, "useLocation");
  const {image, title, description} = location.state;

  return (
    <div className=' min-h-[550px] pt-20'>
      <div className='overflow-hidden '>
        <img src={image} alt="" 
        className='  scroll-smooth pl-3 pr-3 object-cover w-full'/>
      </div>
       <div className='container'>
       <h1 className='text-3xl font-bold text-center italic mt-10 text-blue-700'>{title}</h1>
       <p className='mt-[21px]'>{description}</p>
       </div>
       <BlogsComp/>
       
      
    </div>
  )
}

export default BlogsDetails
