"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import React, { useState, useEffect } from "react";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "How It Works", link: "/" },
  { title: "Contact Us", link: "/contactus" },
];

const AboutUs = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const [prefersDarkMode, setPrefersDarkMode] = useState();
  const [imageName, setImageName] = useState("/certi-block-black.png");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersDarkMode(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setImageName("/certi-block-white.png");
      } else {
        setImageName("/certi-block-black.png");
      }
    }
  }, []);

  return (
    <div>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative text-black dark:text-white`}
      >
        <div className="inset-0 absolute blur-[70px] bg-gradient-to-r from-blue-500 via-blue-400 to-pink-500 bg-opacity-50 w-1/4 md:w-1/2 -z-10" />

        <div
          className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
        >
          <h2 className="font-extrabold text-[18px] lg:text-[24px] flex items-center justify-center lg:leading-[30px] dark:text-white">
            <Image
              src={imageName}
              width={48}
              height={48}
              alt="Certi-Block Logo"
              className="w-[48px] h-[48px] object-contain hidden lg:flex"
            />
            &nbsp;CERTI-BLOCK
          </h2>
          <div className="flex gap-3 items-center justify-center">
            <button
              type="button"
              className="font-bold hidden lg:flex text-[14px] lg:text-[18px] leading-[25px] dark:text-white hover:text-gray-600 dark:hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </button>

            <button
              type="button"
              className="font-bold hidden lg:flex text-[14px] lg:text-[18px] leading-[25px] dark:text-white dark:hover:text-gray-500 hover:text-gray-600"
            >
              <Link href="/contactus">Contact Us</Link>
            </button>
            <div className="flex-none lg:hidden">
              <ul className="menu menu-horizontal px-4 min-w-max">
                <li>
                  <details>
                    <summary>Options</summary>
                    <ul className="p-1 z-10 text-sm bg-base-100 rounded-t-none">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/contactus">Contact Us</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>

      <div>
        <motion.div
          className={`container mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 pb-8 text-center text-black dark:text-white relative`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Us
          </motion.h1>

          <motion.div
            className="p-4 md:p-6 lg:p-6 m-8 md:mb-12 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to Certi-Block! We are a team of passionate individuals dedicated to providing innovative solutions in the world of certification and blockchain technology.

          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-bold leading-6 mt-6 md:mt-8 text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our Vision
          </motion.h2>

          <motion.div
            className="p-4 md:p-6 lg:p-6 m-8 md:mb-12 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            At Certi-Block, we envision a future where the certification process is simplified, accessible, and tamper-proof. We believe in the potential of blockchain technology to revolutionize the way certifications are managed and verified.
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-bold leading-6 mt-6 md:mt-8 text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Meet Our Team
          </motion.h2>

          <motion.div
            className="p-4 md:p-6 lg:p-6 m-8 md:mb-12 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <ul className="text-base md:text-lg lg:text-xl font-bold leading-6">
              <li>Mrudul Patel</li>
              <li>Mukund Chamariya</li>
              <li>Mayur Limbhore</li>
              <li>Madhura Patil</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
