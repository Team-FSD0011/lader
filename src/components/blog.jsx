import React from "react";
import AOS from "aos";

const Blog = () => {
  return (
    <div className="mt-16 text-center">
      <h1 className="font-serif text-gray-700">Blog</h1>
      <div>
        <img
          className="mt-8 mx-auto w-full" // Removed max-w-lg, added w-full
          src="src/components/assets/blog7.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blog;
