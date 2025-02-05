import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalLuaranPpt = ({ isOpen, onRequestClose, data, index, onSave }) => {
  const [outputData, setOutputData] = useState({});

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setOutputData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] max-h-[80vh] overflow-y-auto" // Hilangkan margin jika ada
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-4">Presentasi Power Point</h2>
      <form onSubmit={handleSave}>
        <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
          {/* Content */}
          <div className="text-bluef-500">
            <h1 className="text-md font-bold font-sans  my-1">Informasi</h1>
            <h2 className="text-md font-bold font-sans  mb-3">
              Format File Presentasi (PowerPoint)
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              1.Presentasi dibuat dalam bentuk Powerpoint
              <br />
              2.Waktu penyajian maksimall 10 menit
              <br />
              3. Semua informasi ditulis secara singkat, padat, dan jelas
              <br />
              4. Jumlah slide maksimal 6
            </h3>
            <h2 className="text-md font-bold font-sans  my-1">
              1. Slide 1 Berisi
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              a. judul kegiatan
              <br />
              b. Lokasi Kegiatan
              <br />
              c. Nama pengusul dan anggota beserta NIDN/NIDK
              <br />
              d. Tahun pelaksanaan dan perguruan tinggi
            </h3>
            <h2 className="text-md font-bold font-sans  my-1">
              2. Slide 2 berisi
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              a. identitas, permasalahn tim, dan dana disetujui (dana
              disampaikan dalam bentuk penjelasan singkat)
              <br />
              b. Solusi terhadap permasalahan
            </h3>
            <h2 className="text-md font-bold font-sans  my-1">
              3. Slide 3 berisi
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              a. Kegiatan yang telah dilakukan (disertai dengan foto pendukung
              kegiatan termasuk capaian nilai positif yang diterima oleh tim
              secara teratur)
            </h3>
            <h2 className="text-md font-bold font-sans  my-1">
              4. Slide 4 berisi
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              a. Hasil dan luaran dalam bentuk publikasi (artikel, HAKI, Paten,
              Publikasi media masa, Buku, dll)
              <br />
              b. Faktor yang mendukung dalam pelaksanaan
              <br />
              c. Solusi dan tindak lanjutnya
            </h3>
            <h2 className="text-md font-bold font-sans  my-1">
              4. Slide 4 berisi
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              a. Foto-foto kegiatan
              <br />
              b. foto alat atau barang (diberi keterangan nama alat, fungsi,
              penjelasan alat hasil karya tim atau beli)
            </h3>
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Presentasi</label>
          <input
            name="presentation"
            onChange={(e) => handleFileChange(e)}
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

export default ModalLuaranPpt;
