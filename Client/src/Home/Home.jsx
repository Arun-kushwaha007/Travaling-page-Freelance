import React from 'react';
import homebg from "../Assets/homebg.png"; 
import { FaSearchLocation } from 'react-icons/fa';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src={homebg} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text over the image */}
      <div className="relative flex flex-col items-center justify-center h-full z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-white text-base md:text-lg mb-8">
          Plan Your Perfect Trip with Us
        </p>

        {/* Search Bar Section */}
        <div className="bg-white p-4 rounded-full shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center w-full max-w-lg md:max-w-none">
          {/* Location Input */}
          <div className="flex items-center space-x-2 w-full">
            <FaSearchLocation className="text-gray-500" />
            <div className="w-full">
              <label className="block text-gray-500 text-sm">Location</label>
              <input 
                type="text" 
                placeholder="Where are you going?" 
                className="outline-none w-full"
              />
            </div>
          </div>

          {/* Check-in Input */}
          <div className="flex items-center space-x-2 w-full">
            <FaCalendarAlt className="text-gray-500" />
            <div className="w-full">
              <label className="block text-gray-500 text-sm">Check in</label>
              <input 
                type="date" 
                className="outline-none w-full" 
              />
            </div>
          </div>

          {/* Check-out Input */}
          <div className="flex items-center space-x-2 w-full">
            <FaCalendarAlt className="text-gray-500" />
            <div className="w-full">
              <label className="block text-gray-500 text-sm">Check out</label>
              <input 
                type="date" 
                className="outline-none w-full" 
              />
            </div>
          </div>

          {/* Guests Input */}
          <div className="flex items-center space-x-2 w-full">
            <FaUser className="text-gray-500" />
            <div className="w-full">
              <label className="block text-gray-500 text-sm">Guests</label>
              <input 
                type="number" 
                placeholder="Add guests" 
                className="outline-none w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center w-full md:w-auto">
            <FaSearchLocation className="mr-2" />
            Search
          </button>
        </div>
      </div>

      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  )
}

export default Home;
