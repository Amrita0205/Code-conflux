"use client"; // required to use the react things in our next.js
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image"; // Importing Next.js Image component

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="background">
      <header className="custom-bg text-gray-200 w-full p-2">
        <div className="container mx-auto flex justify-between items-center py-5 px-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-5">
            <Image
              className="rounded-full"
              src="/images/logo.jpeg" // Image path for public directory
              alt="Logo"
              width={80}  // Width of the image (set to fit your design)
              height={80} // Height of the image (set to fit your design)
            />
            <Link href="/" className="block">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
                Code Conflux
              </h1>
              <p className="text-sm md:text-base text-gray-400 italic font-medium">
                by IIIT Raichur
              </p>
            </Link>
          </div>

          {/* Hamburger menu on smaller screens */}
          <div className="relative md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              className="text-white text-lg font-medium focus:outline-none"
            >
              <span className="ml-2">&#9776;</span>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-10 ">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/hackathonoverview">Hackathon Overview</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/problem">Problem Statements</Link>
                  </li>
                  {/* <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/registration">Registration</Link>
                  </li> */}
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Navigation menu for larger screens */}
          <nav className="hidden md:flex space-x-6 ">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/hackathonoverview" className="hover:text-gray-300">
              Hackathon Overview
            </Link>
            <Link href="/problem" className="hover:text-gray-300">
              Problem Statements
            </Link>
            {/* <Link href="/registration" className="hover:text-gray-300">
              Registration
            </Link> */}
            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
