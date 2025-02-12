import React, { useState, useEffect } from "react";
import DropdownCmp from "../DropdownCmp";
import TextfieldCmp from "../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLessThan } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver";
import ModalLaporanBelumDitinjau from "./ModalLaporanBelumDitinjau";
import ModalLaporanBelumDitinjauDitolak from "./ModalLaporanBelumDitinjauDitolak";
import {
  getResearch,
  downloadResearchDocument,
} from "../../Features/ResearchSlice";

const UsulanBelumDitinjauKpl = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTolak, setIsDitolak] = useState(false);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const openModalDitolak = (item) => {
    setSelectedData(item);
    setIsDitolak(true);
  };
  const closeModalDitolak = () => {
    setIsDitolak(false);
  };
  const openModal = (item) => {
    console.log(item);
    setSelectedData(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAccepted, setIsAccepted] = useState(false);
  const [status, setStatus] = useState(0);
  const [selectedData, setSelectedData] = useState({});

  const user = localStorage.getItem("user");
  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await getResearch({
        page_size: 5,
        current_page: 1,
        status: 5,
      });
      setData(result.data);
      console.log(result);
      console.log(data);
      console.log(typeof data);
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
    navigate("/dashboard-kepala-lppm");
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  return (
    <div className="min-h-screen p-5 mx-10 my-5">
      <h1 className="text-xl font-bold text-violet-800 mb-4">
        LIST USULAN DISETUJUI BELUM DITINJAU KEPALA LPPM
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
                onClick={handleExportExcel}
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
                <tr className="text-center">
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Pengusul</th>
                  <th className="border px-4 py-2">Usulan-Pengusul</th>
                  <th className="border px-4 py-2">Berkas</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
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
                      <p className="text-blue-600 font-bold">{item.title}</p>
                      <p className="text-blue-600 font-bold">
                        {item.scheme.name}
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
                    <td className="border border-gray-300 p-2 text-center">
                      <div
                        className={`flex justify-center space-x-2 ${item.status === 5 ? "" : "hidden"}`}
                      >
                        <button
                          onClick={() => openModal(item)}
                          className="bg-bluef-500 text-white px-4 py-2 rounded-md"
                        >
                          Disetujui
                        </button>
                        <button
                          onClick={() => openModalDitolak(item)}
                          className="bg-reds-500 text-white px-4 py-2 rounded-md"
                        >
                          Ditolak
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalLaporanBelumDitinjau
        data={selectedData}
        isOpen={isOpen}
        onRequestClose={closeModal}
      />
      <ModalLaporanBelumDitinjauDitolak
        data={selectedData}
        isOpen={isTolak}
        onRequestClose={closeModalDitolak}
      />
    </div>
  );
};

export default UsulanBelumDitinjauKpl;
