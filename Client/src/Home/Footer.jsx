import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
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
    </div>
  );
};

export default Footer;
