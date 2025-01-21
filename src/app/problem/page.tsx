"use client";
import Header from "../../components/header";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header Section */}
      <Header />

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center h-screen px-6">
        <h1 className="text-5xl font-bold text-white mb-6">
          Problem Statements
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          Stay tuned! We are working on curating engaging and challenging problem statements just for you. Check back soon for updates!
        </p>
        <div className="mt-10">
          <button
            className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-500 transition-all duration-300"
          >
            Get Notified
          </button>
        </div>
      </div>
    </div>
  );
}
