"use client";
import Header from "../../components/header";
import Image from "next/image";

export default function HackathonOverview() {
  return (
    <div>
      <Header />
      {/* Topics Card */}
      <div className="p-6 m-3 rounded-xl overflow-hidden shadow-lg ease-out">
        <h2 className="text-3xl font-bold text-white mb-4">Topics</h2>
        <p className="text-lg leading-relaxed">
          Contestants must choose a problem statement from the given list,
          covering domains such as:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* Card: Web Development */}
          <div className="p-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 transform transition-transform duration-300 ease-out hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              Web Development
            </h3>
            <Image
              src="/images/Web.png"
              alt="Web Development Illustration"
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-white">
              Design and develop stunning websites and web applications that
              solve real-world problems.
            </p>
          </div>

          {/* Card: App Development */}
          <div className="p-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-purple-500 to-pink-600 transform transition-transform duration-300 ease-out hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              App Development
            </h3>
            <Image
              src="/images/App.png"
              alt="App Development Illustration"
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-white">
              Create innovative mobile applications to enhance user experiences
              and productivity.
            </p>
          </div>

          {/* Card: AI/ML */}
          <div className="p-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 transform transition-transform duration-300 ease-out hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              Artificial Intelligence (AI) / Machine Learning (ML)
            </h3>
            <Image
              src="/images/AI.png"
              alt="AI/ML Illustration"
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-white">
              Explore the cutting edge of technology by building intelligent
              systems capable of learning and making decisions.
            </p>
          </div>
          
          {/* Card: Blockchain Technology */}
          <div className="p-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 transform transition-transform duration-300 ease-out hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              Blockchain Technology
            </h3>
            <Image
              src="/images/blockk.png"
              alt="Blockchain Technology Illustration"
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-white">
              Leverage decentralized technologies to build secure and
              transparent solutions.
            </p>
          </div>

          {/* Card: Other Fields */}
          <div className="p-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-purple-500 to-pink-600 transform transition-transform duration-300 ease-out hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-4">
              And Many More Exciting Fields!
            </h3>
            <Image
              src="/images/exciting.png"
              alt="Exciting Fields Illustration"
              width={400}
              height={160}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-white">
              Dive into a variety of domains to showcase your creativity and
              technical skills.
            </p>
          </div>
        </div>
      </div>

      {/* Evaluation Criteria Card */}
      <div className="p-6 m-3 rounded-xl overflow-hidden shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          <span className="text-purple-500">Evaluation</span> Criteria
        </h2>
        <p className="text-lg leading-relaxed">
          Projects will be evaluated based on the following parameters:
        </p>
        <ul className="mt-4 list-disc list-inside space-y-2">
          <li>
            <strong>Innovation and Novelty:</strong> Originality of the idea and
            its execution.
          </li>
          <li>
            <strong>Feasibility:</strong> Practical implementation and
            functionality of the solution.
          </li>
          <li>
            <strong>Technical Complexity:</strong> Use of advanced tools and
            techniques.
          </li>
          <li>
            <strong>Presentation and Communication:</strong> Clarity,
            creativity, and confidence in presenting the project.
          </li>
        </ul>
        <p className="mt-4">
          Extra points will be awarded for exceptional innovation and novelty.
        </p>
      </div>

      {/* Guidelines Section */}
      <div className="p-6 m-3 rounded-xl overflow-hidden shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Guidelines</h2>
        <ul className="mt-4 list-disc list-inside space-y-4 text-lg">
          <li>
            Each team can have either <strong>2 or 3 members</strong>.
          </li>
          <li>
            The team leader must be decided in advance and will act as the
            representative for the team throughout the duration of the
            hackathon.
          </li>
          <li>
            Teams will not be allowed to change once the hackathon begins.
          </li>
          <li>
            The hackathon will take place <strong>offline</strong>, and all
            members are required to be present.
          </li>
          <li>
            Existing projects (e.g., from GitHub) cannot be directly used, but
            inspiration can be taken. Yes,
            <strong>AI tools like ChatGPT</strong> are allowed.
          </li>
          <li>
            Use of unfair means, cheating, or plagiarism during the event will
            result in the <strong>disqualification</strong> of the team.
          </li>
          <li>
            A GitHub repository of the project must be maintained and shared via
            the circulated submission form within the provided time frame.
          </li>
          <li>
            Late submissions or commits beyond the deadline will face penalties,
            which may include the <strong>disqualification</strong> of the team.
          </li>
        </ul>
      </div>

      {/* Prize Pool */}
      <div className="p-6 m-3 rounded-xl overflow-hidden shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">
          PRIZE <span className="text-purple-500">POOL</span>
        </h2>
        <p className="mt-4 text-lg font-semibold">
          All participating candidates will receive a participation certificate
          and prizes.
        </p>
      </div>
    </div>
  );
}
