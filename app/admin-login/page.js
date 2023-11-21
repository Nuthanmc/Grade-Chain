"use client";
import { motion } from "framer-motion";
import React from "react";
import toast from "react-hot-toast";

const variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};


const AdminLogin = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email === "info.certi-block@gmail.com" && password === "admin") {
        window.location.href = "/admin";
        sessionStorage.setItem("address", email);
      } else {
        toast.error("Invalid Credentials");
      }
    };

  return (
    <div className="flex h-full flex-col">
      <div className="flex min-h-full flex-col">
        <main className="flex min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden pt-16 sm:py-28">
          <div class="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
            <div class="relative">
              <svg
                viewBox="0 0 1090 1090"
                aria-hidden="true"
                fill="none"
                preserveAspectRatio="none"
                width="1090"
                height="1090"
                className="absolute z-10 -top-7 hidden lg:flex left-1/2 h-[500px] -translate-x-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
              >
                <circle cx="545" cy="545" r="544.5"></circle>
                <circle cx="545" cy="545" r="480.5"></circle>
                <circle cx="545" cy="545" r="416.5"></circle>
                <circle cx="545" cy="545" r="352.5"></circle>
              </svg>
              <h1 class="text-center text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
                Login as Admin
              </h1>
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              class="w-full mx-auto z-20 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-auto sm:flex-none rounded-3xl sm:p-24"
            >
              <form onSubmit={handleSubmit}>
                <div class="space-y-6">
                  <div>
                    <label
                      for="email"
                      class="mb-2 block text-sm text-center font-semibold text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      required
                      class="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="mb-2 block text-sm text-center font-semibold text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      autocomplete="current-password"
                      required
                      class="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors mt-8 w-full"
                  type="submit"
                >
                  Login
                </button>
                <hr />
              </form>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLogin;
