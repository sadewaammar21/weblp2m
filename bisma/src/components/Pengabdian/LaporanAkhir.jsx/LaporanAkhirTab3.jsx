import React from "react";

const LaporanAkhirTab3 = ({ service, data, setData }) => {
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
      <div>
        <div className="mb-4">
          <label className="block font-bold text-gray-700 mb-2">
            Penggunaan Anggaran
          </label>
          <input
            type="file"
            name="budget_use"
            onChange={(e) => handleFileChange(e)}
            className="border border-gray-300 rounded-lg p-2 w-1/2"
            id="file-upload"
          />
        </div>
      </div>
    </div>
  );
};

export default LaporanAkhirTab3;
