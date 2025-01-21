"use client";
import Header from "../../components/header";
import { useState } from "react";
import Link from "next/link"; // Import Link component


export default function RegistrationForm() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <Header />
      <div className="p-6 m-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          Registration Form
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Please fill out the form below to register for the event.
        </p>
        <p className="text-red-500 font-semibold mb-4">
          Please ensure you are logged into your school/organization account
          before accessing the form else click on the plus button.
        </p>
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScK_uojgpOBnSTRXDdm7jZH5NCaxLBX1nGIaraeJNdiAqZpcg/viewform?embedded=true"
            width="100%"
            height="1958"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Registration Form"
            className="w-full h-[1958px]"
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* Fixed Icon for Opening the Form */}
      <div
  className={`fixed bottom-4 left-4 bg-purple-500 text-white rounded-full shadow-lg cursor-pointer flex items-center transition-all duration-300 ease-in-out ${
    hover ? "w-72 pl-4" : "w-14"
  }`}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  {/* Icon */}
  <div className="bg-white text-purple-500 rounded-full w-10 h-10 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  </div>

  {/* Text when hovered */}
  {hover && (
    <div className="ml-4">
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLScK_uojgpOBnSTRXDdm7jZH5NCaxLBX1nGIaraeJNdiAqZpcg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline text-sm font-medium  hover:underline transition-opacity duration-300 ease-in-out"
      >
       <span className="text-gray-200">Open the Registration Form in a New Tab</span> 
      </Link>
    </div>
  )}
</div>
    </div>
  );
}
