import React from 'react';
import  { useState } from 'react';
import HotelList from '../../components/Hotels_Rooms/HotelList';

  
  const DiscoverIndia = () => {

   

    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <div className="text-center mt-8">
        <h2 className='text-xl mb-4'>Discover India</h2>
        <div className="mx-auto max-w-md rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => alert(`Searching for: ${searchTerm}`)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2"
          >
            Search
          </button>
        </div>

        <div>
          <HotelList/>
        </div>
      </div>
    );
  };
  
  export default DiscoverIndia;
