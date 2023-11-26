"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} md:py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="my-14 h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <h4 className="font-extrabold text-[24px] text-gray-900 dark:text-white">CERTI-BLOCK</h4>
          <Link href={"/admin-login"}>Admin Login</Link>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © {new Date().getFullYear() - 1} -{" "}
            {new Date().getFullYear()} Certi-Block. All rights reserved.
          </p>

          <div className="flex gap-1">
            Made with <span className="text-[#FF0000]">&nbsp;❤&nbsp;</span>by TEAM LEO
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
