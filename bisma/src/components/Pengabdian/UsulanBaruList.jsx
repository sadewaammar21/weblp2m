import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { getService, deleteService } from "../../Features/ServiceSlice";

const UsulanBaruList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {
    navigate("/pengabdian/usulan/baru");
  };

  const fetchData = async () => {
    try {
      const result = await getService({
        pageSize: 5,
        currentPage: 1,
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
    try {
      await deleteService(id);
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
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
          <button
            onClick={() => openModal(item.id)}
            className="bg-blue-500 px-2 py-1 rounded-md text-white"
          >
            Action
          </button>
        );
      }
    } else {
      return (
        <div className="space-x-2">
          <button
            onClick={() => navigate(`/pengabdian/usulan/edit/${item.id}`)}
            className={`bg-blue-500 px-2 py-1 rounded-md text-white ${
              item.status !== 1 ? "hidden" : ""
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => navigate(`/penelitian/detail/${item.id}`)}
            className="bg-blue-500 px-2 py-1 rounded-md text-white"
          >
            Detail
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className={`bg-red-500 px-2 py-1 rounded-md text-white ${
              item.status !== 1 ? "hidden" : ""
            }`}
          >
            Delete
          </button>
        </div>
      );
    }
  };

  return (
    <div className="mx-5">
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        USULAN PENGABDIAN
      </h1>
      <div className="bg-gray-50 shadow-sm rounded-sm p-5">
        <div className="flex justify-between items-center w-full mb-4">
          <button
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300 focus:outline-none"
            onClick={handleClick}
          >
            <FaPlus className="mr-2" /> Tambah Usulan
          </button>
        </div>
        <div className="relative overflow-x-auto my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
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
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-red-500">
                    {error}
                  </td>
                </tr>
              ) : data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.user?.name}</td>
                    <td>{item.title}</td>
                    <td>
                      {item.focus_thematic.name || item.focus_r_i_r_n_s.name}
                    </td>
                    <td>{item.year}</td>
                    <td>{user.id === item.user.id ? "Ketua" : "Anggota"}</td>
                    <td>{item.status}</td>
                    <td>{renderActionButton(item)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsulanBaruList;
