"use client";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero.jsx";
import React from "react";

describe("Hero component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    render(<Hero />);
  });

  test("renders without crashing", () => {
    const heroElement = screen.getByTestId("hero");
    expect(heroElement).toBeInTheDocument();
  });

  test("renders title", () => {
    const titleElement = screen.getByRole("heading", {name: "CERTI-BLOCK"});
    expect(titleElement).toBeInTheDocument();
  });

  test("renders buttons", () => {
    const validateButton = screen.getByText(/Validate Certificates/i);
    const issueButton = screen.getByText(/Issue Certificates/i);
    expect(validateButton).toBeInTheDocument();
    expect(issueButton).toBeInTheDocument();
  });

  test("renders login modal", () => {
    const loginModal = screen.getByTestId("login_modal");
    expect(loginModal).toBeInTheDocument();
  });

  test("renders otp modal", () => {
    const otpModal = screen.getByTestId("otp_modal");
    expect(otpModal).toBeInTheDocument();
  });
});
