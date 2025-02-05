import React, { useEffect, useState } from "react";
import DropdownCmp from "../../DropdownCmp";
import { getService } from "../../../Features/ServiceSlice";
import { FaPlus, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ListCatatanHarian = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Hook untuk navigasi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleView = (id) => {
    navigate(`/pengabdian/catatan-harian/${id}`); // Arahkan ke halaman 'usulan-baru-penelitian'
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
      // console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-5">
      {/* Bagian Usulan Penelitian tidak dimasukkan ke dalam card */}
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          CATATAN HARIAN PENGABDIAN
        </h1>
      </div>

      {/* Card untuk bagian Tambah Usulan dan Tabel */}
      <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 ">
        <div className="flex justify-end items-center w-full">
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
        <div className="relative overflow-x-auto my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="border border-black px-4 py-2 align-middle">
                  No
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Skema
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Tahun
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Judul
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Keterangan
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2 align-middle">
                    {index + 1}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle break-words">
                    {item.scheme.name}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle">
                    {item.year}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle break-words">
                    {item.title}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle break-words">
                    Informasi terkait penelitian ini disediakan pada kolom
                    berikut.
                  </td>
                  <td className="border border-black px-2 py-2 align-middle flex justify-center items-center w-20">
                    <button
                      onClick={() => handleView(item.id)}
                      className="flex items-center px-1 py-1 rounded-md hover:text-cyan-500"
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                        alt="penelitian"
                        className="w-7 h-7 mr-2"
                      />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="border border-black px-4 py-2 align-middle">
                  <button
                    onClick={handleView}
                    className="flex items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="penelitian"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListCatatanHarian;
