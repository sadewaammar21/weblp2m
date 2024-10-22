import React from 'react';

const TextAreaCmp = ({ label, name, value, onChange, placeholder, rows = 4, width='w-full' }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="border border-gray-300 rounded-md w-full px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
};

export default TextAreaCmp;
