import React from "react";
import Vector from "../Assets/Vector.png";

const Travel = () => {
  return (
    <div className="relative bg-white py-12 h-auto px-6">
      {/* Background Vector */}
      <img
        src={Vector}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[730px] p-2 mx-auto z-10">
        {/* Left side images */}
        <div className="flex relative space-x-4 mb-8 lg:mb-0">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731617324/de07periscopevilla_1228938g_nqhbjr.jpg"
              alt="Frame 2"
              className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] mx-5 border border-solid border-4 border-gray-500 rounded-lg -rotate-12"
            />
            <img
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618007/IMG-20241115-WA0026_mlqax8.jpg"
              alt="Frame 3"
              className="absolute bottom-1 right-4 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] border border-solid border-4 rotate-3 border-gray-500 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Text in the center */}
        <div className="text-center lg:text-left w-full lg:w-[750px] px-4 lg:px-7 mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
            The Perfect Travel <br /> Place for You
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-lg md:text-xl lg:text-3xl">
            Discover the untouched beauty of rural destinations, where authentic
            traditions, culture, and nature blend seamlessly. Immerse yourself
            in local experiences, far from the rush of city life, and embrace
            the simplicity and charm of countryside living.
          </p>
          <button className="mt-6 text-sm sm:text-lg md:text-xl px-4 sm:px-6 py-2 bg-[#9F5A3F] text-white rounded-full shadow-lg hover:bg-[#77432e]">
            Explore Now
          </button>
        </div>

        {/* Right side images */}
        <div className="relative mt-8 lg:mt-0">
          <img
            src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618021/IMG-20241115-WA0056_zralxn.jpg"
            alt="Frame 2"
            className="h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] w-[150px] sm:w-[250px] md:w-[316px] lg:w-[316px] relative object-cover rounded-full mx-auto right-24 "
          />
          <img
            src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618040/IMG-20241115-WA0062_hhflmy.jpg"
            alt="Frame 3"
            className="absolute -bottom-6 sm:-bottom-10 md:-bottom-6 -right-4 sm:-right-6 md:-right-1 h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] w-[150px] sm:w-[250px] md:w-[316px] lg:w-[316px] object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
