"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowitWorks from "@/components/HowitWorks";
import CertificatesCounter from "@/components/CertificatesCounter";
import InstitutesCounter from "@/components/InstitutesCounter";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { Suspense } from 'react';



export default function Home() {
  return (
    <>
    <Suspense>
      <Navbar />
      <Hero />
      <Features />
      <HowitWorks />
      <ContactUs />
      <Footer />
      </Suspense>
    </>
  );
}
