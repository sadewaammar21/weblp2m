import React, { useState, useEffect } from "react";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver"; // Library for saving files
// import { downloadResearchDocument, getResearch } from";
import {
  downloadResearchDocument,
  getResearch,
} from "../../../Features/ResearchSlice";
import ModalReset from "./ModalReset";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const ProfileUserList = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [filters, setFilters] = useState({ name: "", kategori: "" });
  const [filteredData, setFilteredData] = useState([]);
  const [kategoriOptions, setKategoriOptions] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchUsers = async () => {
    const response = await axios.get(`${apiUrl}/api/users`, getToken());
    setUser(response.data);
    console.log(response.data);
    setFilteredData(response.data);
  };

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

  useEffect(() => {
    // console.log(data);
    fetchUsers();
  }, []);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  //   const handleInputChange = (setter) => (e) => {
  //     setter(e.target.value);
  //   };

  // Fungsi untuk ekspor data ke Excel

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
        RESET PASSWORD USER
      </h1>

      <div>
        <div className="flex justify-end border-b max-w-[1430px]">
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
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Cari nama user"
              width="w-64 p-2 sm:w-64 md:w-80 lg:w-96 xl:w-96 2xl:w-96"
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
                    <td className="items-center border px-4 py-2 text-center">
                      <button
                        onClick={openModal}
                        className="flex items-center text-center px-2 py-1 bg-bluef-500 text-white rounded-md hover:bg-cyan-600"
                      >
                        Reset
                      </button>
                    </td>
                    {/* <td></td>
                  <td>Yustina Retno Wahyu Utami, S.Kom, M.Cs</td>
                  <td>Dosen</td>
                  <td>
                    <div className="flex justify-center space-x-4 my-5">
                      <button
                        className="border border-bluef-600 text-white bg-bluef-600 px-2 py-1 text-sm rounded hover:bg-bluef-100"
                        // Ganti dengan aksi yang sesuai
                        onClick={openModal}
                      >
                        Reset
                      </button>
                    </div>
                  </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalReset isOpen={isOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default ProfileUserList;
