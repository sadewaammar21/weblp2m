import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownCmp from "../DropdownCmp";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver";

const MonitoringUsulanPenelitian = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [year, setYear] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [prohibs, setProhibs] = useState(null);
  const [jenisKegiatan, setJenisKegiatan] = useState(null);
  const [statuses, setStatuses] = useState(null);
  const [jmlBaris, setJmlBaris] = useState(null);

  const optionsJenisKegiatan = [
    { label: "Penelitian", value: "Penelitian" },
    { label: "Pengabdian", value: "Pengabdian" },
  ];

  const Years = [
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
  ];

  const startYears = [
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
  ];

  const ProHib = [
    {
      label: "Penelitian Kompetitif Nasional",
      value: "Penelitian Kompetitif Nasional",
    },
  ];

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

  // Options untuk dropdown
  const handleDropdownChange = (value) => {
    setSelectedOption(value); // Update the selected option
    if (value === "penelitian") {
      navigate("/monitoring-perbaikan-usulan-penelitian");
    } else if (value === "pengabdian") {
      navigate("/monitoring-perbaikan-usulan-pengabdian");
    }
  };

  const options = [
    { label: "Penelitian", value: "penelitian" },
    { label: "Pengabdian", value: "pengabdian" },
  ];

  const statusOptions = [
    { label: "Semua", value: "Semua" },
    { label: "Submitted", value: "Submitted" },
    { label: "Approved", value: "Approved" },
  ];

  const jumlahBarisOptions = [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "15", value: "15" },
  ];

  return (
    <div className="mx-10 my-5">
      <div>
        <h2 className="text-violet-800 font-bold text-lg mb-4">
          PERBAIKAN USULAN PENELITIAN
        </h2>
      </div>
      <div className="flex justify-end items-start mb-4 mx-10">
        {/* <DropdownCmp
          label="Jenis Kegiatan *"
          options={optionsJenisKegiatan}
          selectedOption={optionsJenisKegiatan.find(
            (opt) => opt.value === jenisKegiatan
          )}
          onChange={(selected) => setProhibs(selected.value)}
          className="w-72 border border-black"
        /> */}
      </div>
      <div className="flex justify-end items-start mb-4">
        <DropdownCmp
          label="Tahun Pelaksanaan *"
          options={startYears}
          selectedOption={startYears.find((opt) => opt.value === startYear)}
          onChange={(selected) => setStartYear(selected.value)}
          placeholder="Pilih Tahun Pelaksanaan"
          className="w-72 border border-black"
        />
      </div>

      <div className="flex justify-end items-start space-x-5">
        <DropdownCmp
          label="Status *"
          options={statusOptions}
          selectedOption={statusOptions.find((opt) => opt.value === statuses)}
          onChange={(selected) => setStatuses(selected.value)}
          placeholder="pilih status"
          className="w-72 border border-black " // Panjang dropdown
          controlClassName="bg-neutral-30 text-black"
        />
        <DropdownCmp
          label="Jumlah Baris *"
          options={jumlahBarisOptions}
          selectedOption={jumlahBarisOptions.find(
            (opt) => opt.value === jmlBaris
          )}
          onChange={(selected) => setJmlBaris(selected.value)}
          placeholder="Penelitian"
          className="w-72 border border-black" // Panjang dropdown
          controlClassName="bg-neutral-30 text-black"
        />
      </div>

      <div>
        <div className="flex justify-between my-5">
          <div className="mx-2">
            <button
              onClick={handleExportExcel}
              className="flex items-center px-2 py-1 bg-bluef-500 text-white rounded-md hover:bg-green-600"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/icon_excel.svg"}
                alt="penelitian"
                className="w-5 h-5 mr-2"
              />
              Excel
            </button>
          </div>
          <div>
            <h2 className="text-bluef-600">Jumlah Proposal : 0</h2>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-violet-800 font-bold text-sm mb-4">
          Daftar Usulan
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Usulan</th>
              <th className="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-center">
                1
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <div>
                  <p className="font-semibold text-bluef-500">
                    Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa Inggris
                    Berbasis Digital Visual Literacy dan Keterampilan 5C untuk
                    Siswa Sekolah Dasar
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Skema:</strong> Penelitian Fundamental - Reguler
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Ketua:</strong> IWAN ADY PRABOWO
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Tahun Pelaksanaan:</strong> 2024
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Bidang Fokus:</strong> Teknologi Informasi dan
                    Komunikasi
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Jumlah Anggota:</strong> 3
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Lama Kegiatan:</strong> 1 Tahun
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Tgl Perbaikan:</strong> 24-06-2024
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Dana Disetujui:</strong> Rp10.000.000,00
                  </p>
                  <span className="bg-green-100 text-cyan-700 text-xs font-medium py-1 px-2 rounded">
                    Submitted
                  </span>
                  <p className="bg-green-100 text-cyan-700 text-xs font-medium py-1 px-2 rounded">
                    Dikti
                  </p>
                </div>
              </td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonitoringUsulanPenelitian;
