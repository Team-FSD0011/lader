import React, { useState } from "react";

const ContactUs = () => {
  

  return (
    <>
    <div className=" bg-gradient-animation grid max-w-screen-xl grid-cols-1 gap-8 px-8  mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="">
		<div className="space-y-2">
			<h3 className="text-s  font-semibold italic font-bold leading-tight mt-4 lg:text-xl text-black-500">Interested in studying overseas with First Ladder? </h3>
      <h3 className="text-s  font-semibold italic  leading-tight mt-4 lg:text-xl text-black-500">Fill in your details and we'll call you back!</h3>
		</div>
		<img src="src/components/assets/contactform.jpg" alt="" className="p-1 h-80 mt-8 md:h-84 rounded-xl" />
	</div>
	<form noValidate="" className="space-y-6">
		
		<div>
			
			<input id="name" type="text" placeholder="Full name" className="mt-7 w-full border-2 p-3 dark:bg-gray-100" />
		</div>
		<div>
			
			<input id="email" type="email" placeholder="Email" className="w-full p-3 border-2 rounded dark:bg-gray-100" />
		</div>
    <div>
			
			<input id="contact" type="contact" placeholder="Phone Number" className="w-full p-3 border-2 rounded dark:bg-gray-100" />
		</div>
		<div>
			
			<textarea id="message" rows="3" placeholder="Message" className="w-full p-3 border-2 rounded dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold bg-sky-400 tracking-wide uppercase rounded dark:bg--600 dark:text-gray-50">Send Message</button>
	</form>
</div>
    </>
  );
};

export default ContactUs;
