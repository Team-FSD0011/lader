
// import React from "react";
// import AOS from "aos";

// const Blog = () => {
//   return (
//     <div className="mt-16 text-center relative">
//       <h1 className="font-serif text-gray-700 absolute text-7xl flex items-start mt-8 ml-60 h-[500px] left-1/3 right-0/1 transform -translate-x-1/2 italic">Blog</h1>
//       <h2 className="font-serif absolute text-4xl flex items-start mt-2 ml-60 h-[500px] left-1/3 right-0/1 transform -translate-x-1/2 italic text-white">Step-by-Step Guide To Turn</h2>
//       <h2 className="font-serif absolute text-4xl flex items-start mt-9 ml-60 h-[500px] left-1/3 right-0/1 transform -translate-x-1/2 italic text-white">Your Blog Into A Website</h2>
//       <div className="">
//         <img
//           className="mt-8 mx-auto w-full h-[500px] block"
//           src="src/components/assets/blog7.jpg"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React from "react";
import AOS from "aos";

const Blog = () => {
  return (
    <div className="mt-16 text-center relative">
      <div className="relative">
      <h1 className="font-serif text-gray-700 absolute text-7xl flex  mt-8 ml-60 h-[500px] left-1/3 right-0/1 transform -translate-x-1/2 italic">Blog</h1>
        <img
          className=" object-cover mt-8 mx-auto w-full h-[500px] block"
          src="src/components/assets/blog7.jpg"
          alt=""
        />
      <div>
        <h2 className="font-serif absolute text-4xl text-white top-1/1 left-1/2 transform -translate-x-1/2 italic ">Step-by-Step Guide To Turn</h2>
        <h2 className="font-serif absolute text-4xl text-white top-1/2 left-1/2 transform -translate-x-1/2 italic">Your Blog Into A Website</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Blog;
