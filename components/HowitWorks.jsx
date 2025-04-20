"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Institute Registration",
    description:
      "Authorized institutions register on Grade-Chain with verified credentials to begin issuing certificates.",
  },
  {
    title: "Issue Digital Certificates",
    description:
      "Institutes upload student details, and Grade-Chain generates secure blockchain-backed certificates.",
  },
  {
    title: "Store on Blockchain",
    description:
      "Each certificate is encrypted and stored immutably on the blockchain, ensuring tamper-proof records.",
  },
  {
    title: "Verify Certificates",
    description:
      "Anyone can validate certificates using the provided hash or QR code, ensuring real-time authenticity.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-[#0b0e1a] text-white px-6 py-20 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 text-transparent bg-clip-text">
          How It Works
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Grade-Chain ensures secure, blockchain-based certificate validation in four simple steps.
        </p>
      </div>

      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-[#1e1f2f] to-[#181a25] p-8 rounded-2xl border border-[#2d2f3a] shadow-xl hover:shadow-cyan-500/30 transition-transform hover:scale-[1.04] transform-gpu"
            variants={itemVariants}
            whileHover={{ rotateX: 4, rotateY: -4 }}
          >
            {/* Glowing circle badge */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center shadow-lg border-2 border-[#0b0e1a]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.2, type: "spring", stiffness: 300 }}
            >
              {index + 1}
            </motion.div>

            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="text-cyan-400"
              >
                <CheckCircle className="w-7 h-7 drop-shadow" />
              </motion.div>
              <h2 className="text-2xl font-semibold text-cyan-400">{step.title}</h2>
            </div>
            <p className="text-gray-300 text-md leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HowItWorks;
