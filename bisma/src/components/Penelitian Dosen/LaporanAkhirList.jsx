import React, { useEffect, useState } from "react";
import DropdownCmp from "../DropdownCmp";
import { getResearch } from "../../Features/ResearchSlice";
import { FaPlus, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LaporanAkhirList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Hook untuk navigasi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleView = () => {
    navigate("/catatan-harian-view"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const handleClick = () => {
    navigate("/laporan-akhir-progres"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const result = await getResearch({
  //           pageSize: 5,
  //           currentPage: 1,
  //           status: 1,
  //           year: 2024,
  //           userId: 1,
  //         });
  //         setData(result.data);
  //       } catch (err) {
  //         setError(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div className="mx-5">
      {/* Bagian Usulan Penelitian tidak dimasukkan ke dalam card */}
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          LAPORAN AKHIR
        </h1>
      </div>

      {/* Card untuk bagian Tambah Usulan dan Tabel */}
      <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 mx-10 my-10">
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
        <div className="relative overflow-x-auto my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="border border-black px-4 py-2 align-middle">
                  No
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Program
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Judul
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Berkas
                </th>
                <th className="border border-black px-4 py-2 align-middle">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2 align-middle">
                  1
                </td>
                <td className="border border-black px-4 py-2 align-middle break-words">
                  Penelitian Fundamental - Reguler Penelitian Kompetitif
                  Nasional
                </td>
                <td className="border border-black px-4 py-2 align-middle break-words">
                  Pengembangan Aplikasi untuk Optimalisasi Pembelajaran
                </td>
                <td className="flex items-center border border-black px-4 py-2 align-middle  break-words">
                  <a
                    href={
                      process.env.PUBLIC_URL +
                      "/assets/template_laporan_kemajuan 2024.docx"
                    }
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/berkas.svg"}
                      alt="logo"
                      className="w-5 h-5 mr-2"
                    />
                  </a>
                </td>
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

export default LaporanAkhirList;
