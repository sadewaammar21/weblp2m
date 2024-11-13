import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Make sure to import the CSS for the dropdown

const  DropdownCmp = ({ label, options, selectedOption, onChange, name, placeholder }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <Dropdown
        options={options} // Array of options { label: 'Label', value: 'Value' }
        onChange={(selected) => onChange(selected.value)} // Pass the selected value to the handler
        value={selectedOption} // The selected value, not the whole object
        placeholder={placeholder || "Select an option"} // Default placeholder if none provided
        name={name} // This is optional if you need the name for form handling
      />
    </div>
  );
};

export default DropdownCmp;
