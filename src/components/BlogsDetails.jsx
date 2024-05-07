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
        className='mx-auto h-[300px]  object-cover
        transition duration-700 hover:scale-110' />
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
