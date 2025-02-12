import React, { useState, useEffect } from "react";
import axios from "axios";
import DropdownCmp from "../../DropdownCmp";
import TextfieldCmp from "../../TextfieldCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLessThan } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver";
import {
  getResearch,
  downloadResearchDocument,
} from "../../../Features/ResearchSlice";

const UsulanDisetujuiKpr = () => {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parseUser = JSON.parse(user);
    const fetchData = async () => {
      try {
        const result = await getResearch({
          page_size: 5,
          current_page: 1,
          status: 6,
        });
        setData(result.data);
        console.log(result);
        console.log(data);
        console.log(typeof data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen p-5 mx-10 my-5">
      <h1 className="text-xl font-bold text-violet-800 mb-4">
        LIST USULAN DISETUJUI KAPRODI
      </h1>

      <div>
        <div className="w-full flex justify-end border-b max-w-[1150px] mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 rounded-md border border-bluef-500 bg-bluef-500 text-white 
    hover:bg-white hover:text-bluef-500"
          >
            <FaLessThan className="mr-2" />
            Kembali
          </button>
        </div>

        <div className="bg-white max-w-6xl mx-auto shadow-md rounded-md">
          <div className="flex justify-between mx-5 ">
            <div className="mx-2 my-2">
              <button
                // onClick={handleExportExcel}
                className="flex items-center px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/icon_excel.svg"}
                  alt="penelitian"
                  className="w-5 h-5 mr-2"
                />
                Excel
              </button>
            </div>
            <div className="mx-2 my-2">
              <DropdownCmp
                // options={options}
                selectedOption={selectedOption}
                onChange={(e) => handleDropdownChange(e.target.value)}
                placeholder="Jumlah Baris"
                className=" border border-black "
                controlClassName="bg-white text-black"
              />
            </div>
          </div>
          <div className="mx-5 my-5">
            <TextfieldCmp
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Cari Berdasarkan Judul"
              width="w-64 p-2"
            />
          </div>
          {/* Tabel */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 border border-black">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr className="text-center">
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Pengusul</th>
                  <th className="border px-4 py-2">Usulan-Pengusul</th>
                  <th className="border px-4 py-2">Berkas</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => item.status == 6)
                  .map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <p>Ketua: {item.user?.name}</p>
                        <p>NIDN: {item.user?.nidn}</p>
                        <p>Tahun Pelaksanaan: {item.year}</p>
                        <p>Lama Kegiatan: {item.duration}</p>
                        <p>Bidang Fokus: {item.focus.name}</p>
                      </td>
                      <td className="border border-gray-300 p-2">
                        <p className="text-blue-600 font-bold">{item.title}</p>
                        <p className="text-blue-600 font-bold">
                          {item.scheme.name}
                        </p>
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        <button
                          onClick={() => downloadResearchDocument(item.id)}
                          className="text-red-600 text-2xl"
                        >
                          <a
                            href={`http://localhost:8000/api/research/download/${item.id}`}
                            target="_blank"
                          >
                            📄
                          </a>
                        </button>
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        <p className="text-white bg-green-600 p-2 rounded-md">
                          Disetujui
                        </p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsulanDisetujuiKpr;
