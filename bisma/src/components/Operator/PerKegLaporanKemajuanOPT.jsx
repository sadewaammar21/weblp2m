import React, { useState } from "react";
import DropdownCmp from "../DropdownCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver"; // Library for saving files
import ModalPerKegLaporanKemajuan from "./ModalPerKegLaporanKemjauan";
import PerKegLaporanAkhirOPT from "./PerKegLaporanAkhirOPT";

const PerKegLaporanKemajuanOPT = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModalView = () => {
    setIsOpen(true);
  };

  const closeModalView = () => {
    setIsOpen(false);
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  //   const handleInputChange = (setter) => (e) => {
  //     setter(e.target.value);
  //   };

  // Fungsi untuk ekspor data ke Excel

  // Fungsi untuk kembali ke halaman sebelumnya

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  const handleBack = () => {
    navigate("/monitoring/penenelitian/periode-kegiatan/");
  };
  return (
    <div className="min-h-screen p-5 mx-10 my-5">
      {/* Judul Halaman */}
      <h1 className="text-xl font-bold text-violet-800">
        PENENTUAN DEADLINE LAPORAN KEMAJUAN PENELITIAN
      </h1>

      {/* Tombol Kembali */}
      <div className="flex justify-end border-b max-w-6xl mb">
        <button
          onClick={handleBack}
          className="flex items-center px-4 py-2 rounded-md border border-bluef-500 bg-bluef-500 text-white"
        >
          <FaArrowLeft className="mr-2" /> {/* Ikon panah kiri */}
          Kembali
        </button>
      </div>

      {/* Kontainer Utama */}
      <div className="bg-white max-w-6xl shadow-md rounded-md">
        <div className="mx-5 my-5">
          {/* Header dengan Tombol Ekspor dan Dropdown */}
          <div className="flex justify-end w-full items-start space-x-5 mt-5">
            <DropdownCmp
              label="Jenis Kegiatan *"
              options={options}
              selectedOption={selectedOption}
              onChange={(e) => handleDropdownChange(e.target.value)}
              placeholder="Penelitian"
              className="w-72 border border-black" // Panjang dropdown
              controlClassName="bg-neutral-30 text-black"
            />
            <DropdownCmp
              label="Tahun Pelaksanaan *"
              options={options}
              selectedOption={selectedOption}
              onChange={(e) => handleDropdownChange(e.target.value)}
              placeholder="2024"
              className="w-72 border border-black" // Panjang dropdown
              controlClassName="bg-neutral-30 text-black"
            />
          </div>
          <div className="flex justify-end w-full items-start space-x-5 ">
            <h1 className="text-md font-bold  mb-4">{`Proposal 0`}</h1>
          </div>
          <div className="mx-5 my-5">
            <h1 className="text-md font-bold text-violet-800 mb-4">
              Rekap Usulan
            </h1>
          </div>
          {/* Tabel */}
          <div className="overflow-x-auto mx-5 my-10">
            <table className="w-full text-sm text-left text-gray-500 border border-black">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Usulan</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2 text-bluef-500">
                    Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa Inggris
                    Berbasis DIgital Visual Literacy dan Keterampilan 5C untuk
                    Siswa Sekolah Dasar
                    <br className="mt-5 text-cyan-800" />
                    Skema-Penelitian Fundamental - Reguler
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      className="bg-bluef-500 text-white px-4 py-2 rounded-md"
                      onClick={openModalView}
                    >
                      Deadline
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Modal */}
        <ModalPerKegLaporanKemajuan
          isOpen={isOpen}
          onRequestClose={closeModalView}
        />
      </div>
    </div>
  );
};

export default PerKegLaporanKemajuanOPT;
