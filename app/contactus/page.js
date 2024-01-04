"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutlineOutlined,
  Twitter,
} from "@mui/icons-material";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactUs = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    // contact us section
    <div className=" flex justify-center items-center">
      <motion.div className="antialiased flex bg-gray-900 w-[1000px] rounded-md p-4 m-5">
        <motion.div className="flex w-fit min-h-fit justify-center items-center ">
          <div className="flex flex-col space-y-6 w—full max—w-[500px] p—8 rounded—xl shadow—lg text-white md:flex-row md:space-x-6 md:space-y">
            <div className="flex flex-col justify-between">
              <div className=" ">
                <h1 className="font-bold tracking-wide text-3xl">
                  Get In Touch With Us
                </h1>
              </div>
              <div className="flex flex-col space-y-6 mt-6 ">
                <div className="inline-flex space-x-4 items-center">
                  <LocalPhoneOutlined />
                  <span>+91 86987 93479</span>
                </div>
                <div className="inline-flex space-x-4 items-center">
                  <MailOutlineOutlined />
                  <span>info.certi-block@gmail.com</span>
                </div>
                <div className="inline-flex space-x-4 items-center">
                  <LocationOnOutlined />
                  <span>Pune</span>
                </div>
              </div>
              <div className="flex space-x-4 text-xl my-6 ">
                <a href="">
                  <LinkedIn />
                </a>
                <a href="">
                  <Instagram />
                </a>
                <a href="">
                  <Facebook />
                </a>
                <a href="">
                  <Twitter />
                </a>
              </div>
            </div>
            <div></div>
            <div className="flex flex-col justify-center items-center w-[35rem] space-y-6 max—w-full p—8 rounded—xl shadow—lg text-white md:space-x-6 md:space-y">
              {/* form */}
              <form className="flex flex-col space-y-6" action="" method="POST">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Company
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Company name"
                    className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@mail.com"
                    className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="+91 01234 5678"
                    className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                    className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreement"
                    id="agreement"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="rounded border-gray-300 focus:ring-blue-500 h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="agreement" className="text-sm">
                    I agree to the{" "}
                    <span className="underline">Privacy Policy</span>
                  </label>
                </div>
                <div className="flex flex-col sm:justify-between text-center items-center">
                  <button
                    type="submit"
                    className="bg-blue-600 w-full py-2 px-6 rounded-lg text-white text-sm tracking-wide hover:bg-slate-300 dark:hover:text-black hover:outline-2 hover:outline-gray-700 transition ease-in-out duration-300"
                  >
                    Submit
                  </button>
                  <p className="text-sm text-center text-gray-400 p-2">
                    We usually respond within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
