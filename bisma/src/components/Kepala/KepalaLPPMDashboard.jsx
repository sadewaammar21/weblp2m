import React, { useState } from "react";
import { FaBullseye, FaChartBar, FaHdd } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DropdownCmp from "../DropdownCmp";

const KepalaLPPMDashboard = () => {
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

  const metrics = [
    {
      title: "Usulan Belum Ditinjau",
      count: 0,
      icon: <FaHdd size={24} className="text-violet-800" />,
      path: "/kepala-lppm-usulan-belum-ditinjau",
    },
    {
      title: "Usulan Disetujui",
      count: 1,
      icon: <FaBullseye size={24} className="text-violet-800" />,
      path: "/kepala-lppm-usulan-disetujui",
    },
    {
      title: "Usulan Ditolak",
      count: 0,
      icon: <FaChartBar size={24} className="text-violet-800" />,
      path: "/kepala-lppm-usulan-ditolak",
    },
  ];
  return (
    <div className="mx-10 my-10">
      <div>
        <h2 className="text-violet-800 font-bold text-lg mb-4">
          DASHBOARD LPPM
        </h2>
      </div>
      <div className="flex justify-end items-start space-x-5">
        <DropdownCmp
          label="Program Hibah *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
          placeholder="Penelitian Kompetitif Nasional"
          className="w-72 border border-black " // Panjang dropdown
          controlClassName="bg-neutral-30 text-black"
        />
        <DropdownCmp
          label="Jenis Kegiatan *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
          placeholder="Penelitian"
          className="w-72 border border-black" // Panjang dropdown
          controlClassName="bg-neutral-30 text-black"
        />
      </div>

      {/* Baris Kedua */}
      <div className="flex justify-end items-start space-x-5 my-5">
        <DropdownCmp
          label="Tahun Usulan *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
          placeholder="2023"
          className="w-72 border border-black" // Panjang dropdown
          controlClassName="bg-neutral-30 text-black"
        />
        <DropdownCmp
          label="Tahun Pelaksanaan *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}
          placeholder="2024"
          className="w-72 border border-black" // Panjang dropdown
          controlClassName="bg-neutral-30 text-black"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 my-10">
        {metrics.map((metric, index) => (
          <div
            key={index}
            onClick={() => navigate(metric.path)} // Navigasi ke halaman tertentu
            className="bg-gray-100 rounded-lg shadow-lg p-5 flex flex-col items-center text-center cursor-pointer hover:bg-gray-200"
          >
            {metric.icon}
            <p className="text-violet-800 font-semibold mt-2">{metric.title}</p>
            <p className="text-3xl font-bold text-violet-800">{metric.count}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-violet-800 font-bold text-lg mb-4">REKAP USULAN</h2>
      </div>
      <div className="relative overflow-x-auto my-10 max-h-96 overflow-y-auto">
        <table className="w-full text-sm text-center text-gray-500 border border-black">
          <thead className="bg-neutral-30 text-xs text-gray-700 uppercase">
            <tr>
              <th className="border border-black px-4 py-2">Nama Skema</th>
              <th className="border border-black px-4 py-2">
                Usulan Belum Ditinjau
              </th>
              <th className="border border-black px-4 py-2">
                Usulan Sudah Disetujui
              </th>
              <th className="border border-black px-4 py-2">
                Usulan Sudah Ditolak
              </th>
            </tr>
          </thead>
          <tbody className="bg-neutral-30 text-xs text-gray-700 text-center uppercase">
            <tr>
              <td className="border border-black px-4 py-2">
                Penelitian Dasar-Penelitian Dosen Pemula
              </td>
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

export default KepalaLPPMDashboard;
