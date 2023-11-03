"use client";
import React, { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = ["How It Works", "About Us", "Contact Us"];
const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const tabsComponents = pillTabs.map((text, i) => {
    return (
      <button
        key={text}
        onClick={() => setSelectedIndex(i)}
        style={{
          position: "relative",
          padding: "0.65rem 0.75rem",
          width: "100%",
          color: "white",
        }}
      >
        {selectedIndex === i && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.35 }}
          >
            <span
              style={{
                borderRadius: "999px",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                backgroundColor: "white",
                mixBlendMode: "difference",
              }}
            />
          </MagicTabSelect>
        )}
        {text}
      </button>
    );
  });
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button>How It Works</button>
              </li>
              <li>
                <button>About Us</button>
              </li>
              <li>
                <button>Contact Us</button>
              </li>
            </ul>
          </div>
          <MagicTabSelect transition={{ type: "spring", bounce: 0.35 }}>
            <button
              style={{
                borderRadius: "999px",
                position: "relative",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                backgroundColor: "white",
                mixBlendMode: "difference",
              }}
              className="btn text-black  normal-case rounded-full text-xl"
            >
              Certi-Block
            </button>
          </MagicTabSelect>
        </div>
        {/* <div className="navbar-center hidden lg:flex"> */}
        {/* <ul className="menu menu-horizontal px-1">
            <li>
              <button className="font-bold text-md text-gray-900 dark:text-white">
                How It Works
              </button>
            </li>
            <li tabIndex={0}>
              <button className="font-bold text-md text-gray-900 dark:text-white">About Us</button>
            </li>
            <li>
              <button className="font-bold text-md text-gray-900 dark:text-white">
                Contact Us
              </button>
            </li>
          </ul> */}
        <div style={{ display: "flex", gap: "0.75rem", margin: "0.75rem 0" }}>
          {tabsComponents}
          {/* </div> */}
        </div>
        <div
          className="navbar-end"
          onClick={() => (window.location.href = "/login")}
        >
          <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary">
            Login/Register as Issuer
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
