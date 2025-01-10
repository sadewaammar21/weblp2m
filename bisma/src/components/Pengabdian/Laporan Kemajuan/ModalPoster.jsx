import React from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalPoster = ({ isOpen, onRequestClose, data, setData }) => {
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
      <h2 className="text-xl font-bold mb-4">Luaran Wajib Poster</h2>
      <form>
        <div className="mb-4">
          <DropdownCmp
            label={`Status Poster`}
            options={komponenRekognisi}
            onChange={(option) => {
              handleDropdownChange("status_rekognisi", option.value);
            }}
            placeholder={`Pilih Status Poster`}
          />
        </div>
        <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
          {/* Content */}
          <div className="text-bluef-500">
            <h1 className="text-md font-bold font-sans  my-1">Informasi</h1>
            <h2 className="text-md font-bold font-sans  mb-3">
              Ketentuan isian poster hasil Pengabdian berisi beberapa hal
              sebagai berikut :
            </h2>

            <h2 className="text-md font-bold font-sans  my-1">
              1. Desain poster memenuhi ketentuan
            </h2>
            <h3 className="text-md font-medium font-sans  my-1 mx-5 ">
              a. ukuran 60 cm x 160 cm posisi portrait (vertikal);
              <br />
              b. Wajib mencantumka logo KEMDIKBUDRISTEK dan logo Perguruan
              Tinggi;
              <br />
              c. poster bersifat original dan menggambarkan hasil pengabdian
              kepada masyarakat;
              <br />
              d. desain tampilan, warna dari konten merupakan hasil karya
              sendiri dan tidak mengandung unsur plagiarism, politik, dan SARA;
              <br />
              e. poster memuat judul, tim pelaksana, instansi pemberi dana,
              resume pelaksanaan kegiatan, hasil pelaksanaan kegiatan dan
              teknologi yang diterapkan.
            </h3>
            <h2 className="text-md font-bold font-sans  my-1">
              2. Pada pelaporan softfile poster menggunakan jenis warna RGB dan
              di upload pada BIMA dengan format PDF.
            </h2>
            <h2 className="text-md font-bold font-sans  my-1">
              3. Pada seminar hasil poster dicetak menggunakan jenis warna CMYK,
              dicetak poster bentuk ukuran 60 cm x 160 cm dengan jenis kertas
              floxy.
            </h2>
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Poster</label>
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

export default ModalPoster;
