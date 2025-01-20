import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { getService, deleteService } from "../../Features/ServiceSlice";

const user = JSON.parse(localStorage.getItem("user"));

const UsulanBaruList = () => {
   const [data, setData] = useState([]);
    const navigate = useNavigate(); // Hook untuk navigasi
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedData, setSelectedData] = useState('');
  
    const handleClick = () => {
      navigate("/pengabdian/usulan/baru"); // Arahkan ke halaman 'usulan-baru-penelitian'
    };
  
    const user = JSON.parse(localStorage.getItem("user"));
    const fetchData = async () => {
      try {
        const result = await getService({
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
      const response = await deleteService(id);
      console.log(response);
      fetchData();
    };
  
    const openModal = (id) => {
      setSelectedData(id)
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
      fetchData();
    };
  
    const renderActionButton = (item) => {
      if (item.user.id !== user.id) {
        const currentUserAsMember = item.members.find((member) => member.id === user.id);
        if(currentUserAsMember.pivot.status !== "pending"){
          return(
            <p>
              {currentUserAsMember.pivot.status}
            </p>
          )
        }else{
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
              onClick={() => navigate(`/pengabdian/usulan/edit/${item.id}`)}
              className={`bg-blue-500 px-2 py-1 rounded-md text-white ${item.status != 1 ? 'hidden': ''}`}
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
  
    // if(loading){
    //   return <p>Loading...</p>
    // }

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
              <thead className="border-b text-xs text-gray-700 uppercase bg-gray-50">
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
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.user?.name}</td>
                  <td>{item.title}</td>
                  <td>{item.focus_thematic.name || item.focus_r_i_r_n_s.name}</td>
                  <td>{item.year}</td>
                  <td>{user.id === item.user.id ? "Ketua" : "Anggota"}</td>
                  <td>{item.status}</td>
                  <td className="flex space-x-2 justify-center">
                    {renderActionButton(item)}
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
