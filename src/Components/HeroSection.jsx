import React, { useState } from "react";
import video2 from "../assets/Profile Pictures/video2.mp4";
import video1 from "../assets/Profile Pictures/video1.mp4";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDocOpen, setIsDocOpen] = useState(false); // <-- NEW

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  


  return (
    <div className="relative flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual R build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <button
          onClick={toggleModal}
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md"
        >
          Start for free
        </button>
        <button
    onClick={() => setIsDocOpen(true)}
    className="py-3 px-4 mx-3 rounded-md border"
  >
    Documentation
  </button>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2"
        >
          <source src={video1} type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2"
        >
          <source src={video2} type="video/mp4" />
          Your browser doesn't support the video tag.
        </video>
      </div>

      {/* Transparent Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-transparent bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white w-full"
              >
                Login
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="mt-4 text-sm text-gray-500 hover:underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isDocOpen && (
  <div className="fixed inset-0 bg-transparent bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-y-auto">
    <div className="bg-black bg-opacity-90 p-6 rounded-lg shadow-xl w-full max-w-3xl max-h-screen overflow-y-auto text-sm">
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-800">📘 VirtualR Documentation</h2>
      <div className="space-y-4 text-white">
        <p><strong>Overview:</strong> VirtualR is a modern, responsive website for showcasing virtual reality solutions, tools, and applications designed to empower developers and creators.</p>

        <p><strong>Features:</strong></p>
        <ul className="list-disc list-inside pl-4">
          <li>Login modal with blur background</li>
          <li>Interactive video section</li>
          <li>Hero section with dynamic buttons</li>
          <li>Responsive UI</li>
        </ul>

        <p><strong>Technologies Used:</strong> React, Tailwind CSS, Vite, Lucide Icons</p>

        <p><strong>How to Use:</strong></p>
        <ol className="list-decimal list-inside pl-4">
          <li>Click "Start for free" to open the login modal</li>
          <li>Click "Documentation" to learn more about the product</li>
        </ol>

        <p><strong>Future Plans:</strong> Add user authentication, backend integration, and user dashboards.</p>

        <p className="text-center mt-6 text-gray-600">Created with 💻 by <strong>Harsh Singh</strong></p>

        <button
          onClick={() => setIsDocOpen(false)}
          className="mt-4 block w-full text-center text-sm text-gray-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default HeroSection;