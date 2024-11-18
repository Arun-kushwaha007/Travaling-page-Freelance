import React from 'react';
import Image1 from '../../Assets/Image1.png';
import Vector from '../../Assets/Vector.png';

const daysData = [
  {
    day: "Day 1",
    description:
      "These chocolates are known for their distinctive round shape, consisting of a whole hazelnut surrounded by a thin wafer shell filled with hazelnut chocolate cream and covered in milk chocolate and chopped hazelnuts.",
    activity: "Traditional Hut Stay",
    image: Image1,
  },
  {
    day: "Day 2",
    description:
      "These chocolates are known for their distinctive round shape, consisting of a whole hazelnut surrounded by a thin wafer shell filled with hazelnut chocolate cream and covered in milk chocolate and chopped hazelnuts.",
    activity: "Local Traditional Food",
    image: Vector,
  },
  {
    day: "Day 3",
    description:
      "These chocolates are known for their distinctive round shape, consisting of a whole hazelnut surrounded by a thin wafer shell filled with hazelnut chocolate cream and covered in milk chocolate and chopped hazelnuts.",
    activity: "Swimming Pool",
    image: Image1,
  },
  {
    day: "Day 4",
    description:
      "These chocolates are known for their distinctive round shape, consisting of a whole hazelnut surrounded by a thin wafer shell filled with hazelnut chocolate cream and covered in milk chocolate and chopped hazelnuts.",
    activity: "Traditional Cooking Class",
    image: Vector,
  },
  {
    day: "Day 5",
    description:
      "These chocolates are known for their distinctive round shape, consisting of a whole hazelnut surrounded by a thin wafer shell filled with hazelnut chocolate cream and covered in milk chocolate and chopped hazelnuts.",
    activity: "Village Tour",
    image: Image1,
  },
];

const Planing = () => {
  return (
    <div className="planning-section my-12 mx-auto max-w-7xl px-4">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Trip Planning
      </h2>
      <div className="flex flex-col gap-12">
        {daysData.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-8`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={day.image}
                alt={day.activity}
                className="rounded-lg shadow-lg max-h-80 w-full object-cover"
              />
            </div>
            {/* Description Section */}
            <div className="w-full md:w-1/2 bg-pink-100 shadow-md rounded-lg p-6 relative">
              <h3 className="text-2xl font-semibold mb-4">{day.day}</h3>
              <p className="text-gray-700 mb-4">{day.description}</p>
              <button className="bg-[#9f5a3f] text-white px-4 py-2 rounded-lg hover:bg-[#874024]">
                {day.activity}
              </button>
              {/* Vertical Line */}
              <div
                className="absolute hidden md:block w-1 h-full bg-gray-300"
                style={{
                  right: index % 2 === 1 ? "auto" : "-10px",
                  left: index % 2 === 1 ? "-10px" : "auto",
                  top: 0,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planing;
