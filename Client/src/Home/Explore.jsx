import React, { useEffect, useState } from 'react';
import Image1 from "../Assets/Image1.png";

const Explore = () => {
  const [trips, setTrips] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchTrips = async () => {
      console.log("Fetching trips...");
      try {
        const response = await fetch("/api/v1/all_trips/");
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

  return (
    <div>
      <div className="main mt-16">
        {/* Header Section */}
        <div className="top flex justify-between">
          <h1 className="text-xl font-semibold relative left-8">Explore the Destination</h1>
          <button className="relative right-8 border-black border border-solid p-1 rounded-md">
            View All
          </button>
        </div>
        {/* Cards Section */}
        <div className="cards flex justify-evenly my-3 align-middle items-center flex-wrap">
          {trips.length > 0 ? (
            trips.map((trip) => (
              <div
                key={trip.id}
                className="card flex flex-col justify-center rounded-md shadow-md max-w-[200px] object-fill hover:shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out border border-solid border-black p-2"
              >
                {/* Card Image */}
                <img src={Image1} alt={trip.trip_name} className="rounded-t-md" />
                {/* Card Text */}
                <div className="text mx-2 flex flex-col items-start mt-2">
                  <h1 className="font-bold text-lg">{trip.trip_name}</h1>
                  <h3 className="text-gray-600">{trip.trip_type}</h3>
                  <h2 className="text-blue-500 font-semibold">${trip.price}/per person</h2>
                  <button className="bg-slate-500 w-full h-11 rounded-md mt-4 text-white">
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
