import React from "react";

const TextAreaCmp = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  width = "w-full",
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="border text-b2 border-neutral-400 text-neutral-400 rounded shadow focus:outline-none focus:shadow-outline  w-full px-3 py-2   focus:border-indigo-500"
      />
    </div>
  );
};

export default TextAreaCmp;
