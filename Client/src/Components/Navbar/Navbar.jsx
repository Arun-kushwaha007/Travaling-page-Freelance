import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      

    </div>
  )
}

export default Navbar
