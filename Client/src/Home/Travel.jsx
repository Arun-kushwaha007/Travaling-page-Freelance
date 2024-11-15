import React from 'react';
import Vector from "../Assets/Vector.png";
import Frame1 from "../Assets/Frame1.png";
import Frame2 from "../Assets/Frame2.png";
import Frame3 from "../Assets/Frame3.png";
import Frame4 from "../Assets/Frame4.png";

const Travel = ({ tripExtras }) => {
  return (
    <div className="relative bg-white py-12 h-[800px] px-6">
      {/* Background Vector */}
      <img src={Vector} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-50" />

      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto z-10">
        {/* Flex container for images and text */}
        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto z-10">
          {/* Left side images */}
          <div className="flex md:w-1/2 relative space-x-4">
            {/* Square overlapping images */}
            <div className="relative">
              <img
                src={Frame2}
                alt="Frame 2"
                className="w-48 h-48 rounded-lg"
              />
              <img
                src={Frame3}
                alt="Frame 3"
                className="absolute -bottom-6 -left-6 w-48 h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text in the center */}
          <div className="mx-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">The Perfect Travel Place for You</h2>
            <p className="text-gray-600 mt-4">
              Discover the untouched beauty of rural destinations, where authentic traditions, culture, and nature blend seamlessly. Immerse yourself in local experiences, far from the rush of city life, and embrace the simplicity and charm of countryside living.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">
              Explore Now
            </button>
          </div>

          {/* Right side images */}
          <div className="relative">
            <img
              src={Frame1}
              alt="Frame 1"
              className="w-full object-cover rounded-lg"
            />
            <img
              src={Frame4}
              alt="Frame 4"
              className="absolute -bottom-6 -right-4 w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Trip Extras Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Trip Extras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {tripExtras.length > 0 ? (
            tripExtras.map((extra, index) => (
              <div key={index} className="relative bg-white border rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800">{extra.name}</h3>
                <p className="text-gray-600 mt-2">{extra.description}</p>
                <p className="text-gray-800 font-bold mt-4">Price: ${extra.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading trip extras...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Travel;
