import React from 'react';

const HotelCard = ({ hotel }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg">
    <img src={hotel.image.url} className="w-full h-32 object-cover" alt={hotel.title} />
    <div className="px-4 py-2">
      <div className="font-bold text-lg mb-1">{hotel.title}</div>
      <p className="text-gray-700 text-sm">{hotel.description}</p>
      <p className="text-gray-700 text-sm">Price: ${hotel.price}</p>
      <p className="text-gray-700 text-sm">Location: {hotel.location}, {hotel.country}</p>
      <p className="text-gray-700 text-sm">Category: {hotel.category}</p>
    </div>
  </div>
);

export default HotelCard;
