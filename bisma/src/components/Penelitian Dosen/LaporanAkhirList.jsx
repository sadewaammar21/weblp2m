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

  const handleView = (researchId, report) => {
    console.log(report)
    if(report != null){
      navigate("/penelitian/laporan-akhir/edit", { state: { id: researchId, reportId: report } })
    }else{
      navigate("/penelitian/laporan-akhir/baru", { state: { id: researchId, reportId: null } }); // Arahkan ke halaman 'usulan-baru-penelitian'
    }
  };

  const handleClick = () => {
    navigate("/penelitian/laporan-akhir"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const user = JSON.parse(localStorage.getItem('user'));
    const fetchData = async () => {
      try {
        const result = await getResearch({
          pageSize: 5,
          currentPage: 1,
          status: 12,
          // year: 2025,
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
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2 align-middle">
                    {index+1}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle break-words">
                    {item.scheme.name}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle break-words">
                    {item.title}
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
                      onClick={() => handleView(item.id, item.finalReport[0] ? item.finalReport[0].id : null )}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LaporanAkhirList;
