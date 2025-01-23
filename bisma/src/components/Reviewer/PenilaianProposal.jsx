import React, { useState, useEffect } from "react";
import DropdownCmp from "../DropdownCmp";
import TextfieldCmp from "../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLessThan } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver"; // Library for saving files
import axios from "axios";
import { getToken } from "../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const PenilaianProposal = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //get researches data
  const user = localStorage.getItem("user");
  const userParse = JSON.parse(user);
  const fetchData = async () => {
    try {
      const result = await axios.get(
        `${apiUrl}/api/reviewer/${userParse.id}/research`,
        getToken()
      );
      setData(result.data);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
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
    // const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    // const workbook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(workbook, worksheet, 'Data Usulan Draft');

    // // Menyimpan file Excel
    // const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    // saveAs(data, 'UsulanDraftMonitoring.xlsx');
    console.log(data);
  };

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate("/dashboard-reviewer");
  };

  const handleAction = (researchId) => {
    navigate("/review-penelitian-proposal", { state: { id: researchId } });
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <div className="min-h-screen p-5 mx-10 my-5">
      <h1 className="text-xl font-bold text-violet-800 mb-4">
        PENILAIAN PROPOSAL PENELITIAN
      </h1>

      <div>
        <div className="flex justify-end border-b max-w-6xl">
          <div>
            <button
              onClick={handleBack}
              className="flex items-center px-4 py-2 rounded-md border border-1 border-bluef-500 bg-bluef-500 text-white
               hover:bg-white hover:text-bluef-500"
            >
              <FaLessThan className="mr-2" /> {/* Add the arrow icon */}
              Kembali
            </button>
          </div>
        </div>

        <div className="bg-white max-w-6xl mx-auto shadow-md rounded-md">
          <div className="flex justify-between mx-5 ">
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
                <tr className="text-center">
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Pengusul</th>
                  <th className="border px-4 py-2">Usulan-Pengusul</th>
                  <th className="border px-4 py-2">Berkas</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.data &&
                  data.data.map((item) => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2 text-center">
                        {item.id}
                      </td>
                      <td className="border px-4 py-2">
                        {item.user.name}
                        <br />
                        NIDN: {item.user.nidn}
                        <br />
                        Tahun Pelaksanaan: {item.year}
                        <br />
                        Lama Kegiatan: {item.duration} Tahun
                        <br />
                        Bidang Fokus: {item.research_focus.name}
                      </td>
                      <td className="border px-4 py-2 text-bluef-500">
                        {item.title}
                        <br />
                        {item.scope.name}
                      </td>
                      <td className="border px-4 py-2 items-center">
                        <button>
                          <img
                            src="/assets/icon_pdf_brks.svg"
                            alt="Action Icon"
                            className="py-2 w-7 h-auto z-10"
                          />
                        </button>
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <button
                          onClick={() => handleAction(item.id)}
                          className="bg-bluef-500 text-white px-4 py-2 rounded-md"
                        >
                          Review
                        </button>
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

export default PenilaianProposal;
