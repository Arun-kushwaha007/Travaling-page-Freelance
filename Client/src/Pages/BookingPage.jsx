import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer, { FooterMainSection } from "../Home/Footer.jsx";
import Booking from "../Components/Booking/Booking.jsx";
import Overview from "../Components/Booking/Overview.jsx";
import Planing from "../Components/Booking/Planing.jsx";
import SuggestedPackages from "../Components/SuggestedPackages.jsx";

const BookingPage = () => {
  const { tripId } = useParams(); // Get tripId from the URL
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const response = await fetch(
          `https://gaonjourney.com/api/v1/trips/${tripId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch trip data');
        }
        const data = await response.json();
        setTripData(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching trip details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTripData();
  }, [tripId]);

  return (
    <div>
      <Navbar />
      {loading && <p>Loading trip details...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {tripData && !loading && !error && (
        <>
          <Booking tripData={tripData} />
          <Overview tripData={tripData} />
          <Planing tripData={tripData} />
          <SuggestedPackages />
        </>
      )}
      <FooterMainSection />
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>© 2024 Gao Journey. All rights reserved</p>
      </div>
    </div>
  );
};

export default BookingPage;
