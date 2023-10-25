"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import backgroundImage from "@/public/background.png";

export default function Home() {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-between">
        <div className="relative w-full">
          <div className="absolute -z-10 w-full">
            <Image
              src={backgroundImage}
              alt="bg"
              className="logoContainer"
            />
          </div>
        </div>
      </div> */}
      <Navbar />
      <div className="hero min-h-[92vh]">
        <Image src={backgroundImage} alt="bg" className="logoContainer" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-5xl text-white font-bold">CERTI-BLOCK</h1>
            <p className="mb-5 text-lg text-gray-900">
              Certi-Block is a blockchain-based certificate validation system
              that provides a secure and reliable way to verify the authenticity
              of certificates.
            </p>
            {/* Features of Certi-Block */}
            <div className="flex flex-col lg:flex-row items-center justify-center mt-5">
              <button className="btn btn-outline btn-primary glass">
                Validate Certificates
              </button>
              <br />
              <p className="text-white">&nbsp;&nbsp;OR&nbsp;&nbsp;</p>
              <br />
              <button className="btn btn-outline btn-secondary glass">
                Issue Certificates
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer bg-transparent text-center text-neutral-content">
        <div className="text-center text-gray-900 dark:text-white flex items-center flex-col w-full m-5">
          <p>&copy; All rights reserved {new Date().getFullYear()}</p>
          <br />
          <p>
            Made with <span className="text-red-600">❤️</span> by TEAM LEO
          </p>
        </div>
      </footer>
    </>
  );
}
