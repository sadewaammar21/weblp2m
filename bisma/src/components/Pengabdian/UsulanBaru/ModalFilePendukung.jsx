import React, { useState } from "react";
import Modal from "react-modal";
// import SearchInput from "../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";
import DropdownCmp from "../../DropdownCmp";

Modal.setAppElement("#root");

const ModalFilePendukung = ({
  isOpen,
  onRequestClose,
  index,
  onSave,
  data,
  setData,
}) => {
  const [documentData, setDocumentData] = useState({
    partner_name: "",
    email: "",
    institution: "",
    country_code: "",
    institution_address: "",
    funding_contribution1: "",
    funding_contribution2: "",
    kelompokFP: "", // Tambahkan state untuk dropdown
    document: null,
  });

  const kelompokFPOptions = [
    {
      label: "Gambaran teknologi yang diterapkan kepada mitra",
      value: "Gambaran teknologi yang diterapkan kepada mitra",
    },
    {
      label: "Peta yang menggambarkan jarak lokasi",
      value: "Peta yang menggambarkan jarak lokasi",
    },
    {
      label: "Surat pernyataan originalitas usulan",
      value: "Surat pernyataan originalitas usulan",
    },
    {
      label: "Bukti keterkaitan program dengan RPJMD/RPJMDes",
      value: "Bukti keterkaitan program dengan RPJMD/RPJMDes",
    },
    {
      label: "Harga Perkiraan Sendiri (HPS) Komponen RAB Alat dan Bahan",
      value: "Harga Perkiraan Sendiri (HPS) Komponen RAB Alat dan Bahan",
    },
  ];

  const handleDropdownChange = (value) => {
    setDocumentData((prevData) => ({
      ...prevData,
      kelompokFP: value, // Perbarui state lokal
    }));
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setDocumentData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleFileChange = (event) => {
    setDocumentData((prevData) => ({
      ...prevData,
      document: event.target.files[0],
    }));
  };

  const handleSave = () => {
    onSave(index, documentData);
    onRequestClose();
    console.log(documentData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold my-5">
        Mitra Pelaksana Pengabdian - Form
      </h1>

      <div>
        {/* Dropdown untuk jenis file */}
        <DropdownCmp
          label="Jenis"
          options={kelompokFPOptions}
          value={documentData.kelompokFP} // Ikat dengan state lokal
          onChange={(option) => handleDropdownChange(option.value)}
          placeholder="Pilih jenis file"
        />

        <div className="flex justify-between items-center my-2">
          <label className="font-sans">
            Unggah Surat Pernyataan Kesediaan Kerjasama Mitra
          </label>
        </div>

        {/* Input untuk upload file */}
        <input
          type="file"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
          id="file-upload"
        />
      </div>

      <div className="flex justify-end space-x-4 mt-5">
        <button
          className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
          onClick={onRequestClose}
        >
          Tutup
        </button>
        <button
          className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSave}
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default ModalFilePendukung;
