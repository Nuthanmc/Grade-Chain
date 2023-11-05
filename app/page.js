"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Footer */}
      {/* <footer className="footer bg-transparent text-center text-neutral-content">
        <div className="text-black dark:text-white flex w-[95vw] items-center flex-col m-5">
          <p className="footer-title">&copy; All rights reserved {new Date().getFullYear()}</p>
          <br />
          <p className="footer-title">
            Made with <span className="text-red-600">❤️</span> by TEAM LEO
          </p>
        </div>
      </footer> */}
      <Footer />
    </>
  );
}
