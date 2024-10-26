import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar/Navbar';


const Destination = () => <h1>Destination Page</h1>;
const Packages = () => <h1>Packages Page</h1>;
const Blogs = () => <h1>Blogs Page</h1>;
const Wishlist = () => <h1>Wishlist Page</h1>;

function App() {
  return (
    <div>
      {/* <Navbar/> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/destination" element={<Destination />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
