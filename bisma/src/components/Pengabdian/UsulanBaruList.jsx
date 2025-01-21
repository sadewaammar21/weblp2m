import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { getService, deleteService } from "../../Features/ServiceSlice";

const UsulanBaruList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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

  const handleClick = () => {
    navigate("/pengabdian/usulan/baru");
  };

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      fetchData();
    } catch (err) {
      console.error(err);
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
      if (currentUserAsMember?.pivot?.status !== "pending") {
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
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/pengabdian/usulan/edit/${item.id}`)}
            className={` px-2 py-1 rounded-md text-white ${item.status !== 1 ? "hidden" : ""}`}
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
            className={` px-2 py-1 rounded-md text-white ${item.status !== 1 ? "hidden" : ""}`}
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

  return (
    <div className="mx-5">
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        USULAN PENGABDIAN
      </h1>
      {/* <ModalTerimaAnggotaPenelitian service={selectedData} userId={user.id} isOpen={isOpen} onRequestClose={closeModal}/> */}
      <div className="bg-gray-50 shadow-sm rounded-sm p-5">
        <div className="flex justify-between items-center w-full mb-4">
          <button
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300 focus:outline-none"
            onClick={handleClick}
          >
            <FaPlus className="mr-2" /> Tambah Usulan
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left bg-neutral-20 text-gray-500 border border-gray-300">
              <thead className="border-b text-xs text-gray-700 uppercase bg-gray-50 text-center">
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Ketua</th>
                  <th className="px-4 py-2">Judul</th>
                  <th className="px-4 py-2">Bidang Fokus</th>
                  <th className="px-4 py-2">Tahun Pelaksanaan</th>
                  <th className="px-4 py-2">Peran</th>
                  <th className="px-4 py-2">Status Usulan</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id} className="border-b text-center">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.user?.name}</td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2">
                      {item.focus_thematic?.name || item.focus_r_i_r_n_s?.name}
                    </td>
                    <td className="px-4 py-2">{item.year}</td>
                    <td className="px-4 py-2">
                      {user.id === item.user.id ? "Ketua" : "Anggota"}
                    </td>
                    <td className="px-4 py-2">{item.status}</td>
                    <td className="px-4 py-2 ">
                      <div className="inline-block">
                        {renderActionButton(item)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsulanBaruList;
