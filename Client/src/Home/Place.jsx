import React from 'react';
import Group1 from "../Assets/Group1.png";
import Group2 from "../Assets/Group2.png";
// import Image1 from "../Assets/Image1.png";
// import Image2 from "../Assets/Image2.png";
// import Image3 from "../Assets/Image3.png";
// import Image4 from "../Assets/Image4.png";
// import Image5 from "../Assets/Image5.png";
// import Image6 from "../Assets/Image6.png";

const Place = () => {
  return (
    <div className="relative bg-white py-16">
      {/* Background elements */}
      <img src={Group1} alt="Background Element 1" className="absolute top-0 left-0 w-1/3 opacity-30" />
      <img src={Group2} alt="Background Element 2" className="absolute bottom-0 right-0 w-1/3 opacity-30" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-5xl -mt-6 font-bold text-center text-gray-800 mb-12">
          Beautiful Places Around The World
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 bg-black md:grid-cols-4 gap-4">
          {/* First Column (One image) */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618012/IMG-20241115-WA0036_mm0vrt.jpg" alt="Place 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
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
              <img src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618018/IMG-20241115-WA0050_eiy1ps.jpg" alt="Place 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div>
                  <h3 className="text-white text-xl font-bold">Rajasthan</h3>
                  <p className="text-gray-300">Starting from $100</p>
                </div>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618037/IMG-20241115-WA0059_xlcabf.jpg" alt="Place 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
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
              <img src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618016/IMG-20241115-WA0037_abcpur.jpg" alt="Place 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div>
                  <h3 className="text-white text-xl font-bold">Rajasthan</h3>
                  <p className="text-gray-300">Starting from $100</p>
                </div>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618019/IMG-20241115-WA0054_te3we1.jpg" alt="Place 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
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
            <img src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618014/IMG-20241115-WA0042_fmebt3.jpg" alt="Place 6" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
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
