import React from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalLuaranElektronik = ({
  data,
  isOpen,
  onRequestClose,
  index,
  onSave,
}) => {
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
      <h2 className="text-xl font-bold mb-4">Luaran Wajib Elektronik</h2>
      <form>
        {/* Dropdown Status Artikel */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Status Elektronik</label>
          <DropdownCmp options={["Terbit", "Tidak Terbit"]} />
        </div>

        {/* Dropdown Status Penulis */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Jenis Media Masa</label>
          <DropdownCmp options={["Media Cetak", "Media Elektronik"]} />
        </div>

        {/* Nama Jurnal */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Judul</label>
          <TextfieldCmp placeholder="Judul Publikasi" />
          <label className="block text-gray-700 mb-2">Nama Media Masa</label>
          <TextfieldCmp placeholder="Nama Media Masa" />
          <label className="block text-gray-700 mb-2">Tahun Publikasi</label>
          <TextfieldCmp placeholder="Tahun" />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Bukti Dukung</label>
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

export default ModalLuaranElektronik;
