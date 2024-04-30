// import React from "react";
// import AOS from "aos";

// const Blog = () => {
//   return (
//     <div className="mt-16 text-center relative">
//       <h1 className="font-serif text-gray-700  absolute text-5xl flex items-start mt-8 ml-40 h-[500px]">Blog</h1>
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
        <img
          className="mt-8 mx-auto w-full h-[500px] block"
          src="src/components/assets/blog7.jpg"
          alt=""
        />
        <h1 className="font-serif text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl">Blog</h1>
      </div>
    </div>
  );
};

export default Blog;
