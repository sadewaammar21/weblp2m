import React, { useState } from "react";
import Modal from "react-modal";
import SearchInput from "../SearchInput";
import TextfieldCmp from "../TextfieldCmp";
import TextAreaCmp from "../TextAreaCmp";

Modal.setAppElement("#root");

const PopUpDokumenPendukung = ({ isOpen, onRequestClose, index, onSave }) => {
  const [documentData, setDocumentData] = useState({
    partner_name: "",
    email: "",
    institution: "",
    country_code: "",
    institution_address: "",
    funding_contribution1: "",
    funding_contribution2: "",
    document: null,
  });

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
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold my-5">
        Mitra Pelaksana Penelitian - Form
      </h1>

      <div>
        <div className="grid grid-cols-2 gap-x-10  ">
          <TextfieldCmp
            label="Nama Mitra"
            value={documentData.partner_name}
            name="partner_name"
            onChange={handleInputChange}
            placeholder="Masukkan Nama Mitra"
          />
          <TextfieldCmp
            label="Email"
            value={documentData.email}
            name="email"
            onChange={handleInputChange}
            placeholder="Email Instansi"
          />

          <TextfieldCmp
            label="Nama Instansi"
            value={documentData.institution}
            name="institution"
            onChange={handleInputChange}
            placeholder="Nama Instansi"
          />
        </div>
        <TextfieldCmp
          label="Negara"
          value={documentData.country_code}
          name="country_code"
          onChange={handleInputChange}
          placeholder="Kode Negara"
        />
        <TextfieldCmp
          label="Alamat Mitra"
          value={documentData.institution_address}
          name="institution_address"
          onChange={handleInputChange}
          placeholder="Masukkan Alamat Lengkap"
        />
        <TextAreaCmp
          label="Bantuan Dana 1"
          value={documentData.funding_contribution1}
          name="funding_contribution1"
          onChange={handleInputChange}
          placeholder="Bantuan Dana"
          rows={3}
        />

        <TextfieldCmp
          label="Bantuan Dana 2"
          value={documentData.funding_contribution2}
          name="funding_contribution2"
          onChange={handleInputChange}
          placeholder="Bantuan Dana"
        />
        {/* Label dan Link untuk Unduh Template */}
        <div className="flex justify-between items-center mb-2">
          <label className="font-medium text-gray-700">
            Unggah Dokumen Penduung *
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
          onClick={handleSave} // Replace with the desired action
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default PopUpDokumenPendukung;
