import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogsComp = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div>
      <div className='container' data-aos="fade-up">
        <h1 className='my-8 border-l-8 border-sky-600 py-2 pl-2 text-3xl font-bold'>Our latest Blogs</h1>
      </div>
    </div>
  );
}

export default BlogsComp;
