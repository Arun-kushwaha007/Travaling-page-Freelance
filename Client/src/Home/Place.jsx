import React from 'react';
import Group1 from "../Assets/Group1.png";
import Group2 from "../Assets/Group2.png";
import Image1 from "../Assets/Image1.png";
import Image2 from "../Assets/Image2.png";
import Image3 from "../Assets/Image3.png";
import Image4 from "../Assets/Image4.png";
import Image5 from "../Assets/Image5.png";
import Image6 from "../Assets/Image6.png";

const Place = () => {
  return (
    <div className="relative bg-white py-16">
      {/* Background elements */}
      <img src={Group1} alt="Background Element 1" className="absolute top-0 left-0 w-1/3 opacity-30" />
      <img src={Group2} alt="Background Element 2" className="absolute bottom-0 right-0 w-1/3 opacity-30" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Beautiful Places Around The World
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* First Column (One image) */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={Image1} alt="Place 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div>
                <h3 className="text-white text-xl font-bold">Rajasthan</h3>
                <p className="text-gray-300">Starting from $100</p>
              </div>
            </div>
          </div>

          {/* Second Column (Two images) */}
          <div className="grid grid-rows-2 gap-4">
            {/* Top Image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={Image2} alt="Place 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div>
                  <h3 className="text-white text-xl font-bold">Rajasthan</h3>
                  <p className="text-gray-300">Starting from $100</p>
                </div>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={Image3} alt="Place 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div>
                  <h3 className="text-white text-xl font-bold">Rajasthan</h3>
                  <p className="text-gray-300">Starting from $100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Column (Two images) */}
          <div className="grid grid-rows-2 gap-4">
            {/* Top Image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={Image4} alt="Place 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div>
                  <h3 className="text-white text-xl font-bold">Rajasthan</h3>
                  <p className="text-gray-300">Starting from $100</p>
                </div>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={Image5} alt="Place 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div>
                  <h3 className="text-white text-xl font-bold">Rajasthan</h3>
                  <p className="text-gray-300">Starting from $100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Column (One image) */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={Image6} alt="Place 6" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div>
                <h3 className="text-white text-xl font-bold">Rajasthan</h3>
                <p className="text-gray-300">Starting from $100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
