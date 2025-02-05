import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css"; // Make sure to import the CSS for the dropdown

const DropdownCmp = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  width = "w-full",
  disabled,
}) => {
  return (
    <div className="dropdown">
      <label className="block text-neutral-500 text-b1 mb-2">{label}</label>
      <Dropdown
        options={options}
        onChange={onChange}
        value={value} //ganti nama, sebelumnya bikin bingung
        placeholder={placeholder || "Select an option"}
        className={`text-b2 border  border-neutral-400 text-neutral-400 rounded shadow focus:outline-none focus:shadow-outline mb-3 ${width}`}
        disabled={disabled}
      />
    </div>
  );
};

export default DropdownCmp;
