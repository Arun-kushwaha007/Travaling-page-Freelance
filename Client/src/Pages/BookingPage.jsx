import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";
// import Footer from "../Components/Footer/Footer.jsx";
import Footer, { FooterMainSection } from "../Home/Footer.jsx";
// FooterMainSection

import Booking from "../Components/Booking/Booking.jsx";
import Overview from "../Components/Booking/Overview.jsx";
import Planing from "../Components/Booking/Planing.jsx";
import SuggestedPackages from "../Components/SuggestedPackages.jsx";

const BookingPage = () => {
  const { tripId } = useParams(); // Get tripId from the URL
  const [tripData, setTripData] = useState(null);

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const response = await fetch(
          `http://165.22.209.39:5000/api/v1/trips/${tripId}`
        );
        const data = await response.json();
        setTripData(data);
      } catch (error) {
        console.error("Error fetching trip details:", error);
      }
    };

    fetchTripData();
  }, [tripId]);

  return (
    <div>
      <Navbar />
      {tripData ? (
        <>
          <Booking tripData={tripData} />
          <Overview tripData={tripData} />
          <Planing tripData={tripData} />
          <SuggestedPackages />
        </>
      ) : (
        <p>Loading trip details...</p>
      )}
      <FooterMainSection />
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>© 2024 Gao Journey. All rights reserved</p>
      </div>
    </div>
  );
};

export default BookingPage;
