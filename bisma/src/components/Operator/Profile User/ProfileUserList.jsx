import React, { useState, useEffect } from "react";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLessThan } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver"; // Library for saving files
// import { downloadResearchDocument, getResearch } from";
import {
  downloadResearchDocument,
  getResearch,
} from "../../../Features/ResearchSlice";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";
const apiUrl = process.env.REACT_APP_API_URL;

const ProfileUserList = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ name: "" });

  const handleEdit = () => {
    navigate("/monitoring/data-pendukung/edit-profil-user"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const [user, setUser] = useState([]);

  //get data from db
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getResearch({
  //         pageSize: 10,
  //         currentPage: 1,
  //         // status: 1,
  //         year: 2025,
  //       });
  //       setData(result.data);
  //       console.log(data);
  //     } catch (err) {
  //       // setError(err.message);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const fetchUsers = async () => {
    const response = await axios.get(`${apiUrl}/api/users`, getToken());
    setUser(response.data);
    console.log(response.data);
    setFilteredData(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const lowerName = filters.name.toLowerCase();
    const selectedKategori = filters.kategori?.value?.toLowerCase() || "";

    const filtered = user.filter((item) => {
      const nameMatch = item.name?.toLowerCase().includes(lowerName);
      const kategoriMatch = selectedKategori
        ? item.roles.some((role) =>
            role.name.toLowerCase().includes(selectedKategori)
          )
        : true;

      return nameMatch && kategoriMatch;
    });

    setFilteredData(filtered);
  }, [filters.name, filters.kategori, user]);

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
    navigate("dashboard-operator");
  };

  const options = [
    { label: "Pilih Kategori", value: "" },
    { label: "Dosen", value: "dosen" },
    { label: "Reviewer", value: "reviewer" },
    { label: "Kaprodi", value: "kaprodi" },
    { label: "Kepala LPPM", value: "kepala lppm" },
    { label: "Operator", value: "operator" },
  ];

  return (
    <div className="min-h-screen p-5 mx-10 my-5">
      <h1 className="text-xl font-bold text-violet-800 mb-4">
        LIST EDIT PROFIL USER
      </h1>

      <div>
        <div className="flex justify-end border-b max-w-[1430px]">
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
              <DropdownCmp
                options={options}
                selectedOption={filters.kategori}
                onChange={(val) =>
                  setFilters((prev) => ({ ...prev, kategori: val }))
                }
                placeholder="Kategori"
                className="border border-black"
                controlClassName="bg-white text-black"
                width="w-64 p-2"
              />
            </div>
          </div>
          <div className="mx-5 my-5">
            <TextfieldCmp
              value={filters.name}
              onChange={(e) => setFilters({ ...filters, name: e.target.value })}
              placeholder="Cari nama user"
              width="w-64 p-2"
            />
          </div>
          {/* Tabel */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center text-gray-500 border border-black">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Nama</th>
                  <th className="border px-4 py-2">Kategori</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2 text-center">
                      {item.roles.map((role) => role.name).join(", ")}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <div className="space-y-2 space-x-5 my-2">
                        <button
                          className="border border-bluef-600 text-white bg-bluef-600 px-2 py-1 text-sm rounded hover:bg-bluef-100"
                          onClick={handleEdit}
                        >
                          Edit
                        </button>
                        <button className="border border-bluef-600 text-white bg-bluef-600 px-2 py-1 text-sm rounded hover:bg-bluef-100">
                          Role
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* <tbody>
                <tr className="text-center">
                  <td></td>
                  <td>Yustina Retno Wahyu Utami, S.Kom, M.Cs</td>
                  <td>Dosen</td>
                  <td>
                    <div className="flex justify-center space-x-4 my-5">
                      <button
                        className="border border-bluef-600 text-white bg-bluef-600 px-2 py-1 text-sm rounded hover:bg-bluef-100"
                        // Ganti dengan aksi yang sesuai
                        onClick={handleEdit}
                      >
                        Edit
                      </button>
                      <button
                        className="border border-bluef-600 text-white bg-bluef-600 px-2 py-1 text-sm rounded hover:bg-bluef-100"
                        // Ganti dengan aksi yang sesuai
                      >
                        Role
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserList;
