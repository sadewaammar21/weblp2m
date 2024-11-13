import React from 'react';
import { FaSearch } from 'react-icons/fa'; // FontAwesome search icon (optional)

const SearchInput = ({ label, placeholder, value, onChange, onSearch, width = 'w-1/2' }) => { // Default width is half-page
  return (
    <div className={`flex flex-col space-y-2 ${width}`}>
      {label && <label className="text-gray-700 font-semibold">{label}</label>}
      <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder={placeholder || 'Select NIDN'}
          value={value}
          onChange={onChange}
          className="flex-grow p-2 outline-none text-gray-700" // Adjust padding and remove outline on focus
        />
        <button 
          onClick={onSearch} 
          className="bg-blue-800 p-3 flex items-center justify-center text-white"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
