import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-transparent p-6 text-black absolute w-full top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold" style={{ color: '#9F5A3F' }}>
            <Link to="/">Tripify</Link>
          </div>

          {/* Routes */}
          <ul className="flex space-x-8 items-center text-lg">
            <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
            {/* <li><Link to="/destination" className="hover:text-gray-500">Destination</Link></li>
            <li><Link to="/packages" className="hover:text-gray-500">Packages</Link></li>
            <li><Link to="/blogs" className="hover:text-gray-500">Blogs</Link></li>
            <li><Link to="/wishlist" className="hover:text-gray-500">Wishlist</Link></li> */}

            <li><Link to="/" className="hover:text-gray-500">Destination</Link></li>
            <li><Link to="/" className="hover:text-gray-500">Packages</Link></li>
            <li><Link to="/" className="hover:text-gray-500">Blogs</Link></li>
            <li><Link to="/" className="hover:text-gray-500">Wishlist</Link></li>
            {/* User Icon */}
            <li><FaUserCircle className="text-3xl hover:text-gray-500 cursor-pointer" /></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
