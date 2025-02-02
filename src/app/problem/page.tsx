"use client";
import Link from "next/link";
import Header from "../../components/header";
import { FaDownload } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-100">
      {/* Header Section */}
      <Header />

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Problem Statements
        </h1>

        {/* Instruction Paragraph */}
        <p className="text-lg text-gray-300 max-w-2xl mb-4">
          Click the download link below to access the problem statement. Ensure you go through the details carefully and start solving the challenges!
        </p>

        {/* Download Button */}
        <Link href="/images/PROBLEM STATEMENTS.pdf" download>
          <button className="mt-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <FaDownload />
            Download Problem Statement
          </button>
        </Link>
      </div>
    </div>
  );
}
