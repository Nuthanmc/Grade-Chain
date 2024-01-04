"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactUs from "@/app/contactus/page";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactUs />
      <Footer />
    </>
  );
}

