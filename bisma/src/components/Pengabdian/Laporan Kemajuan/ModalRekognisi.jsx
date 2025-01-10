import React from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp"; // Komponen Dropdown yang Anda buat
import TextfieldCmp from "../../TextfieldCmp"; // Komponen TextField yang Anda buat

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalRekognisi = ({ isOpen, onRequestClose, data, setData }) => {
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
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-auto max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">
        Luaran Wajib Artikel di Jurnal Bereputasi Internasional
      </h2>
      <form>
        {/* Dropdown Status Artikel */}
        <div className="mb-4">
          <DropdownCmp
            label={`Status Rekognisi Mahasiswa`}
            options={komponenRekognisi}
            onChange={(option) => {
              handleDropdownChange("status_rekognisi", option.value);
            }}
            placeholder={`Pilih Status Rekognisi`}
          />
        </div>

        <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
          {/* Content */}
          <div className="text-bluef-500">
            <h1 className="text-md font-bold font-sans  my-1">
              Daftar Nama Mahasiswa
            </h1>
          </div>
        </div>
        <div className="">
          <h1 className="text-md font-sans   my-1">
            1. Bagas Adi Kurniawan (Informatika)
            <br />
            2. Muhammad Rafi Nur Mahendra (Informatika)
          </h1>
        </div>

        {/* Sks */}
        <div className="mb-4">
          <TextfieldCmp
            label={`Jumlah SKS yang direkognisi (minimal 6 SKS)`}
            placeholder="nomor"
          />
        </div>
        <div className="mb-4">
          <TextfieldCmp
            label={`Mata kuliah yang direkognisi (dipisah dengan tanda ,)`}
            placeholder="Nama Mata Kuliah"
          />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Bukti Rekognisi</label>
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
            Tutup
          </button>
          <button
            className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave} // Ganti dengan aksi yang sesuai
          >
            Selesai
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalRekognisi;
