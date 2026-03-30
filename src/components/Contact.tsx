import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#050505] text-white ">
      <div id="contact" className="section-container py-16">
        <h1 className=" flex flex-col items-center font-bold text-6xl">
          {" "}
          Contact
        </h1>

        <div className="flex flex-col md:flex-row gap-16 mt-10">
          <div>
            <h3 className="text-2xl font-bold mb-4"> Get In Touch </h3>
            <p className="mb-8 text-gray-400">
              {" "}
              Feel free to reach out to discuss your projects or explore
              collaboration opportunities.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-pink-500/30 p-2">
                <Mail color="#FB64B6" />
              </div>
              <div>
                <p>Email</p>
                <p>ceyda.ulubas@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-pink-500/30 p-2">
                <Phone color="#FB64B6" />
              </div>
              <div>
                <p>Phone</p>
                <p>+46 76 972 10 30</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-pink-500/30 p-2">
                <MapPin color="#FB64B6" />
              </div>
              <div>
                <p>Location</p>
                <p>Stockholm, Sweden</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-white"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3  dark:bg-black/50 border-2 border-gray-400 dark:border-pink-500/30 rounded-lg text-gray-200 dark:text-white focus:outline-none focus:border-pink-500 transition-colors"
              />

              <label
                htmlFor="email"
                className="block text-white dark:text-gray-300 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3  dark:bg-black/50 border-2 border-gray-400 dark:border-pink-500/30 rounded-lg text-gray-200 dark:text-white focus:outline-none focus:border-pink-500 transition-colors"
              />
              <label
                htmlFor="message"
                className="block text-sm/6 font-medium text-white"
              >
                Message
              </label>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3  dark:bg-black/50 border-2 border-gray-400 dark:border-pink-500/30 rounded-lg text-gray-200 dark:text-white focus:outline-none focus:border-pink-500 transition-colors"
              ></textarea>
              <button
                type="submit"
                className="flex justify-center items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                Send Message <Send />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
