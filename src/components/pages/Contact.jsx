import React from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-start items-center gap-x-2">
          <div className="w-4.5 h-7.5 bg-amber-400 rounded"></div>
          <h3 className="text-3xl font-semibold">Contact</h3>
        </div>
        <div class="container mx-auto mt-5 ">
          <div class="map-container mx-auto max-w-full  h-96 mb-6 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211456.91668941753!2d90.25487531119137!3d23.78106723705999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1760815826584!5m2!1sen!2sbd"
              class="w-full h-full border-0 rounded-xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p class="text-center text-lg">
            Feel free to visit us at our location in Dhaka!
          </p>
        </div>

        <div className="container mx-auto  max-w-full mt-5 mb-15 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3  rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 h-32  rounded-lg border-1 border-neutral-600 focus:ring-0 focus:outline-none resize-none"
              defaultValue={""}
            />
            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="w-[170px] lg:w-[170px] px-2 py-3 border-2 border-neutral-600 shadow-xs shadow-neutral-600 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <IoIosSend />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
