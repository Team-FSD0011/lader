import React from "react";
import AOS from "aos";

const Blog = () => {
  return (
    <div className="mt-16 text-center relative">
      <h1 className="font-serif text-gray-700 text-5xl italic flex items-center justify-center h-[500px]">Blog</h1>
      <div className="">
        <img
          className="mt-8 mx-auto w-full h-[500px] block"
          src="src/components/assets/blog7.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blog;
