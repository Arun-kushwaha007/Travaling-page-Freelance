import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const [trips, setTrips] = useState([]);
  const [viewAll, setViewAll] = useState(false); // State to toggle between viewing 4 cards or all cards
  const cardsPerPage = 4;

  const navigate = useNavigate(); // Hook for navigation

  // Fetch data from the API
  useEffect(() => {
    const fetchTrips = async () => {
      console.log("Fetching trips...");
      try {
        const response = await fetch(
          "https://gaonjourney.com/api/v1/all_trips/"
        );
        console.log("Response received:", response);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Trips data:", data);
        setTrips(data); // Save the trips data to state
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  // Get the current trips to display based on viewAll state
  const tripsToDisplay = viewAll ? trips : trips.slice(0, cardsPerPage);

  // Handle "View All" button click
  const handleViewAllClick = () => {
    setViewAll(!viewAll); // Toggle viewAll state
  };

  // Handle "Book Now" button click
  const handleBookNowClick = (tripId) => {
    // Navigate to BookingPage with tripId (can pass via state or params)
    navigate(`/booking/${tripId}`);
  };

  return (
    <div>
      <div className="main m-4 pb-12 mt-16">
        {/* Header Section */}
        <div className="top p-4 flex justify-between">
          <h1 className="text-5xl font-semibold text-gray-800 relative left-20">
            Explore the Destination
          </h1>
          <button
            onClick={handleViewAllClick}
            className="relative right-8 border-2 border-gray-800 p-2 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
          >
            {viewAll ? "View Less" : "View All"}
          </button>
        </div>

        {/* Cards Section */}
        <div className="cards flex justify-evenly my-3 align-middle items-center flex-wrap gap-2">
          {tripsToDisplay.length > 0 ? (
            tripsToDisplay.map((trip) => (
              <div
                key={trip.id}
                className="card flex flex-col justify-center rounded-lg shadow-lg max-w-[350px] object-fill hover:shadow-xl hover:bg-gray-50 transition duration-300 ease-in-out border border-gray-200 p-4"
              >
                {/* Card Image */}
                <img
                  src={trip.main_image}
                  alt={trip.trip_name}
                  className="rounded-t-lg w-full h-56 object-cover mb-4 "
                />

                {/* Card Text */}
                <div className="text flex flex-col items-start">
                  <h1 className="font-semibold text-xl text-gray-900">
                    {trip.trip_name}
                  </h1>
                  <h3 className="text-gray-600 text-sm mb-2">{trip.trip_type}</h3>
                  <h2 className="text-blue-600 font-semibold mb-3">
                    Rs{trip.price}/per person
                  </h2>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {trip.description}
                  </p>
                  <button
                    onClick={() => handleBookNowClick(trip.id)}
                    className="bg-[#9f5a3f] w-full h-12 rounded-md text-white font-semibold hover:bg-[#874024] transition duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">Loading trips...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
