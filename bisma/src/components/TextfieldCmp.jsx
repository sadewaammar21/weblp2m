import React from "react";

const TextfieldCmp = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  width = "w-full ",
  height = "h-10",
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-neutral-500 text-b1 mb-2"> {label} </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`text-b2 border border-neutral-400 text-neutral-400 rounded shadow focus:outline-none focus:shadow-outline ${width} ${height}`} // Gabungkan kelas dengan `width`
      />
    </div>
  );
};

export default TextfieldCmp;
