import React from 'react';
import Vector from "../Assets/Vector.png";
import Frame1 from "../Assets/Frame1.png";
import Frame2 from "../Assets/Frame2.png";
import Frame3 from "../Assets/Frame3.png";
import Frame4 from "../Assets/Frame4.png";

const Travel = () => {
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
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731617324/de07periscopevilla_1228938g_nqhbjr.jpg"
              alt="Frame 2"
              className="w-48 h-48  rounded-lg "
            />
            <img
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618007/IMG-20241115-WA0026_mlqax8.jpg"
              alt="Frame 3"
              className="absolute -bottom-6 -left-6 w-48 h-48 object-cover rounded-lg "
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
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618021/IMG-20241115-WA0056_zralxn.jpg"
              alt="Frame 2"
              className=" w-full object-cover rounded-lg "
            />
            <img
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618040/IMG-20241115-WA0062_hhflmy.jpg"
              alt="Frame 3"
              className="absolute -bottom-6 -right-4 w-full  object-cover rounded-lg "
            />
          </div>
        </div>
      </div>




      

      
    </div>
  );
};

export default Travel;