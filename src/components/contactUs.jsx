import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      alert(response.data);
      
    } catch (error) {
      console.error("Error:", error.response.data);
      
    }
  };

  return (
    <>
      <div className="relative">
        <h1 className="font-serif text-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl italic z-10">
          CONTACT US
        </h1>
        <img
          src="/src/components/assets/handshakecontact.jpg"
          alt=""
          className="block h-60 w-full opacity-75"
        />
      </div>

      <div className="container bg-gradient-animation grid max-w-screen-xl grid-cols-1 gap-8 px-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800 relative z-20">
        <div className="relative z-20">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold italic font-bold leading-tight mt-4 lg:text-xl text-black-500">
              Interested in studying overseas with First Ladder?
            </h3>
            <h3 className="text-lg font-semibold italic leading-tight mt-4 lg:text-xl text-black-500">
              Fill in your details and we'll call you back!
            </h3>
          </div>
          <img
            src="/src/components/assets/contactform.jpg"
            alt=""
            className="p-1 h-80 mt-8 md:h-84 rounded-xl"
          />
        </div>
        <form
          noValidate=""
          className="space-y-6 relative z-20"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              id="name"
              type="text"
              placeholder="Full name"
              className="mt-7 w-full border-2 p-3 dark:bg-gray-100"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 border-2 rounded dark:bg-gray-100"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border-2 rounded dark:bg-gray-100"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
          <div>
            <textarea
              id="message"
              rows="3"
              placeholder="Message"
              className="w-full p-3 border-2 rounded dark:bg-gray-100"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold bg-sky-400 tracking-wide uppercase rounded dark:bg--600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
