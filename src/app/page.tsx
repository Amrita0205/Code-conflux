"use client";
import { useState } from "react";
import Header from "../components/header";
import Image from "next/image";
export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    const card = event.currentTarget.getBoundingClientRect();
    const x = (clientX - card.left - card.width / 2) / 40;
    const y = (clientY - card.top - card.height / 2) / 40;
    setMousePosition({ x, y });
  };

  const resetMousePosition = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div>
      <Header />
      <div
        className="p-6 m-3 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 transition-transform duration-300 ease-out"
        // This is how the gradient color comes
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          boxShadow: `0 15px 30px rgba(0, 0, 0, 0.3)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMousePosition}
      >
        {/* About CodeSoc Section */}
        <h1 className="text-4xl font-extrabold text-white mb-6">CodeSoc</h1>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex-1 text-lg text-gray-300 leading-relaxed">
            <p>
              At <strong className="text-purple-400">CodeSoc</strong>, we are
              dedicated to fostering a thriving coding culture within our
              college. Our diverse community brings together students with a
              shared passion for technology, spanning fields such as Competitive
              Programming, Artificial Intelligence, Machine Learning, Web
              Development, and more.
            </p>
            <p className="mt-4">
              We aim to empower students by offering a platform to explore,
              learn, and innovate, unlocking their full potential in the tech
              landscape. Join us in our journey of growth, collaboration, and
              technological advancement.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              className="w-32 h-32 rounded-lg shadow-lg object-cover "
              src="/images/codesoc.jpg"
              alt="CodeSoc Logo"
            />
          </div>
        </div>
      </div>

      {/* Code Conflux Section */}
      <div className="p-6">
        <h1 className="text-4xl font-extrabold text-gray-200 mb-4">
          <span className="text-purple-400">Code Conflux</span> - What and Why
        </h1>
        <div className="flex flex-wrap items-center gap-8">
          <div className="mt-4 text-lg text-gray-300 leading-relaxed">
            <p>
              This year, we are proud to introduce{" "}
              <strong className="text-purple-400">Code Conflux</strong>, IIITR’s
              very own hackathon. What began as a vision has now transformed
              into an inspiring reality. This initiative is designed to unite
              the entire college community for a day of programming, offering
              participants an unparalleled opportunity to explore their
              interests in technology and innovation.
            </p>
            <p className="mt-4">
              The success of this event will not only pave the way for similar
              impactful initiatives but also strengthen the coding culture
              within our institution. Furthermore, it will facilitate
              connections with other Institutes of National Importance (INIs)
              through inter- and intra-institutional competitions, fostering
              collaboration and shared growth.
            </p>
            <p className="mt-4 font-semibold italic text-gray-100">
              "Code Conflux is more than a hackathon—it’s a platform for
              innovation, collaboration, and creating a vibrant community of
              tech enthusiasts driving meaningful change."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
