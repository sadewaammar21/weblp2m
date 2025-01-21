import React from "react";
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
  const handleDropdownChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleSave = () => {
    console.log("Data berhasil disimpan");
    onRequestClose(); // Tutup modal setelah menyimpan
  };
  const komponenRekognisi = [
    { label: "Tercapai", value: "Tercapai" },
    { label: "Tidak Tercapai", value: "Tidak_tercapai" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] max-h-[80vh] overflow-y-auto" // Hilangkan margin jika ada
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">PDF Hasil Pelaksanaan</h2>
      <form>
        <TextAreaCmp
          label={`Uraian Jenis Hasil Pelaksanaan`}
          placeholder={`Uraian Jenis Hasil Pelaksanaan`}
          rows={5}
        />

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Rencana Hasil Pelaksanaan
          </label>
          <input
            type="file"
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
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
