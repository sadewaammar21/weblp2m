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
      <label>{label}</label>
      <Dropdown
        options={options}
        onChange={onChange}
        value={value} //ganti nama, sebelumnya bikin bingung
        placeholder={placeholder || "Select an option"}
        className={width}
        disabled={disabled}
      />
    </div>
  );
};

export default DropdownCmp;
