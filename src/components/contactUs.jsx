import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-animation bg-center">
      <div className="flex items-center justify-center">
        <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="rounded-lg bg-white text-center mx-auto shadow-lg lg:w-2/3 lg:mr-8 lg:ml-auto lg:p-12">
              <form action="#" className="space-y-4 text-left">
                <div>
                  <p className="text-xl text-sky-800 font-semibold italic">
                    Interested in studying overseas with First Ladder? 
                    Fill in your details and we'll call you back!
                  </p>
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-2 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-2 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone 
                    </label>
                    <input
                      className="w-full rounded-lg border-2 p-3 text-sm "
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only border-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-2 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-sky-400 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/3 lg:ml-8 pt-40">
              <img
                src="https://futureofedu.co/wp-content/uploads/2022/07/FOE-Header.jpg"
                alt="Future of Edu Header"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
