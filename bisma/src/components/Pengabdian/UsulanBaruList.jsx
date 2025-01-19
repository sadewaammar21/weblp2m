import React, { useEffect, useState } from "react";
import DropdownCmp from "../DropdownCmp";
import { deleteService, getServices } from "../../Features/ServiceSlice";
import { FaPlus, FaPen, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ModalTerimaAnggotaPenelitian from "../UsulanBaru/ModalTerimaAnggotaPenelitian";

const user = JSON.parse(localStorage.getItem("user"));

const UsulanBaruList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Hook untuk navigasi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const handleClick = () => {
    navigate("/pengabdian/usulan/baru"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };
  const handleView = () => {
    navigate("/detail-pengabdian"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const openModal = (id) => {
    setSelectedData(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const result = await getServices({
        pageSize: 5,
        currentPage: 1,
        status: 1,
        year: 2024,
        userId: 1,
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
    const response = await deleteService(id);
    console.log(response);
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
            className={`bg-blue-500 px-2 py-1 rounded-md text-white ${item.status != 1 ? "hidden" : ""}`}
          >
            edit
          </button>
          <button
            onClick={() => navigate(`/penelitian/detail/${item.id}`)}
            className="bg-blue-500 px-2 py-1 rounded-md text-white"
          >
            detail
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className={`bg-red-500 px-2 py-1 rounded-md text-white ${item.status != 1 ? "hidden" : ""}`}
          >
            delete
          </button>
        </div>
      );
    }
  };

  return (
    <div className="mx-5">
      {/* Bagian Usulan Penelitian tidak dimasukkan ke dalam card */}
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          USULAN PENGABDIAN
        </h1>
      </div>

      {/* Card untuk bagian Tambah Usulan dan Tabel */}
      <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 ">
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
          <div>
            <h1>Tahun Pelaksana</h1>
            <div className="flex">
              <button className="bg-bluef-500 px-1 text-white hover:bg-bluef-300 focus:outline-none">
                <FaPen className="items-center" size={15} />
              </button>
              <input
                type="text"
                className="text-sm w-full border border-black"
                value=""
                onChange={``}
                placeholder="2024"
              />
            </div>
          </div>
        </div>

        <ModalTerimaAnggotaPenelitian
          research={selectedData}
          userId={user.id}
          isOpen={isOpen}
          onRequestClose={closeModal}
        />

        {/* Tabel */}
        <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">No</th>
                <th className="border border-black px-4 py-2">Ketua</th>
                <th className="border border-black px-4 py-2">Judul</th>
                <th className="border border-black px-4 py-2">Bidang Fokus</th>
                <th className="border border-black px-4 py-2">
                  Tahun Pelaksanaan
                </th>
                <th className="border border-black px-4 py-2">Peran</th>
                <th className="border border-black px-4 py-2">Status Usulan</th>
                <th className="border border-black px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.user?.name}</td>
                  <td>{item.title}</td>
                  <td>{item.focus.name}</td>
                  <td>{item.year}</td>
                  <td>{item.roles}</td>
                  <td>{item.status}</td>
                  <td className="flex space-x-2 justify-center">
                    {renderActionButton(item)}
                  </td>
                </tr>
              ))}
              <tr>
                <td>1</td>
                <td>Coba</td>
                <td>Penelitian dan Pengabdian</td>
                <td>2024</td>
                <td>-</td>
                <td>2024</td>
                <td>Perbaikan</td>
                {/* <td>
                  <button onClick={handleView}>
                    <FaEye className="py-2 w-5 h-auto z-5" />
                  </button>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsulanBaruList;
