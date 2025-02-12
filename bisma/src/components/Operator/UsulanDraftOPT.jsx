import React, { useState, useEffect } from "react";
import DropdownCmp from "../DropdownCmp";
import TextfieldCmp from "../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLessThan } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver"; // Library for saving files
import {
  downloadResearchDocument,
  getResearch,
} from "../../Features/ResearchSlice";

const UsulanDraftOPT = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  //get data from db
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getResearch({
          pageSize: 10,
          currentPage: 1,
          // status: 1,
          year: 2025,
        });
        setData(result.data);
        console.log(data);
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, []);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  //   const handleInputChange = (setter) => (e) => {
  //     setter(e.target.value);
  //   };

  // Fungsi untuk ekspor data ke Excel
  const handleExportExcel = (dataExport) => {
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
    const worksheet = XLSX.utils.json_to_sheet(dataExport);
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
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <div className="min-h-screen p-5 mx-10 my-5">
      <h1 className="text-xl font-bold text-violet-800 mb-4">
        LIST USULAN DRAFT MONITORING
      </h1>

      <div>
        <div className="w-full flex justify-end border-b max-w-[1150px] mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 rounded-md border border-bluef-500 bg-bluef-500 text-white 
    hover:bg-white hover:text-bluef-500"
          >
            <FaLessThan className="mr-2" />
            Kembali
          </button>
        </div>

        <div className="bg-white max-w-6xl mx-auto shadow-md rounded-md">
          <div className="flex justify-between mx-5 ">
            <div className="mx-2 my-2">
              <button
                onClick={() => handleExportExcel(data)}
                className="flex items-center px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
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
              <DropdownCmp
                options={options}
                selectedOption={selectedOption}
                onChange={(e) => handleDropdownChange(e.target.value)}
                placeholder="Jumlah Baris"
                className=" border border-black "
                controlClassName="bg-white text-black"
              />
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
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Pengusul</th>
                  <th className="border px-4 py-2">Skema</th>
                  <th className="border px-4 py-2">Judul</th>
                  <th className="border px-4 py-2">Berkas</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => item.status > 1)
                  .map(
                    (
                      item,
                      index //here
                    ) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-2 text-center">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 p-2">
                          <p>Ketua: {item.user?.name}</p>
                          <p>NIDN: {item.user?.nidn}</p>
                          <p>Tahun Pelaksanaan: {item.year}</p>
                          <p>Lama Kegiatan: {item.duration}</p>
                          <p>Bidang Fokus: {item.focus.name}</p>
                        </td>
                        <td className="border border-gray-300 p-2">
                          <p className="text-blue-600 font-bold">
                            {item.scheme.name}
                          </p>
                        </td>
                        <td className="border border-gray-300 p-2">
                          <p className="text-blue-600 font-bold">
                            {item.title}
                          </p>
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <button
                            onClick={() => downloadResearchDocument(item.id)}
                            className="text-red-600 text-2xl"
                          >
                            <a
                              href={`http://localhost:8000/api/research/download/${item.id}`}
                              target="_blank"
                            >
                              📄
                            </a>
                          </button>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsulanDraftOPT;
