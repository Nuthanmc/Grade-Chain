"use client";
import React, { useState } from "react";
// import { MagicTabSelect } from "react-magic-motion";

// const pillTabs = ["How It Works", "About Us", "Contact Us"];
// const Navbar = () => {
//   const [selectedIndex, setSelectedIndex] = useState(1);
//   const tabsComponents = pillTabs.map((text, i) => {
//     return (
//       <button
//         key={text}
//         onClick={() => setSelectedIndex(i)}
//         style={{
//           position: "relative",
//           padding: "0.65rem 0.75rem",
//           width: "100%",
//           color: "white",
//         }}
//       >
//         {selectedIndex === i && (
//           <MagicTabSelect
//             id="pillTabs"
//             transition={{ type: "spring", bounce: 0.35 }}
//           >
//             <span
//               style={{
//                 borderRadius: "999px",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 zIndex: 10,
//                 backgroundColor: "white",
//                 mixBlendMode: "difference",
//               }}
//             />
//           </MagicTabSelect>
//         )}
//         {text}
//       </button>
//     );
//   });
//   return (
//     <>
//       <div className="navbar">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <button>How It Works</button>
//               </li>
//               <li>
//                 <button>About Us</button>
//               </li>
//               <li>
//                 <button>Contact Us</button>
//               </li>
//             </ul>
//           </div>
//           <MagicTabSelect transition={{ type: "spring", bounce: 0.35 }}>
//             <button
//               style={{
//                 borderRadius: "999px",
//                 position: "relative",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 zIndex: 10,
//                 backgroundColor: "white",
//                 mixBlendMode: "difference",
//               }}
//               className="btn text-black  normal-case rounded-full text-xl"
//             >
//               Certi-Block
//             </button>
//           </MagicTabSelect>
//         </div>
//         {/* <div className="navbar-center hidden lg:flex"> */}
//         {/* <ul className="menu menu-horizontal px-1">
//             <li>
//               <button className="font-bold text-md text-gray-900 dark:text-white">
//                 How It Works
//               </button>
//             </li>
//             <li tabIndex={0}>
//               <button className="font-bold text-md text-gray-900 dark:text-white">About Us</button>
//             </li>
//             <li>
//               <button className="font-bold text-md text-gray-900 dark:text-white">
//                 Contact Us
//               </button>
//             </li>
//           </ul> */}
//         <div style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
//           {tabsComponents}
//           {/* </div> */}
//         </div>
//         <div
//           className="navbar-end"
//           onClick={() => (window.location.href = "/login")}
//         >
//           <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary">
//             Login/Register as Issuer
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
import { AnimatePresence, motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { title: "How It Works", link: "/" },
  { title: "About Us", link: "/" },
  { title: "Contact Us", link: "/" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 0, 0.36, 0],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildern: 0.9,
      },
    },
    open: {
      transition: {
        staggerChildern: 0.09,
      },
    },
  };

  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative text-black dark:text-white`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
        >
          <h2 className="font-extrabold text-[18px] lg:text-[24px] flex items-center justify-center lg:leading-[30px] dark:text-white">
            <Image
              src="/favicon.ico"
              width={24}
              height={24}
              alt="Search"
              className="w-[24px] h-[24px] object-contain hidden lg:flex"
            />
            &nbsp;CERTI-BLOCK
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              className="font-bold hidden lg:flex text-[14px] lg:text-[18px] leading-[25px] dark:text-white hover:text-gray-600 dark:hover:text-gray-500"
            >
              How It Works
            </button>
            <button
              type="button"
              className="font-bold hidden lg:flex text-[14px] lg:text-[18px] leading-[25px] dark:text-white dark:hover:text-gray-500 hover:text-gray-600"
            >
              About Us
            </button>
            <button
              type="button"
              className="font-bold hidden lg:flex text-[14px] lg:text-[18px] leading-[25px] dark:text-white dark:hover:text-gray-500 hover:text-gray-600"
            >
              Contact Us
            </button>
          </div>
          <button
            className="cursor-pointer lg:hidden text-md text-black"
            onClick={toggleMenu}
          >
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 13.005C20 13.555 19.554 14 19.005 14H10.995C10.7311 14 10.478 13.8952 10.2914 13.7086C10.1048 13.522 10 13.2689 10 13.005C10 12.7411 10.1048 12.488 10.2914 12.3014C10.478 12.1148 10.7311 12.01 10.995 12.01H19.005C19.555 12.01 20 12.455 20 13.005ZM20 7C20 7.55 19.554 7.995 19.005 7.995H0.995C0.731109 7.995 0.478028 7.89017 0.291429 7.70357C0.10483 7.51697 0 7.26389 0 7C0 6.73611 0.10483 6.48303 0.291429 6.29643C0.478028 6.10983 0.731109 6.005 0.995 6.005H19.005C19.555 6.005 20 6.451 20 7ZM19.005 1.99C19.2689 1.99 19.522 1.88517 19.7086 1.69857C19.8952 1.51197 20 1.25889 20 0.995C20 0.731109 19.8952 0.478027 19.7086 0.291429C19.522 0.10483 19.2689 7.86455e-09 19.005 0H6.995C6.86433 -3.89413e-09 6.73495 0.0257364 6.61423 0.0757399C6.49351 0.125743 6.38382 0.199034 6.29143 0.291429C6.19903 0.383823 6.12574 0.493511 6.07574 0.61423C6.02574 0.734949 6 0.864335 6 0.995C6 1.12567 6.02574 1.25505 6.07574 1.37577C6.12574 1.49649 6.19903 1.60618 6.29143 1.69857C6.38382 1.79097 6.49351 1.86426 6.61423 1.91426C6.73495 1.96426 6.86433 1.99 6.995 1.99H19.005Z"
                fill={prefersDarkMode.matches ? "#fff" : "#000"}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Nav Links */}
      <AnimatePresence>
        {open ? (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-20 left-0 top-0 w-full h-screen origin-top bg-slate-500 text-black p-10"
          >
            <div className="flex justify-between ">
              <h1 className="font-extrabold text-[18px] lg:text-[24px] flex items-center justify-center lg:leading-[30px] dark:text-white">
                Certi-Block
              </h1>
              <p
                className="cursor-pointer text-md text-black"
                onClick={toggleMenu}
              >
                Close
              </p>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit={"exit"}
              className="flex flex-col h-full justify-center font-lora items-center gap-4"
            >
              {navLinks.map((link, index) => (
                <div className="overflow-hidden" key={index}>
                  <MobileNavLink title={link.title} href={link.link} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    y: "30vh",
    transition: {
      duration: 0.5,
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-4xl uppercase text-black"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
