 "use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🔐",
    title: "Tamper-Proof Security",
    description: "Certificates are immutably recorded on the blockchain, preventing forgery or alteration.",
  },
  {
    icon: "⚡",
    title: "Instant Verification",
    description: "Validate certificates in seconds using unique hash IDs—quick and seamless.",
  },
  {
    icon: "🌐",
    title: "Global Accessibility",
    description: "Verify documents from anywhere in the world, 24/7, without third-party interference.",
  },
  {
    icon: "📄",
    title: "Document Transparency",
    description: "Certificate data is publicly viewable, ensuring trust and accountability.",
  },
  {
    icon: "🔗",
    title: "Blockchain Integration",
    description: "Built on secure blockchain networks (e.g., Ethereum/Polygon) for high reliability.",
  },
  {
    icon: "🏛️",
    title: "Institute Dashboard",
    description: "Admin panel for institutes to issue, manage, and verify certificates with ease.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Why Choose Grade-Chain?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-14"
        >
          Power your credentials with blockchain. Secure, transparent, and globally verifiable certificates.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-purple-500/50 transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
