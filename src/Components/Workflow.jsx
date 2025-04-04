import React, { useState, useEffect } from 'react';
import { CheckCircle2Icon } from 'lucide-react';

import code from '../assets/code.jpg';
import code1 from '../assets/code1.jpg';
import code2 from '../assets/code2.jpg';
import code3 from '../assets/code3.jpg';
import code4 from '../assets/code4.jpg';
import code5 from '../assets/code5.jpg';
import code6 from '../assets/code6.jpg';
import code7 from '../assets/code7.jpg';
import code8 from '../assets/code8.jpg';
import { checklistItems } from '../Constants';

const Workflow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [code, code1, code2, code3, code4, code5, code6, code7, code8];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}coding workflow
        </span>
      </h2>
      <div className="flex p-8 flex-wrap justify-center">
      <div className="relative w-full lg:w-1/2 h-150 overflow-hidden">
  <img
    src={images[currentImage]}
    alt="Code Workflow"
    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
  />
</div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2Icon />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;