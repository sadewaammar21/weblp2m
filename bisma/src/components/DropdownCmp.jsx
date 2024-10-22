import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';  // pastikan untuk mengimpor style library

const DropdownCmp = ({ label, options, selectedOption, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <Dropdown
        options={options}
        onChange={(selected) => onChange(selected.value)} // Akses selected.value di onChange
        value={selectedOption}
        placeholder={placeholder || "Select an option"}
        className="w-full"
      />
    </div>
  );
};

export default DropdownCmp;
