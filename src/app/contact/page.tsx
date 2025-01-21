"use client";
import Header from "../../components/header";

export default function ContactUs() {
  const organizers = [
    { name: "Disha Agarwal", role: "Mentor" },
    { name: "Swastik", role: "Co-ordinator" },
    { name: "Amrita Kadam", role: "Co-ordinator" },
    { name: "Soham Tanaji Umbare", role: "Deeplabs club Co-ordinator and Core Team Member" },
    { name: "Soham Bit", role: "Deeplabs club Co-ordinator" },
    { name: "Anuja Gupta", role: "Core Team Member" },
    { name: "Dhanush", role: "Core Team Member" },
    { name: "Lalith Karthik", role: "Core Team Member" },
    { name: "Santhosh", role: "Core Team Member" },
    
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header Component */}
      <Header />

      {/* Contact Us Section */}
      <div className="p-6 m-4">
        <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
        <p className="text-lg text-gray-300 mb-8">
          We’d love to hear from you! Feel free to reach out for any queries,
          feedback, or support.
        </p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-300 mb-6">
            Have any questions? You can reach us using the contact details
            below.
          </p>
          <div>
            <p className="text-lg font-medium text-gray-200">Email:</p>
            <p className="text-blue-400 hover:underline">
              <a href="mailto:code_soc@students.iiitr.ac.in">
                code_soc@students.iiitr.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Organizers Section */}
      <div className="p-6">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Meet Our Organizers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((organizer, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105"
            >
             
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {organizer.name}
                </h3>
                <p className="text-gray-300">{organizer.role}</p>
              </div>
              {/* Optional: Adding hover details */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-95 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl hover:cursor-pointer">
                <p className="text-sm text-center">
                  {organizer.name} is a dedicated {organizer.role} and a vital
                  member of the organizing team.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
