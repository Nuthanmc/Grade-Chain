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
              <Link href="/#contactus">Contact Us</Link>
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
                        <Link href="/#contactus">Contact Us</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* <div
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
      </div> */}

      <section class="flex items-center xl:h-screen font-poppins">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="px-4 mb-10 md:text-center md:mb-20">
            <h2 class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
              About Us
            </h2>
            <div class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
              <div class="flex-1 h-2 bg-blue-200"></div>
              <div class="flex-1 h-2 bg-blue-400"></div>
              <div class="flex-1 h-2 bg-blue-300"></div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full flex items-center px-4 mb-10 lg:w-1/2 lg:mb-0">
              <Image
                // src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg"
                src="/certi-block-hi-res.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="Certi-Block Logo"
                style={{ width: "100%", height: "auto" }} // optional
                class="relative z-40 object-cover w-full h-96"
              />
            </div>
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <h2 class="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300">
                Welcome to Certi-Block!
              </h2>
              <p class="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                At Certi-Block, we envision a future where the certification
                process is simplified, accessible, and tamper-proof. We believe
                in the potential of blockchain technology to revolutionize the
                way certifications are managed and verified.
              </p>

              <h2 class="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300">
                Our Mission
              </h2>
              <p class="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                Our mission is to make certification processes secure,
                transparent, and efficient. Certi-Block strives to empower
                individuals and organizations by leveraging the power of
                blockchain to verify and authenticate certifications.
              </p>

              <h2 class="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300">
                Meet Our Team
              </h2>
              <ul class="mb-10">
                <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  <Link className="dark:hover:text-white hover:text-black" href={"https://www.linkedin.com/in/mukundpatel753/"}>Mukund Chamriya</Link>
                </li>
                <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span class="mr-3 text-blue-500 dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  <Link className="dark:hover:text-white hover:text-black" href={"https://www.linkedin.com/in/mayur-limbhore-9448b121a/"}>Mayur Limbhore</Link>
                </li>
                <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  <Link className="dark:hover:text-white hover:text-black" href={"https://www.linkedin.com/in/mrudul-patel-57039b21a/"}>Mrudul Patel</Link>
                </li>
                <li class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                  <span class="mr-3 text-blue-500 dark:text-blue-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-5 h-5 bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                  <Link className="dark:hover:text-white hover:text-black"  href={"https://www.linkedin.com/in/madhura-patil-7a903a1a5/"}>Madhura Patil</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
