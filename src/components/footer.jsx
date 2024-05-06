// import React from "react";
// import logo from "./assets/logo.png"
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaEnvelope,
//   FaMobileAlt,
//   FaMapMarkedAlt,
// } from "react-icons/fa";
// import Australia from "../assets/Australia.jpg";
// import { Link } from "react-router-dom";
// const FooterLinks = [
//   {
//     title: "Home",
//     link: "/",
//   },
//   {
//     title: "About Us",
//     link: "/about us",
//   },
//   {
//     title: "Blog",
//     link: "/blog",
//   },
//   {
//     title: "Contact Us",
//     link: "/contact us",
//   },
// ];

// const Footer = () => {
//   return (
//     <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
//        <img src={Australia} alt=""  className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"/>
//         <div className="container">
//           <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
//             <div className="py-8 px-4">
//               <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
//                 <img src={logo} alt="" className="max-h-[60px]" />
//                 {/* TravelloGo */}
//               </h1>
//               <p className="text-sm">
//               First-Ladder is an International Education, Immigration, and Recruitment Consulting 
//               Company headquartered in Chennai, India.
//               </p>
//               <br />
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
//               <div>
//                 <div className="py-8 px-4">
//                   <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-sky-600">
//                     Important Links
//                   </h1>
//                   <ul className="flex flex-col gap-3">
//                     {FooterLinks.map((link) => (
//                       <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
//                         <Link
//                           to={link.link}
//                           onClick={() => window.scrollTo(0, 0)}
//                         >
//                           <span>&#11162;</span>
//                           <span>{link.title}</span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div>
//                 <div className="py-8 px-4">
//                   <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-sky-600">
//                     Services
//                   </h1>
//                   <ul className="flex flex-col gap-3">
//                     {FooterLinks.map((link) => (
//                       <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
//                         <Link
//                           to={link.link}
//                           onClick={() => window.scrollTo(0, 0)}
//                         >
//                           <span>&#11162;</span>
//                           <span>{link.title}</span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div>
//                 <div className="py-8 px-4">
//                   <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-sky-600">
//                     Contact Us
//                   </h1>
//                   <div className="flex items-center gap-3 ">
//                 <FaEnvelope />
//                 <p>hr@firstladder.com</p>
//               </div>
//               <div className="flex items-center gap-3 mt-3">
//                 <FaMobileAlt />
//                 <p>+91 123456789</p>
//               </div>
//               <div className="flex items-center gap-3 mt-3">
//                 <FaMapMarkedAlt />
//                 <p>714A, 7th floor, Phase II, Spencer Plaza, Anna Salai, Chennai 600
//                   002.</p>
//               </div>
              
//               {/* social handles */}
//               <div>
//                 <div className="flex items-center gap-3 mt-6">
//                   <a href="#">
//                     <FaInstagram className="text-3xl" />
//                   </a>
//                   <a href="#">
//                     <FaFacebook className="text-3xl" />
//                   </a>
//                   <a href="#">
//                     <FaLinkedin className="text-3xl" />
//                   </a>
//                 </div>
//               </div>
            
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="text-center py-5 border-t-2 border-gray-300/50 bg-sky-600 text-white">
//               @copyright 2024 All rights reserved || Made with ❤️ by Dilshad
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Footer