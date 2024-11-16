import React from 'react';
import Vector from "../Assets/Vector.png";
// import Frame1 from "../Assets/Frame1.png";
// import Frame2 from "../Assets/Frame2.png";
// import Frame3 from "../Assets/Frame3.png";
// import Frame4 from "../Assets/Frame4.png";

const Travel = () => {
  return (
    <div className="relative bg-white py-12 h-[800px] px-6">
      {/* Background Vector */}
      <img src={Vector} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-50" />

      <div className="relative flex flex-col md:flex-row items-center justify-between h-[730px] p-2 mx-auto z-10">
        
        {/* Flex container for images and text */}
      <div className="relative flex flex-col md:flex-row items-center justify-between   h-[700px] mx-auto z-10">
          {/* Left side images */}
          <div className="flex relative space-x-4">
          {/* Square overlapping images */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731617324/de07periscopevilla_1228938g_nqhbjr.jpg"
              alt="Frame 2"
              className="w-[400px] h-[450px]  mx-5   border border-solid border-4 border-gray-500  rounded-lg -rotate-12 "
            />
            <img
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618007/IMG-20241115-WA0026_mlqax8.jpg"
              alt="Frame 3"
              className="absolute bottom-1 right-4 w-[400px] h-[450px]  border border-solid border-4 rotate-3 border-gray-500  rounded-lg object-cover "
            />
          </div>
        </div>

          {/* Text in the center */}
          <div className=" text-center md:text-left w-[750px] px-7 m-16 ">
            <h2 className="text-7xl font-bold text-gray-800 ">The Perfect Travel <br /> Place for You</h2>
            <p className="text-gray-600 mt-4 text-3xl">
              Discover the untouched beauty of rural destinations, where authentic traditions, culture, and nature blend seamlessly. Immerse yourself in local experiences, far from the rush of city life, and embrace the simplicity and charm of countryside living.
            </p>
            <button className="mt-6 text-xl px-6 py-2 bg-[#9F5A3F] text-white rounded-full shadow-lg hover:bg-[#77432e] ">
              Explore Now 
            </button>
          </div>

          {/* Right side images */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618021/IMG-20241115-WA0056_zralxn.jpg"
              alt="Frame 2"
              className=" h-[450px] w-[316px] relative position right-16 bottom-6 object-cover rounded-full "
            />
            <img
              src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618040/IMG-20241115-WA0062_hhflmy.jpg"
              alt="Frame 3"
              className="absolute -bottom-12 -right-6 h-[450px] w-[316px]  object-cover rounded-full "
            />
          </div>
        </div>
      </div>




      

      
    </div>
  );
};

export default Travel;