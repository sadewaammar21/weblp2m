import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DropdownCmp from "../../DropdownCmp";

// Set root element untuk React Modal
Modal.setAppElement("#root");

const ModalPoster = ({
  data,
  isOpen,
  onRequestClose,
  index,
  onSave,
  setData,
}) => {
  const [outputData, setOutputData] = useState({});

  useEffect(() => {
    if (data && index >= 0) {
      setOutputData(data[index]); // Update data modal berdasarkan index
    }
  }, [data, index]);

  const handleDropdownChange = (option, fieldName) => {
    setOutputData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
  };

  const handleFileChange1 = (event) => {
    setOutputData((prevData) => ({
      ...prevData,
      poster_documents: event.target.files[0],
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Data berhasil disimpan");
    onSave(index, outputData);
    setOutputData({});
    onRequestClose(); // Close modal after save
  };
  const statusRekognisi = [
    { label: "Tercapai", value: "Tercapai" },
    { label: "Tidak Tercapai", value: "Tidak Tercapai" },
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
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <DropdownCmp
            label={`Status Poster`}
            options={statusRekognisi}
            value={statusRekognisi.find(
              (option) => option.value === outputData.status
            )}
            onChange={(option) => handleDropdownChange(option, "status")}
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
            name="poster_documents"
            onChange={(e) => handleFileChange1(e)}
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
