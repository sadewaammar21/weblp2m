import React, { useEffect, useState } from "react";
import DropdownCmp from "../DropdownCmp";
import { deleteResearch, getResearch } from "../../Features/ResearchSlice";
import { FaPlus, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ModalTerimaAnggotaPenelitian from "./ModalTerimaAnggotaPenelitian";

const UsulanBaruList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Hook untuk navigasi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const handleClick = () => {
    navigate("/penelitian/usulan/baru"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const fetchData = async () => {
    try {
      const result = await getResearch({
        pageSize: 5,
        currentPage: 1,
        // status: 1,
        // year: 2024,
        userId: user.id,
      });
      setData(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const response = await deleteResearch(id);
    console.log(response);
    fetchData();
  };

  const openModal = (id) => {
    setSelectedData(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    fetchData();
  };

  const renderActionButton = (item) => {
    if (item.user.id !== user.id) {
      const currentUserAsMember = item.members.find(
        (member) => member.id === user.id
      );
      if (currentUserAsMember.pivot.status !== "pending") {
        return <p>{currentUserAsMember.pivot.status}</p>;
      } else {
        return (
          <div>
            <button
              onClick={() => openModal(item.id)}
              className="bg-blue-500 px-2 py-1 rounded-md text-white"
            >
              Action
            </button>
          </div>
        );
      }
    } else {
      return (
        <div>
          <button
            onClick={() => navigate(`/penelitian/usulan/edit/${item.id}`)}
            className={` px-2 py-1 rounded-md text-white ${item.status != 1 ? "hidden" : ""}`}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/edit_perusl.svg"}
              alt="logo"
              className="w-7 h-7 mr-2"
            />
          </button>
          <button
            onClick={() => navigate(`/penelitian/detail/${item.id}`)}
            className=" px-2 py-1 rounded-md text-white"
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/detail.svg"}
              alt="logo"
              className="w-7 h-7 mr-2"
            />
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className={` px-2 py-1 rounded-md text-white ${item.status != 1 ? "hidden" : ""}`}
          >
            <img
              src={process.env.PUBLIC_URL + "/assets/remove.svg"}
              alt="logo"
              className="w-7 h-7 mr-2"
            />
          </button>
        </div>
      );
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mx-5">
      {/* Bagian Usulan Penelitian tidak dimasukkan ke dalam card */}
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          USULAN PENELITIAN
        </h1>
      </div>

      {/* Card untuk bagian Tambah Usulan dan Tabel */}
      <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 ">
        <div className="my-5">
          <div className="p-4w-full rounded-md ">
            {/* <div className="flex">
              <img
                src={process.env.PUBLIC_URL + "/assets/information.svg"}
                alt="logo"
                className="w-6 h-6 mr-4 "
              />
              <h2 className="text-xl font-bold text-violet-800"> Informasi</h2>
            </div> */}
            <ModalTerimaAnggotaPenelitian
              research={selectedData}
              userId={user.id}
              isOpen={isOpen}
              onRequestClose={closeModal}
            />
            {/* <h2 className="text-md font-medium text-violet-800 mr-1">
              {" "}
              Apakah anda menerima menjadi anggota penelitian?
            </h2>
            <div className="flex justify-start space-x-4 my-5">
              <button
                className="border border-reds-500 text-reds-500 px-2 py-1 text-sm rounded hover:bg-reds-100"
                onClick={() => openModal()} // Ganti dengan aksi yang sesuai
              >
                Diterima
              </button>
              <button
                className="border border-bluef-500 text-bluef-500 px-2 py-1 text-sm rounded hover:bg-bluef-100"
                onClick={() => alert("Ditolak")} // Ganti dengan aksi yang sesuai
              >
                Ditolak
              </button>
            </div> */}
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <button
              className="flex items-center px-4 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
              onClick={handleClick}
            >
              <FaPlus className="mr-2" /> {/* Icon tambah */}
              Tambah Usulan
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <h1>Tahun Pelaksana</h1>
            <div className="flex">
              <button className="bg-bluef-500 px-1 text-white hover:bg-bluef-300 focus:outline-none">
                <FaPen className="items-center" size={15} />
              </button>
              <input
                type="text"
                className="text-sm w-full border border-neutral-100"
                value=""
                onChange={``}
                placeholder="2024"
              />
            </div>
          </div>
        </div>

        {/* Tabel */}
        <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-neutral-100">
                <th className="border  border-neutral-100 px-4 py-2">No</th>
                <th className="border border-neutral-100 px-4 py-2">Ketua</th>
                <th className="border border-neutral-100 px-4 py-2">Judul</th>
                <th className="border border-neutral-100 px-4 py-2">
                  Bidang Fokus
                </th>
                <th className="border border-neutral-100 px-4 py-2">
                  Tahun Pelaksanaan
                </th>
                <th className="border border-neutral-100 px-4 py-2">Peran</th>
                <th className="border border-neutral-100 px-4 py-2">
                  Status Usulan
                </th>
                <th className="border border-neutral-100 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b text-center text-b3">
                  <td className="border border-neutral-100 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-neutral-100 px-4 py-2">
                    {item.user?.name}
                  </td>
                  <td className="border border-neutral-100 px-4 py-2">
                    {item.title}
                  </td>
                  <td className="border border-neutral-100 px-4 py-2">
                    {item.focus.name}
                  </td>
                  <td className="border border-neutral-100 px-4 py-2">
                    {item.year}
                  </td>
                  <td className="border border-neutral-100 px-4 py-2">
                    {user.id === item.user.id ? "Ketua" : "Anggota"}
                  </td>
                  <td className="border border-neutral-100 px-4 py-2">
                    {item.status}
                  </td>
                  <td className="flex space-x-2 justify-center border border-neutral-100 px-4 py-2">
                    {renderActionButton(item)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsulanBaruList;
