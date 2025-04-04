import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../Constants/index.jsx"; // Import pricingOptions only, don't pass it as prop

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Choose Your Plan
      </h2>

      <div className="flex flex-col p-20 lg:flex-row justify-center gap-4 items-stretch">
  {pricingOptions.map((option, index) => (
    <div
      key={index}
      className="flex-1 p-9 border rounded-lg shadow-lg max-w-sm"
    >
      <h3 className="text-2xl font-semibold mb-4">{option.title}</h3>
      <p className="mb-8">
        <span className="text-5xl mt-6 mr-2">{option.price}</span>
        <span className="text-neutral-400 tracking-tight">/month</span>
      </p>
      <ul>
        {option.features.map((feature, i) => (
          <li key={i} className="flex items-center mt-4">
            <CheckCircle2 />
            <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => toggleModal(option.title)}
        className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-900 border-orange-900 border rounded-lg transition duration-200"
      >
        Subscribe
      </button>
    </div>
  ))}
</div>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-transparent bg-opacity-90 backdrop-blur-lg p-8 rounded-lg shadow-lg w-[90%] max-w-[600px]">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {selectedPlan === "Free"
                ? "Login Information"
                : `Subscribe to ${selectedPlan}`}
            </h2>

            {selectedPlan === "Free" ? (
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
            ) : (
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-md"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="mb-4 flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-md"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-md"
                      placeholder="123"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white w-full"
                >
                  Confirm Subscription
                </button>
              </form>
            )}
            <button
              onClick={closeModal}
              className="mt-4 text-sm text-gray-500 hover:underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
