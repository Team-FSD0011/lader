import React from 'react'
import { useLocation } from 'react-router-dom';
import BlogsCard from './Blogs/BlogsCard';
import BlogsComp from './Blogs/BlogsComp';

const BlogsDetails = () => {
  const location = useLocation();
  console.log(location, "useLocation");
  const {image, date, title, description, author } = location.state;

  return (
    <div className=' min-h-[550px] pt-20'>
      <div className='h-[300px] overflow-hidden'>
        <img src={image} alt="" 
        className='mx-auto h-[300px] w-full object-cover
        transition duration-700 hover:scale-110' />
      </div>
       <div className='container'>
       <h1 className='text-2xl font-semibold items-center text-center mt-[21px] text-sky-600'>{title}</h1>
       <p className='mt-[21px]'>{description}</p>
       </div>
       <BlogsComp/>
    </div>
  )
}

export default BlogsDetails
