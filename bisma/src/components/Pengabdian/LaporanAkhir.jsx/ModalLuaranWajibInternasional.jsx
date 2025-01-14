import React from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalLuaranWajibInternasional = ({ isOpen, onRequestClose }) => {
  const handleSave = () => {
    console.log("Data berhasil disimpan");
    onRequestClose(); // Tutup modal setelah menyimpan
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-auto max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">
        Luaran Wajib Artikel di Jurnal Bereputasi Internasional
      </h2>
      <form>
        {/* Dropdown Status Artikel */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Status Artikel di Jurnal Bereputasi Internasional
          </label>
          <DropdownCmp options={["Submitted", "Accepted", "Published"]} />
        </div>

        {/* Dropdown Status Penulis */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Status Penulis</label>
          <DropdownCmp options={["First Author", "Co-Author"]} />
        </div>

        {/* Nama Jurnal */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nama Jurnal</label>
          <TextfieldCmp placeholder="Nama Jurnal" />
        </div>

        {/* ISSN/EISSN dan Lembaga Pengindeks */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">ISSN/EISSN</label>
            <TextfieldCmp placeholder="ISSN/EISSN" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Lembaga Pengindeks
            </label>
            <TextfieldCmp placeholder="Lembaga Pengindeks" />
          </div>
        </div>

        {/* URL Jurnal */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">URL Jurnal</label>
          <TextfieldCmp placeholder="URL Jurnal" />
        </div>

        {/* Judul Artikel */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Judul Artikel</label>
          <TextfieldCmp placeholder="Judul Artikel" />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Naskah Artikel</label>
          <input
            type="file"
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Bukti Submit</label>
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

export default ModalLuaranWajibInternasional;
