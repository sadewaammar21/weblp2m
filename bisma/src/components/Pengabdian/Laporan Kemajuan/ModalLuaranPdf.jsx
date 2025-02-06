import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalLuaranPdf = ({
  isOpen,
  onRequestClose,
  data,
  setData,
  index,
  onSave,
}) => {
  const [outputData, setOutputData] = useState({});

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setOutputData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  // useEffect(() => {
  //   if (data) {
  //     setOutputData(data[index]);
  //   }
  // }, [data, index]);

  useEffect(() => {
    if (data && index >= 0) {
      setOutputData(data[index]); // Update data modal berdasarkan index
    }
  }, [data, index]);

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Data berhasil disimpan");
    onSave(index, outputData);
    setOutputData({});
    onRequestClose(); // Close modal after save
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] max-h-[80vh] overflow-y-auto" // Hilangkan margin jika ada
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">PDF Hasil Pelaksanaan</h2>
      <form onSubmit={handleSave}>
        <TextAreaCmp
          label={`Uraian Jenis Hasil Pelaksanaan`}
          placeholder={`Uraian Jenis Hasil Pelaksanaan`}
          value={outputData.result_description}
          name="result_description"
          onChange={(e) => handleInputChange(e)}
          rows={5}
        />

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Rencana Hasil Pelaksanaan
          </label>
          <input
            name="result_plans"
            onChange={(e) => handleFileChange(e)}
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
            type="file"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave} // Ganti dengan aksi yang sesuai
          >
            Simpan
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalLuaranPdf;
