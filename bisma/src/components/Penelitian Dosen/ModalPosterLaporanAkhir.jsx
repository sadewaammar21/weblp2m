import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DropdownCmp from "../DropdownCmp"; // Komponen Dropdown yang Anda buat
import TextfieldCmp from "../TextfieldCmp"; // Komponen TextField yang Anda buat

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalPosterLaporanAkhir = ({ data, setData, isOpen, onRequestClose }) => {
  const [poster, setPoster] = useState();
  useEffect(() => {
    if (data) {
      setPoster(data.poster);
    }
  }, [data]);

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setPoster(files[0]);
  };

  const handleSave = () => {
    console.log("Data berhasil disimpan");
    setData((prevData) => ({
      ...prevData,
      poster: poster,
    }));
    setPoster();
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
      <h2 className="text-xl font-bold mb-4">POSTER</h2>
      <form>
        <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
          {/* Content */}
          <div className="text-bluef-500">
            <h1 className="text-md font-bold font-sans  my-1">Informasi</h1>
            <h2 className="text-md font-bold font-sans  mb-3">
              Ketentuan isian poster hasil penelitian berisi beberapa hal
              sebagai berikut :
            </h2>

            <h3 className="text-md font-medium font-sans  my-1">
              1. Judul Penelitian
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">
              2. Nama Perguruan Tinggi
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">3. Skema</h3>
            <h3 className="text-md font-medium font-sans  my-1">
              4. Dana penelitian
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">
              5. Tim peneliti yang tediri dari ketua dan anggota peneliti
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">
              6. Tahun pelaksanaan penelitian
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">
              7. TKT akhir
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">8. Luaran</h3>
            <h3 className="text-md font-medium font-sans  my-1">
              9. Kata Kunci
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">
              10. Ringkasan penelitian{" "}
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">
              11. Gambar/ foto/ ilustri hasil penelitian
            </h3>
            <h3 className="text-md font-medium font-sans  my-1">
              12. Unggah poster dalam format PDF
            </h3>
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Poster</label>
          <input
            name="poster"
            onChange={(e) => handleFileChange(e)}
            type="file"
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleSave}
          >
            Simpan
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalPosterLaporanAkhir;
