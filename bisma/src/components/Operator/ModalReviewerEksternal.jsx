import React, { useState } from "react";
import DropdownCmp from "../DropdownCmp";
import SearchInput from "../SearchInput";
import TextfieldCmp from "../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaPlus,
  FaCcMastercard,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalReviewerEksternal = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [tasul, setTasul] = useState("");
  const [tapel, setTapel] = useState("");
  const [Tahapan, setTahapan] = useState("");
  const [nidn, setNidn] = useState("");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const handleSearch = () => {
    console.log("Search for:", nidn);
    // Add search logic here
  };

  //   const handleInputChange = (setter) => (e) => {
  //     setter(e.target.value);
  //   };

  // Fungsi untuk ekspor data ke Excel
  const handleExportExcel = () => {
    const tableData = [
      ["No", "Pengusul", "Skema", "Judul", "Berkas"],
      [
        "1",
        `Ketua: SRI HARJANTO
          NIDN: 0626016803
          Tahun Pelaksanaan: 2024
          Lama Kegiatan: 1 Tahun
          Bidang Fokus: Teknologi Informasi dan Komunikasi`,
        "Penelitian Dasar - Penelitian Dosen Pemula",
        "Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa Inggris Berbasis Digital Visual Literacy dan Keterampilan 5C untuk Siswa Sekolah Dasar",
        "-",
      ],
    ];

    // Membuat worksheet dan workbook
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Usulan Draft");

    // Menyimpan file Excel
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "UsulanDraftMonitoring.xlsx");
  };

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate("/monitoring-usulan-reguler");
  };

  const handleReviewerInt = () => {
    navigate("/monitoring-pengelola-review-internal");
  };

  const handleReviewEks = () => {
    navigate("/monitoring-pengelola-review-eksternal");
  };
  const handleDelete = () => {
    navigate("/monitoring-usulan-reguler");
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Limit height and add scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="min-h-screen p-5 mx-10 my-5">
        <h1 className="text-xl font-bold text-violet-800 mb-4">
          Penugasan Reviewer Internal
        </h1>
        <h1 className="text-sm font-sans mb-4">
          Seleberan Beban Review-Pelaksanaan
        </h1>

        <div>
          <div className="flex justify-end border-b max-w-6xl">
            <div>
              <button
                onClick={handleBack}
                className={`flex items-center px-4 py-2 rounded-md border border-1 border-bluef-500 ${
                  "Kembali"
                    ? "bg-bluef-500 text-white"
                    : "bg-white text-bluef-500"
                }`}
              >
                <FaArrowLeft className="mr-2" /> {/* Add the arrow icon */}
                Kembali
              </button>
            </div>
          </div>

          <div className="bg-white max-w-6xl mx-auto shadow-md rounded-md ">
            <div className="grid grid-cols-2 gap-4 mx-10">
              <div>
                <SearchInput
                  label="NIDN"
                  placeholder="select NIDN"
                  value={nidn}
                  onChange={(e) => setNidn(e.target.value)}
                  onSearch={handleSearch}
                  color={`bg-bluef-500`}
                />
              </div>
              <DropdownCmp
                label="Tahun Usulan"
                options={options}
                selectedOption={tasul}
                onChange={(value) => setTasul(value)}
                name="skema"
                placeholder="Pilih Tahun"
              />
            </div>
            <div className="flex mx-5 ">
              <div className="mx-2 my-2">
                <button
                  onClick={handleExportExcel}
                  className="flex items-center px-2 py-1 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icon_excel.svg"}
                    alt="penelitian"
                    className="w-5 h-5 mr-2"
                  />
                  Excel
                </button>
              </div>
              <div className="mx-2 my-2">
                <button
                  onClick={handleExportExcel}
                  className="flex items-center px-2 py-1 bg-bluef-500 text-white rounded-md hover:bg-green-600"
                >
                  <FaPlus size={15} />
                  Beban Reviewer
                </button>
              </div>
            </div>
            <div className="mx-5 my-5">
              <TextfieldCmp
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Cari Berdasarkan Judul"
                width="w-64 p-2"
              />
            </div>
            {/* Tabel */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 border border-black">
                <thead className="text-xs text-center  text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">No</th>
                    <th className="border px-4 py-2">Reviewer</th>
                    <th className="border px-4 py-2">Kompetensi</th>
                    <th className="border px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">1</td>
                    <td className="border px-4 py-2">
                      Sri Siswanti S.Kom, M.Kom
                      <br />
                      STMIK Sinar Nusantara Surakarta
                    </td>
                    <td className="border px-4 py-2 text-center">
                      Bidang Ilmu Komputer
                    </td>
                    <td className="items-center border px-4 py-2 text-center">
                      <button
                        onClick={handleExportExcel}
                        className="flex items-center text-center px-2 py-1 bg-bluef-500 text-white rounded-md hover:bg-cyan-600"
                      >
                        <FaEdit />
                        Tugaskan
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalReviewerEksternal;
