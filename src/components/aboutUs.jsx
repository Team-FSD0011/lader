import React from "react";
import abt from '../components/assets/abt.jpeg';
import welcome1 from '../components/assets/welcome1.png';
import vision from '../components/assets/vision.jpg';

const AboutUs = () => {
    return (
        <>
            <div className="relative">
                <img src={abt} alt="" className=" h-80  rounded-xl w-full relative " />
                <div className="absolute inset-0 text-center font-bold text-6xl top-36">
                    <h1 className="font-serif block  rounded-lg p-2 text-white">ABOUT US</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <img src={welcome1} alt="" className="md:ml-14 h- w-80 rounded-xl mt-20" />
                <div className="md:ml-4 md:mr-10">
                    <h1 className="text-3xl font-bold text-center italic mt-10 text-blue-700">Welcome to Our Company!</h1>
                    <p className="text-lg mt-5 mr-4 md:mr-10 md:ml-5 text-justify">First-Ladder is an International Education, Immigration, and Recruitment Consulting Company headquartered in Chennai, India. We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers, and employers. Our process starts with developing an accurate profile of each candidate and using that as our database to match them with the available opportunities in terms of education and jobs. Our aim is to help students and professionals from all over the world to find opportunities that match their requirements, skills, interests, and aspirations, so that they can pursue their while achieving higher returns on investment.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-10">
                <img src={vision} alt="" className="md:ml-14 h-56 w-80 rounded-xl mt-20" />
                <div className="md:ml-4 md:mr-10">
                    <h1 className="text-3xl font-bold text-center italic mt-10 text-blue-700">Our Vision And Mission</h1>
                    <ul className="text-lg mt-10 md:mt-5 mr-4 md:mr-10 md:ml-5 text-justify ">
                        <li>Empower through education.</li>
                        <li>First Ladder envisions fostering tax expertise.</li>
                        <li>Our mission is to shape Enrolled Agents, fueling their success in the field of taxation.</li>
                    </ul>
                </div>
            </div>


           <div className="flex ">
              
                   <img src={vision} alt="" className="ml-14 h-64 w-80 rounded-xl mt-20 " />
              
              <div>
                <h1 className="text-3xl font-bold text-center italic mt-10 text-blue-700">Our Vision And Mission</h1>
                <li className="text-lg  mt-10  mr-10 ml-14 text-justify "> Empower through education.</li> <br /> 
               <li className="text-lg  mr-10 ml-14 text-justify"> First Ladder envisions fostering tax expertise.</li> <br />
               <li className="text-lg   mr-10 ml-14 text-justify">  Our mission is to shape Enrolled Agents, fueling their success in the field of taxation.</li>
              </div>
              </div>
              <div className=" text-blue-900 font-bold text-3xl text-center mt-20 font-serif">
            <h2>Change Your Life Now!</h2>
            <p className="text-black mt-5">Reach out yours</p>
        </div>

        {/* SUBMIT */}
        <div className="  mt-10">
        <div class="w-3/4 mx-auto bg-white rounded-xl shadow-md shadow-sky-500 overflow-hidden">
  <div class="p-6">
    <form action="">
      <div>
        <label htmlFor="name" class="block text-xl font-serif">Name</label>
        <input type="text" name="name" id="name" class="mt-2 border rounded-lg h-10 w-full"/>
      </div>
      <div class="mt-4">
        <label htmlFor="email" class="block text-xl font-serif">Email</label>
        <input type="text" name="email" id="email" class="mt-2  border rounded-lg h-10 w-full"/>
      </div>
      <div class="mt-4">
        <label htmlFor="services" class="block text-xl font-serif">Choose Services</label>
        <select name="services" id="services" class="mt-2 bordder rounded-lg h-12 w-full">
          <option value="" class="border">Select</option>
          <option value="Overseas Education">Overseas Education</option>
          <option value="Engineering jobs">Engineering jobs</option>
          <option value="Training & placement">Training & placement</option>
          <option value="Immigration">Immigration</option>
          <option value="Campus Recruitment">Campus Recruitment</option>
        </select>
      </div>
      <div class="mt-6">
        <button type="submit" class="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700">Submit</button>
      </div>
    </form>
  </div>
</div>

        </div>

=======
            <div className="text-blue-900 font-bold text-2xl text-center mt-20 font-serif">
                <h2>Change Your Life Now!</h2>
                <p className="text-black mt-5">Reach out to us</p>
            </div>


            {/* SUBMIT */}
            <div className="mt-10">
                <div className="w-96 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                        <form action="">
                            <div>
                                <label htmlFor="name" className="block text-xl font-serif">Name</label>
                                <input type="text" name="name" id="name" className="mt-2 border rounded-lg h-10 w-full" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-xl font-serif">Email</label>
                                <input type="text" name="email" id="email" className="mt-2 border rounded-lg h-10 w-full" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="services" className="block text-xl font-serif">Choose Services</label>
                                <select name="services" id="services" className="mt-2 border rounded-lg h-12 w-full">
                                    <option value="">Select</option>
                                    <option value="Overseas Education">Overseas Education</option>
                                    <option value="Engineering jobs">Engineering jobs</option>
                                    <option value="Training & placement">Training & placement</option>
                                    <option value="Immigration">Immigration</option>
                                    <option value="Campus Recruitment">Campus Recruitment</option>
                                </select>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="w-40 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
