"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

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
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import Image from "next/image";
//import Link from "next/link";

const navLinks = [
  { title: "How It Works", link: "/" },
  { title: "About Us", link: "/AboutUs" },
  { title: "Contact Us", link: "/ContactUs" },
];
const Navbar = () => {
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
    <>
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
              How It Works
            </button>
            <button
              type="button"
              className="font-bold hidden lg:flex text-[14px] lg:text-[18px] leading-[25px] dark:text-white dark:hover:text-gray-500 hover:text-gray-600"
            >
              <Link href="/aboutus">About Us</Link>
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
                        <Link href="#howitworks">How It Works</Link>
                      </li>
                      <li>
                        <Link href="#AboutUs">About Us</Link>
                      </li>
                      <li>
                        <Link href="#contactus">Contact Us</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
export default Navbar;
