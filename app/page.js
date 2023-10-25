"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import backgroundImage from "@/public/background.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-full">
          <div className="absolute -z-10 w-full">
            <Image src={backgroundImage} alt="bg" width={"100%"} height={"100%"} />
          </div>
        </div>
            <Navbar />
      </div>
    </>
  );
}
