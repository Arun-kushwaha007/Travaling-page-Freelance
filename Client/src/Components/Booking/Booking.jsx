import React from 'react';
import Image1 from '../../Assets/Image1.png';
import Vector from '../../Assets/Vector.png';

const Booking = () => {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 my-16">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={Image1}
          alt="Main Tour"
          className="w-full h-72 object-cover rounded-lg"
        />
        {/* Thumbnail Images */}
        <div className="flex justify-start gap-3 mt-4">
          <img
            src={Image1}
            alt="Thumbnail 1"
            className="w-16 h-16 object-cover rounded-md border border-gray-300"
          />
          <img
            src={Vector}
            alt="Thumbnail 2"
            className="w-16 h-16 object-cover rounded-md border border-gray-300"
          />
          <img
            src={Image1}
            alt="Thumbnail 3"
            className="w-16 h-16 object-cover rounded-md border border-gray-300"
          />
          <img
            src={Vector}
            alt="Thumbnail 4"
            className="w-16 h-16 object-cover rounded-md border border-gray-300"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2">
        {/* Category and Discount Tag */}
        <div className="flex justify-between items-center">
          <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full">
            Agro
          </span>
          <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
            20% OFF
          </span>
        </div>

        {/* Title and Location */}
        <h2 className="text-2xl font-bold mt-4">Majestic Alps Adventure</h2>
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <img src={Vector} alt="Location" className="w-4 h-4 mr-2" />
          Swiss Alps, Switzerland
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-4">
          Embark on a breathtaking journey through the Swiss Alps. Experience
          stunning mountain vistas, charming villages, and exhilarating outdoor
          activities in this 7-day adventure package.
        </p>

        {/* Info Section */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 011-1h6a1 1 0 011 1v1h1.5A2.5 2.5 0 0118 5.5V16a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 16V5.5A2.5 2.5 0 014.5 3H6V2zm2 2v1H6v-.5a.5.5 0 01.5-.5H8zm6 0h-2v1h1.5a.5.5 0 00.5-.5V4zm-6 0h4v1H8V4zm1 3h2v1H9V7z"
                clipRule="evenodd"
              />
            </svg>
            Duration: 7 days, 6 nights
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14A7 7 0 0010 3zm0 11a4 4 0 100-8 4 4 0 000 8z"
                clipRule="evenodd"
              />
            </svg>
            Group size: Up to 12 people
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 15a7 7 0 110-14 7 7 0 010 14zm2-8H8v4h4v-4z"
                clipRule="evenodd"
              />
            </svg>
            Best time to visit: June to September
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-6">
          <p className="text-xl font-bold text-orange-600">$1,599</p>
          <p className="text-sm text-gray-500 line-through">$1,999</p>
          <p className="text-sm text-green-500">You Save $400</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-4">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700">
            Buy Package
          </button>
          <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 18.364a4.5 4.5 0 016.364 0l.707.707.707-.707a4.5 4.5 0 116.364 0l.707.707-.707.707a4.5 4.5 0 01-6.364 0l-.707-.707-.707.707a4.5 4.5 0 01-6.364 0l-.707-.707.707-.707z"
              />
            </svg>
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
