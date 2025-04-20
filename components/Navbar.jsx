"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import Image from "next/image";
import { Poppins } from 'next/font/google';

// ✅ Font loader must be outside component
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const [prefersDarkMode, setPrefersDarkMode] = useState();
  const [imageName, setImageName] = useState("/certi-block-black.png");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setPrefersDarkMode(isDark);
      setImageName(isDark ? "/certi-block-white.png" : "/certi-block-black.png");
    }
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#howitworks" }, 
    { label: "About Us", href: "/aboutus" },
    { label: "Contact Us", href: "#contactus" },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="inset-0 absolute blur-[70px] bg-gradient-to-r from-blue-500 via-blue-400 to-pink-500 bg-opacity-50 w-1/4 md:w-1/2 -z-10" />

      <div className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}>
        {/* Logo + Title */}
        <h2
          style={{ color: prefersDarkMode ? "white" : "black" }}
          className={`${poppins.className} font-extrabold text-[18px] lg:text-[24px] flex items-center`}
        >
          <Image
            src={imageName}
            width={100}
            height={98}
            alt="Certi-Block Logo"
            className="w-[48px] h-[48px] object-contain hidden lg:flex"
          />
          &nbsp;GRADE-CHAIN
        </h2>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-bold text-[14px] lg:text-[18px] leading-[25px] transition-all hover:text-purple-400 dark:hover:text-gray-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="flex lg:hidden">
          <details className="dropdown dropdown-end">
            <summary className="btn btn-sm bg-transparent text-white border border-gray-400 hover:bg-gray-800">
              Menu
            </summary>
            <ul className="menu dropdown-content p-2 shadow-md bg-base-100 rounded-box w-52 mt-2 z-50 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
