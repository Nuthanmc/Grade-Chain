"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThemeToggle />
      <ContactUs />
      <Footer />
    </>
  );
}
