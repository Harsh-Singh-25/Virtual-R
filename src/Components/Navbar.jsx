import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../Constants/index.jsx";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const toggleCreateAccountModal = () => {
    setIsCreateAccountModalOpen(!isCreateAccountModalOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              onClick={toggleSignInModal}
              className="py-2 px-3 border rounded-md"
            >
              Sign In
            </button>
            <button
              onClick={toggleCreateAccountModal}
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white"
            >
              Create Account
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-transparent bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg w-[90%] max-w-[600px]">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white w-full"
              >
                Login
              </button>
            </form>
            <button
              onClick={toggleSignInModal}
              className="mt-4 text-sm text-gray-500 hover:underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Create Account Modal */}
      {isCreateAccountModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-transparent bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg w-[90%] max-w-[600px]">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-md"
                  placeholder="Confirm your password"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white w-full"
              >
                Create Account
              </button>
            </form>
            <button
              onClick={toggleCreateAccountModal}
              className="mt-4 text-sm text-gray-500 hover:underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
