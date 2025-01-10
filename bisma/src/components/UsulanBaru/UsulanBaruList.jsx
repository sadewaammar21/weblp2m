import React, { useEffect, useState } from "react";
import DropdownCmp from "../DropdownCmp";
import { deleteResearch, getResearch } from "../../Features/ResearchSlice";
import { FaPlus, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UsulanBaruList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Hook untuk navigasi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
                  <td>
                    <button
                      onClick={() =>
                        navigate(`/penelitian/usulan/edit/${item.id}`)
                      }
                      className="bg-blue-500 px-2 py-1 rounded-md text-white"
                    >
                      edit
                    </button>
                    <button
                      onClick={() =>
                        navigate(`/penelitian/usulan/edit/${item.id}`)
                      }
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
