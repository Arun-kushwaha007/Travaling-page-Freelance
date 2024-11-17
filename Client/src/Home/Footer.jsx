import React from 'react';

// Top Section of the Footer
export const FooterTopSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-gray-300 pt-8">
      {/* Newsletter Signup Section */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">SignUp for Our Newsletter</h3>
        <p className="text-gray-600">Get latest offers and discount and stay updated to latest tours</p>
        <div className="flex items-center mt-4">
          <span className="bg-white px-3 py-2 rounded-l-md border border-gray-300 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.94 3.94a.75.75 0 011.06 0L10 9.94l5.94-6a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-1.06 0l-6-6a.75.75 0 010-1.06z" />
            </svg>
          </span>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="border border-gray-300 rounded-r-md py-2 px-4 w-full focus:outline-none focus:border-blue-400"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2">Submit</button>
        </div>
      </div>

      {/* Customer Support Section */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">24/7 Customer Support</h3>
        <p className="text-gray-600">Get latest offers and discount and stay updated to latest tours</p>
        <div className="flex items-center mt-4">
          {/* Customer avatars */}
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=4" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md ml-4">Chat Now</button>
        </div>
      </div>
    </div>
  );
};

// Main Section of the Footer
export const FooterMainSection = () => {
  return (
    <div className="border-t border-gray-300 pt-8 mt-8 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* About Section */}
      <div>
        <h3 className="text-xl font-bold text-black">Gao Journey</h3>
        <p>Discover the world with us. Unforgettable experiences await.</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.5 12.5h2.25v6.25h3V12.5h2.25L12 8l-4.5 4.5z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.04 2.5h5.92c3.5 0 5.54 1.74 5.54 5.12v8.76c0 3.38-2.04 5.12-5.54 5.12H9.04c-3.5 0-5.54-1.74-5.54-5.12V7.62c0-3.38 2.04-5.12 5.54-5.12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-black">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Destination</a></li>
          <li><a href="#" className="hover:underline">Packages</a></li>
          <li><a href="#" className="hover:underline">Blogs</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Popular Destinations */}
      <div>
        <h3 className="font-bold text-black">Popular Destinations</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Rajasthan</a></li>
          <li><a href="#" className="hover:underline">Himachal Pradesh</a></li>
          <li><a href="#" className="hover:underline">Kerala</a></li>
          <li><a href="#" className="hover:underline">Tamil Nadu</a></li>
          <li><a href="#" className="hover:underline">Goa</a></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="font-bold text-black">Contact Us</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span>+91 8547126548</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>sample@gmail.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>123 Travel Street, Adventure City, 98765</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Main Footer Component
const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <FooterTopSection />
      <FooterMainSection />
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>© 2024 Gao Journey. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
