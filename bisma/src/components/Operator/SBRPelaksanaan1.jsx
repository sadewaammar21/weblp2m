import React, { useState } from "react";
import DropdownCmp from "../DropdownCmp";
import SearchInput from "../SearchInput";
import TextfieldCmp from "../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver"; // Library for saving files

const SBRPelaksanaan1 = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [tasul, setTasul] = useState("");
  const [nidn, setNidn] = useState("");

  const handleDropdownChange = (option) => {
    if (option) {
      setSelectedOption(option);
    } else {
      console.warn("Dropdown option is null or undefined");
    }
  };

  const handleSearch = () => {
    console.log("Search for:", nidn);
    if (!nidn) {
      console.warn("NIDN is empty or invalid");
    }
    // Add search logic here
  };

  const handlePlus = () => {
    navigate("/monitoring-pengelola-review-internal");
  };
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

  const options = [
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
  ];

  const tableData = [
    {
      id: 1,
      reviewer: "Sri Siswanti S.Kom, M.Kom",
      kompetensi: 1,
      beban: "1 skema",
      institusi: "Tiga Serangkai University Surakarta",
    },
  ];

  return (
    <div className="min-h-screen p-5 mx-10 my-5">
      <h1 className="text-xl font-bold text-violet-800 mb-4">
        Penugasan Review
      </h1>
      <h1 className="text-sm font-sans mb-4">
        Seleberan Beban Review-Pelaksanaan
      </h1>

      <div>
        <div className="flex justify-end border-b max-w-6xl">
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 rounded-md border border-1 border-bluef-500 bg-bluef-500 text-white"
          >
            <FaArrowLeft className="mr-2" />
            Kembali
          </button>
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
              options={options}
              selectedOption={tasul}
              onChange={(value) => setTasul(value)}
              name="skema"
              placeholder="10"
            />
          </div>
          <div className="flex mx-5 ">
            <div className="mx-2 my-2">
              <button
                onClick={handleExportExcel}
                className="flex items-center px-2 py-1 bg-cyan-800 text-white rounded-md hover:bg-green-600"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/icon_excel.svg"}
                  alt="penelitian"
                  className="w-5 h-5 mr-2"
                />
                Excel
              </button>
            </div>
            {/* <div className="mx-2 my-2">
              <button
                onClick={handlePlus}
                className="flex items-center px-2 py-1 bg-bluef-500 text-white rounded-md hover:bg-green-600"
              >
                <FaPlus size={15} />
                Beban Reviewer
              </button>
            </div> */}
            {/* <DropdownCmp
              label="Tahun Usulan"
              options={options}
              selectedOption={tasul}
              onChange={(value) => setTasul(value)}
              name="tasul"
              placeholder="Pilih Tahun"
            /> */}
          </div>

          {/* <div className="mx-5 my-5">
            <TextfieldCmp
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Cari Berdasarkan Judul"
              width="w-64 p-2"
            />
          </div> */}

          {/* Tabel */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 border border-black">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Reviewer</th>
                  <th className="border px-4 py-2">Kompetensi</th>
                  <th className="border px-4 py-2">Beban</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border px-4 py-2">
                      {item.reviewer}
                      <br />
                      {item.institusi}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {item.kompetensi}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {item.beban}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBRPelaksanaan1;
