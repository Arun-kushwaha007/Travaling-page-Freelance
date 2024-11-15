import React, { useState, useEffect } from 'react';
import Home from '../Home/Home';
import Travel from '../Home/Travel';
import Place from '../Home/Place';
import Memories from '../Home/Memories';
import Explore from '../Home/Explore';
import Testimonals from '../Home/Testimonals';
import Blogs from '../Home/Blogs';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Home/Footer';

const HomePage = () => {
  const [tripExtras, setTripExtras] = useState([]);  // State to store fetched trip extras

  // Fetch data from API when the component mounts
  useEffect(() => {
    fetch('http://165.22.209.39:5000/api/v1/all_trip_extras/')
      .then(response => response.json())
      .then(data => setTripExtras(data))  // Set data to state
      .catch(error => console.error('Error fetching trip extras:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <section className="Home"><Home /></section>
      <section className="Travel">
        <Travel tripExtras={tripExtras} />  {/* Pass tripExtras as prop to Travel */}
      </section>
      <section className="Place"><Place /></section>
      <section className="Memories"><Memories /></section>
      <section className="Explore"><Explore /></section>
      <section className="Testimonals"><Testimonals /></section>
      <section className="Blogs"><Blogs /></section>
      <section className="Footer"><Footer /></section>
    </div>
  );
};

export default HomePage;
