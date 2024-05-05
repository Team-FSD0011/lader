import React from 'react'

const BlogsComp = () => {
  return (
    <div>
       <div className='container' data-aos="fade-up">
        <h1 className='my-8 border-l-8 border-sky-600 py-2 pl-2 text-3xl font-bold'>Our latest Blogs</h1>
         <div>
          {
             BlogsData.map((item, index) =>(
               <BlogsCard key={index} {...item}/>
             ))
          }

      </div>
    </div>
    </div>
  )
}

export default BlogsComp
