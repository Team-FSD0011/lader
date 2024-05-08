import React from "react";
import grpp from '../components/assets/grpp.jpg';
import welcome1 from '../components/assets/welcome1.png';
import vision from '../components/assets/vision.jpg';

const AboutUs = () => {
    return (
        <>
            <div className="relative">
                <img src={grpp} alt="" className=" h-full rounded-xl  opacity-90 w-full" />
                <div className="absolute inset-0 text-center font-bold text-5xl md:mt-56">
                    <h1 className="font-serif block rounded-lg p-2 text-white pt-30">ABOUT US</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <img src={welcome1} alt="" className="md:ml-14 h-64 w-80 rounded-xl md:mt-20" />
                <div className="md:ml-4 md:mr-10">
                    <h1 className="text-3xl font-bold text-center italic md:mt-10 text-sky-500">Welcome to Fisrt Ladder</h1>
                    <p className="text-lg md:mt-5 md:mr-4 md:mr-10 md:ml-5 text-justify">First-Ladder is an International Education, Immigration, and Recruitment Consulting Company headquartered in Chennai, India. We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers, and employers. Our process starts with developing an accurate profile of each candidate and using that as our database to match them with the available opportunities in terms of education and jobs. Our aim is to help students and professionals from all over the world to find opportunities that match their requirements, skills, interests, and aspirations, so that they can pursue their while achieving higher returns on investment.</p>
                </div>
            </div>

            <div className="bg-grey-400">
                <div className="flex">
                    <img src={vision} alt="" className="md:ml-14 h-64 w-80 rounded-xl md:mt-20" />
                    <div>
                        <h1 className="text-3xl font-bold text-center italic md:mt-10 text-sky-500">Our Vision And Mission</h1>
                        <ul className="text-lg md:mt-10 md:mr-10 md:ml-14 text-justify">
                            <li>Empower through education.</li>
                            <li>First Ladder envisions fostering tax expertise.</li>
                            <li>Our mission is to shape Enrolled Agents, fueling their success in the field of taxation.</li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default AboutUs;
