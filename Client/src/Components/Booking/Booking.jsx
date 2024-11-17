import React, { useEffect, useState } from "react";

const Booking = () => {
  const [tripData, setTripData] = useState(null);

  useEffect(() => {
    // Fetch trip data from the API
    fetch("http://165.22.209.39:5000/api/v1/all_trips/")
      .then((response) => response.json())
      .then((data) => {
        setTripData(data[0]); // Fetch the first trip for simplicity
      })
      .catch((error) => {
        console.error("Error fetching trip data:", error);
      });
  }, []);

  if (!tripData) return <p>Loading...</p>; // Show a loading message while fetching data

  const {
    trip_name,
    trip_type,
    description,
    price,
    includes,
    main_image,
    images,
  } = tripData;

  const formattedPrice = price ? `₹${price.toLocaleString()}` : "Price not available";
  const discountedPrice = price ? `₹${(price * 0.8).toLocaleString()}` : null;

  return (
    <div className="bg-white max-w-6xl mx-auto mt-10 p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-10">
      {/* Left Section - Main Image and Thumbnails */}
      <div className="w-full md:w-1/2">
        <img
          src={main_image}
          alt={trip_name}
          className="w-full h-80 object-cover rounded-lg"
        />
        <div className="flex gap-4 mt-4">
          {images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover rounded-lg border border-gray-300"
            />
          ))}
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="w-full md:w-1/2">
        {/* Trip Type and Discount Tag */}
        <div className="flex justify-between items-center">
          <span className="bg-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full font-semibold uppercase">
            {trip_type}
          </span>
          <span className="text-white bg-green-500 text-xs px-3 py-1 rounded-full font-semibold">
            20% OFF
          </span>
        </div>

        {/* Trip Name and Location */}
        <h2 className="text-2xl font-bold mt-4">{trip_name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Duration, Group Size, and Best Time */}
        <div className="mt-6 space-y-2 text-gray-700">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <p>Duration: 7 days, 6 nights</p>
          </div>
          <div className="flex items-center gap-2">
            <span>👥</span>
            <p>Group size: Up to 12 people</p>
          </div>
          <div className="flex items-center gap-2">
            <span>🌤</span>
            <p>Best time to visit: June to September</p>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-6">
          <p className="text-3xl font-bold text-orange-600">{discountedPrice}</p>
          <p className="text-gray-500 line-through">{formattedPrice}</p>
          <p className="text-green-500 font-semibold">You save ₹{(price * 0.2).toLocaleString()}</p>
        </div>

        {/* Buy and Wishlist Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700">
            Buy Package
          </button>
          <button className="border border-gray-300 px-4 py-3 rounded-lg text-gray-600 hover:border-gray-400">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
