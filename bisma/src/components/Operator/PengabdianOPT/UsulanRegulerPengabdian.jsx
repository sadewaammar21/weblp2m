import React, { useState } from "react";
import DropdownCmp from "../../DropdownCmp";
import {
  FaBullseye,
  FaFileAlt,
  FaHdd,
  FaChartBar,
  FaRegBookmark,
  FaRecycle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UsulanRegulerPengabdian = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  const [year, setYear] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [prohibs, setProhibs] = useState(null);
  const [jenisKegiatan, setJenisKegiatan] = useState(null);

  const optionsJenisKegiatan = [
    { label: "Penelitian", value: "Penelitian" },
    { label: "Pengabdian", value: "Pengabdian" },
  ];

  const Years = [
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
  ];

  const startYears = [
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
  ];

  const ProHib = [
    {
      label: "Penelitian Kompetitif Nasional",
      value: "Penelitian Kompetitif Nasional",
    },
  ];
  const user = JSON.parse(localStorage.getItem("user"));
  const metrics = [
    {
      title: "Usulan Draft",
      count: 1,
      icon: <FaFileAlt size={24} />,
      path: "/monitoring/pengabdian/usulan-draft",
    },
    {
      title: "Usulan Dikirim",
      count: 0,
      icon: <FaRegBookmark size={24} />,
      path: "/monitoring/pengabdian/usulan-dikirm",
    },
    {
      title: "Usulan Belum Ditinjau",
      count: 0,
      icon: <FaHdd size={24} />,
      path: "/monitoring/pengabdian/belum-ditinjau-review",
    },
    {
      title: "Usulan Disetujui",
      count: 0,
      icon: <FaBullseye size={24} />,
      path: "/monitoring/pengabdian/usulan-disetujui",
    },
    {
      title: "Usulan Ditolak",
      count: 0,
      icon: <FaChartBar size={24} />,
      path: "/monitoring/pengabdian/usulan-ditolak",
    },
    {
      title: "Hasil Review",
      count: 0,
      icon: <FaRecycle size={24} />,
      path: "/monitoring/pengabdian/hasil-review",
    },
  ];

  return (
    <div className="mx-10 my-10">
      <div>
        <h2 className="text-violet-800 font-bold text-lg mb-4">
          USULAN BARU OPT PT
        </h2>
      </div>
      <div className="flex justify-end items-start space-x-5">
        <DropdownCmp
          label="Program Hibah *"
          options={ProHib}
          selectedOption={ProHib.find((opt) => opt.value === prohibs)}
          onChange={(selected) => setProhibs(selected.value)}
          placeholder="Pilih Program Hibah"
          className="w-72 border border-black"
        />
        {/* <DropdownCmp
          label="Jenis Kegiatan *"
          options={optionsJenisKegiatan}
          selectedOption={optionsJenisKegiatan.find(
            (opt) => opt.value === jenisKegiatan
          )}
          onChange={(selected) => setProhibs(selected.value)}
          className="w-72 border border-black"
        /> */}
      </div>

      {/* Baris Kedua */}
      <div className="flex justify-end items-start space-x-5 my-5">
        <DropdownCmp
          label="Tahun Usulan *"
          options={Years}
          selectedOption={Years.find((opt) => opt.value === year)}
          onChange={(selected) => setYear(selected.value)}
          placeholder="Pilih Tahun Usulan"
          className="w-72 border border-black"
        />
        <DropdownCmp
          label="Tahun Pelaksanaan *"
          options={startYears}
          selectedOption={startYears.find((opt) => opt.value === startYear)}
          onChange={(selected) => setStartYear(selected.value)}
          placeholder="Pilih Tahun Pelaksanaan"
          className="w-72 border border-black"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 my-10">
        {metrics.map((metric, index) => (
          <div
            key={index}
            onClick={() => navigate(metric.path)} // Navigasi ke halaman tertentu
            className="bg-gray-100 rounded-lg shadow-lg p-5 flex flex-col items-center text-center cursor-pointer hover:bg-gray-200"
          >
            <div className="bg-violet-800 rounded-full p-4 flex items-center justify-center mb-3">
              {/* Pastikan ikon memiliki ukuran sesuai */}
              <div className="text-white w-6 h-6">{metric.icon}</div>
            </div>
            <p className="text-violet-800 font-semibold mt-2">{metric.title}</p>
            <p className="text-3xl font-bold text-violet-800">{metric.count}</p>
          </div>
        ))}
      </div>
      <div className="relative overflow-x-auto my-10 max-h-96 overflow-y-auto">
        <table className="w-full text-sm text-center text-gray-500 border border-black">
          <thead className="bg-neutral-30 text-xs text-gray-700 uppercase">
            <tr>
              <th className="border border-black px-4 py-2">Nama Skema</th>
              <th className="border border-black px-4 py-2">Usulan Draft</th>
              <th className="border border-black px-4 py-2">Dikirim</th>
              <th className="border border-black px-4 py-2">Belum Ditinjau</th>
              <th className="border border-black px-4 py-2">Disetujui</th>
              <th className="border border-black px-4 py-2">Ditolak</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-30 text-xs text-gray-700 text-center uppercase">
            <tr>
              <td className="border border-black px-4 py-2">
                Penelitian Dasar-Penelitian Dosen Pemula
              </td>
              <td className="border border-black px-4 py-2">1</td>
              <td className="border border-black px-4 py-2">0</td>
              <td className="border border-black px-4 py-2">0</td>
              <td className="border border-black px-4 py-2">1</td>
              <td className="border border-black px-4 py-2">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsulanRegulerPengabdian;
