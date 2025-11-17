import React, { useState, useEffect } from "react";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ModalReset from "./ModalReset";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const ProfileUserList = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [filters, setFilters] = useState({ name: "", kategori: "" });
  const [filteredData, setFilteredData] = useState([]);

  // State untuk modal reset
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null); // <-- User yg mau direset

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/users`, getToken());
      setUser(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.log("Error get users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter name dan kategori
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

  const openModal = (userId) => {
    setSelectedUserId(userId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedUserId(null);
  };

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
              className="flex items-center px-4 py-2 rounded-md bg-bluef-500 text-white"
            >
              <FaArrowLeft className="mr-2" />
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
              width="w-96"
            />
          </div>

          {/* TABLE */}
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
                  <tr key={item.id} className="text-center">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">
                      {item.roles.map((role) => role.name).join(", ")}
                    </td>

                    <td className="border px-4 py-2">
                      <button
                        onClick={() => openModal(item.id)}
                        className="px-3 py-1 bg-bluef-500 text-white rounded-md hover:bg-blue-600"
                      >
                        Reset
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ModalReset
        isOpen={isOpen}
        onRequestClose={closeModal}
        userId={selectedUserId}
        refresh={fetchUsers} // setelah reset, refresh tabel user
      />
    </div>
  );
};

export default ProfileUserList;
