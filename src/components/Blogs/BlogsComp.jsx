import React from 'react'
import BLogsCard from "./BlogsCard.jsx";
import Img1 from "../../assets/Places/img1.png"
import Img2 from "../../assets/Places/img2.png"
import Img3 from "../../assets/Places/img3.png"



const BlogsData = [
 { 
  id:1,
  image:Img1,
  title:"The 10 best places to visit in India",
  description:"Introduction: The About Us section is where visitors learn about the company's history, mission, and values. It sets the tone for the brand's identity.Team: This section often includes information about key team members, their roles, and sometimes their backgrounds or expertise.Company History: Details about when the company was founded, major milestones, and its growth over time can be included here.",
  author:"Juhn",
  date:"April, 2022",
},
{ 
  id:1,
  image:Img2,
  title:"The 10 best places to visit in India",
  description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore.",
  author:"Juhn",
  date:"April, 2022",
},
{ 
  id:1,
  image:Img3,
  title:"The 10 best places to visit in India",
  description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore.",
  author:"Juhn",
  date:"April, 2022",
},
]
const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up"
      className='container'>
        <h1 className='my-8 border-l-8
        border-primary/50 py-2 pl-2
        text-3xl font-bold'
        >Our latest Blogs</h1>
         <div className='grid grid-cols-1 gap-4
         sm:grid-cols-2 md:grid-cols-3'>
          {
            BlogsData.map((item, index) =>(
               <BLogsCard key={index} {...item}/>
            ))
          }
         </div>
      </div>
    </div>
  )
}

export default BlogsComp
