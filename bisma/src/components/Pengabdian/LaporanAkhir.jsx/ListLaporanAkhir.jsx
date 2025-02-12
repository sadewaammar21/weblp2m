import React, { useEffect, useState } from "react";
// import DropdownCmp from "../../components/DropdownCmp";
// import { getResearch } from "../../Features/ResearchSlice";
import { FaPlus, FaPen } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { getService } from "../../../Features/ServiceSlice";
import { toast, ToastContainer } from "react-toastify";

const ListLaporanAkhir = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Hook untuk navigasi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const handleView = (serviceId, report) => {
    console.log(report);
    if (report != null) {
      navigate("/pengabdian/laporan-akhir/edit", {
        state: { id: serviceId, reportId: report },
      });
    } else {
      navigate("/pengabdian/laporan-akhir/baru", {
        state: { id: serviceId, reportId: null },
      }); // Arahkan ke halaman 'usulan-baru-penelitian'
    } // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const handleClick = () => {
    navigate("/pengabdian/laporan-akhir/baru"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  useEffect(() => {
    if (location.state?.toastMessage) {
      if (location.state.toastType === "success") {
        toast.success(location.state.toastMessage);
      }
    }
  }, [location.state]);

  const user = JSON.parse(localStorage.getItem("user"));
  const fetchData = async () => {
    try {
      const result = await getService({
        pageSize: 5,
        currentPage: 1,
        status: 10,
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

  return (
    <div className="mx-5">
      {/* Bagian Usulan Penelitian tidak dimasukkan ke dalam card */}
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          LAPORAN AKHIR PENGABDIAN
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
                    {index + 1}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle break-words">
                    {item.scheme.name}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle break-words">
                    {item.title}
                  </td>
                  <td className="border border-black px-4 py-2 align-middle">
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
                      onClick={() =>
                        handleView(
                          item.id,
                          item.serviceFinalReport[0]
                            ? item.serviceFinalReport[0].id
                            : null
                        )
                      }
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
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </div>
  );
};

export default ListLaporanAkhir;
