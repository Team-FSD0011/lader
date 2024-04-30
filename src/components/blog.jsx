import React from "react";
import AOS from "aos";

const Blog = () => {
  return (
    <div className="mt-16 text-center">
      <h1 className="font-serif text-gray-700 absolute text-5xl by-20 italic flex items-center justify-center">Blog</h1>
      <div className="">
        <img
          className="mt-8 mx-auto w-full h-[500px] block" // Set the height to h-70 (adjust as needed)
          src="src/components/assets/blog7.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blog;
