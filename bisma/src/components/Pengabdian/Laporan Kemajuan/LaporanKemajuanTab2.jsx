import React from "react";

const LaporanKemajuanTab2 = ({ data, setData }) => {
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
    console.log(data);
  };
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Penggunaan Anggaran</label>
        <input
          type="file"
          name="budget_use"
          onChange={(e) => handleFileChange(e)}
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
          id="file-upload"
        />
      </div>
    </div>
  );
};

export default LaporanKemajuanTab2;
