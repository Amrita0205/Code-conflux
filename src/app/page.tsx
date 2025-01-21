"use client";
import { useState } from "react";
import Header from "../components/header";
import Image from "next/image";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
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
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* CodeSoc Card */}
        <div
          className="relative group p-8 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 transition-transform duration-300 ease-out hover:scale-105"
          style={{
            transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            boxShadow: `0 15px 30px rgba(0, 0, 0, 0.3)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMousePosition}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-lg shadow-lg object-cover transform transition duration-300 group-hover:scale-110"
                src="/images/codesoc.jpg"
                alt="CodeSoc Logo"
                width={160}
                height={160}
              />
            </div>

            {/* Content */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">CodeSoc</h1>
              <p className="text-lg leading-relaxed text-gray-300">
                At <strong className="text-purple-400">CodeSoc</strong>, we are
                dedicated to fostering a thriving coding culture within our
                college. Our diverse community brings together students with a
                shared passion for technology, spanning fields such as
                Competitive Programming, Artificial Intelligence, Machine
                Learning, Web Development, and more.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                We aim to empower students by offering a platform to explore,
                learn, and innovate, unlocking their full potential in the tech
                landscape. Join us in our journey of growth, collaboration, and
                technological advancement.
              </p>
            </div>
          </div>
        </div>

        {/* Code Conflux Section */}
        <div className="mt-12 p-8 bg-gray-800 rounded-xl shadow-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
            <span className="text-purple-400">Code Conflux</span> - What and Why
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              This year, we are proud to introduce{" "}
              <strong className="text-purple-400">Code Conflux</strong>,
              IIITR&apos;s very own hackathon. What began as a vision has now
              transformed into an inspiring reality. This initiative is designed
              to unite the entire college community for a day of programming,
              offering participants an unparalleled opportunity to explore their
              interests in technology and innovation.
            </p>
            <p>
              The success of this event will not only pave the way for similar
              impactful initiatives but also strengthen the coding culture
              within our institution. Furthermore, it will facilitate
              connections with other Institutes of National Importance (INIs)
              through inter- and intra-institutional competitions, fostering
              collaboration and shared growth.
            </p>
            <p className="font-semibold italic text-gray-100 text-center lg:text-left">
              &quot;Code Conflux is more than a hackathon—it&apos;s a platform
              for innovation, collaboration, and creating a vibrant community of
              tech enthusiasts driving meaningful change.&quot;
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
