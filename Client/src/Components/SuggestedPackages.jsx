import React from 'react';
import Image1 from '../Assets/Image1.png';

const SuggestedPackages = () => {
  const packages = [
    {
      id: 1,
      image: Image1,
      title: 'Journey through the Alps, Peak, Valleys',
      location: 'Rajasthan',
      price: '$49.99',
      duration: '6 Days 7 Nights',
      rating: '2.5',
    },
    {
      id: 2,
      image: Image1,
      title: 'Journey through the Alps, Peak, Valleys',
      location: 'Rajasthan',
      price: '$49.99',
      duration: '6 Days 7 Nights',
      rating: '2.5',
    },
    {
      id: 3,
      image: Image1,
      title: 'Journey through the Alps, Peak, Valleys',
      location: 'Rajasthan',
      price: '$49.99',
      duration: '6 Days 7 Nights',
      rating: '2.5',
    },
    {
      id: 4,
      image: Image1,
      title: 'Journey through the Alps, Peak, Valleys',
      location: 'Rajasthan',
      price: '$49.99',
      duration: '6 Days 7 Nights',
      rating: '2.5',
    },
  ];

  return (
    <div className="px-6 md:px-20 py-10">
      <h2 className="text-2xl font-bold mb-6">Suggested Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-40 object-cover"
              />
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656L10 16.344l-6.828-6.828a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded inline-block mb-2">
                {pkg.location}
              </span>
              <h3 className="text-lg font-bold">{pkg.title}</h3>
              <div className="flex items-center text-yellow-500 my-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < Math.round(pkg.rating) ? 'fill-current' : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.367 4.212h4.42c.969 0 1.371 1.24.588 1.81l-3.584 2.606 1.367 4.211c.3.921-.755 1.688-1.54 1.108L10 13.348l-3.584 2.606c-.785.58-1.84-.187-1.54-1.108l1.367-4.211-3.584-2.606c-.783-.57-.38-1.81.588-1.81h4.42L9.049 2.927z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-2">{pkg.price}</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 2a2 2 0 00-2 2v1h12V4a2 2 0 00-2-2H6zm11 5H3v9a2 2 0 002 2h10a2 2 0 002-2V7z" />
                  </svg>
                  <span>{pkg.duration}</span>
                </div>
                <button className="text-blue-600 font-semibold hover:underline">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPackages;
