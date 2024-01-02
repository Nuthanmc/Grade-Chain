"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";

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

      <div
        className={`${styles.innerWidth}  ${styles.yPaddings}`}
        style={{
          position: "relative",
          margin: "0 auto",
          padding: "12px",
          paddingTop: "60px",
          textAlign: "center",
          color: "black",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        <h1
          style={{
            fontSize: "44px",
            fontWeight: "bold",
            lineHeight: "64.4px",
            textTransform: "uppercase",
            position: "relative",
            zIndex: 1,
          }}
          className="text-black dark:text-white"
        >
          About Us
        </h1>

        <div
          style={{
            padding: "16px",
            borderRadius: "8px",
            margin: "16px 0",
          }}
          className="bg-[#F3F4F6] dark:bg-[#1F2937]"
        >
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              fontWeight: "bold",
              marginBottom: "0",
            }}
            className="text-black dark:text-white"
          >
            Welcome to Certi-Block! We are a team of passionate individuals
            dedicated to providing innovative solutions in the world of
            certification and blockchain technology.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              fontWeight: "bold",
              marginBottom: "0",
            }}
            className="text-black dark:text-white"
          >
            Our mission is to make certification processes secure, transparent,
            and efficient. Certi-Block strives to empower individuals and
            organizations by leveraging the power of blockchain to verify and
            authenticate certifications.
          </p>
        </div>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            lineHeight: "2.2",
            marginTop: "24px",
            position: "relative",
            zIndex: 1,
          }}
          className="text-black dark:text-white"
        >
          Our Vision
        </h2>
        <div
          style={{
            padding: "16px",
            borderRadius: "8px",
            margin: "16px 0",
          }}
          className="bg-[#F3F4F6] dark:bg-[#1F2937]"
        >
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              fontWeight: "bold",
              marginBottom: "0",
            }}
            className="text-black dark:text-white"
          >
            At Certi-Block, we envision a future where the certification process
            is simplified, accessible, and tamper-proof. We believe in the
            potential of blockchain technology to revolutionize the way
            certifications are managed and verified.
          </p>
        </div>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            lineHeight: "2.2",
            marginTop: "24px",
            position: "relative",
            zIndex: 1,
          }}
          className="text-black dark:text-white"
        >
          Meet Our Team
        </h2>
        <div
          style={{
            padding: "16px",
            borderRadius: "8px",
            margin: "16px 0",
          }}
          className="bg-[#F3F4F6] dark:bg-[#1F2937] text-black dark:text-white"
        >
          <ul
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              fontWeight: "bold",
              marginBottom: "0",
            }}
          >
            <li>Mrudul Patel</li>
            <li>Mukund Chamariya</li>
            <li>Mayur Limbhore</li>
            <li>Madhura Patil</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
