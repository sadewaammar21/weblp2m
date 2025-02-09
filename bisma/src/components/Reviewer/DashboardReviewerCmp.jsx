import React, { useState } from "react";
import DropdownCmp from "../DropdownCmp";
import {
  FaBullseye,
  FaFileAlt,
  FaHdd,
  FaChartBar,
  FaRegBookmark,
  FaRecycle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardReviewerCmp = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [jenisKegiatan, setJenisKegiatan] = useState("Penelitian");

  const optionsJenisKegiatan = [
    { label: "Penelitian", value: "Penelitian" },
    { label: "Pengabdian", value: "Pengabdian" },
  ];
  const metriks =
    jenisKegiatan === "Penelitian"
      ? [
          {
            title: "Penilaian Proposal Penelitian",
            count: 2,
            icon: <FaHdd size={24} className="text-white" />,
            path: "/review-penilaian-proposal-penelitian",
          },
          {
            title: "Monitoring dan Evaluasi Penelitian",
            count: 1,
            icon: <FaBullseye size={24} className="text-white" />,
            path: "/review-monitoring-penelitian",
          },
        ]
      : [
          {
            title: "Penilaian Proposal Pengabdian",
            count: 3,
            icon: <FaHdd size={24} className="ext-white" />,
            path: "/review/penilaian-proposal-pengabdian",
          },
          {
            title: "Monitoring dan Evaluasi Pengabdian",
            count: 1,
            icon: <FaBullseye size={24} className="text-white" />,
            path: "/pengabdian/monev",
          },
        ];

  // Data tabel berdasarkan jenis kegiatan
  const tabelData =
    jenisKegiatan === "Penelitian"
      ? [
          {
            namaSkema: "Penelitian Dasar-Penelitian Dosen Pemula",
            penilaianProposal: 2,
            monitoringEvaluasi: 1,
          },
          {
            namaSkema: "Penelitian Terapan",
            penilaianProposal: 1,
            monitoringEvaluasi: 0,
          },
        ]
      : [
          {
            namaSkema: "Pengabdian kepada Masyarakat",
            penilaianProposal: 3,
            monitoringEvaluasi: 1,
          },
          {
            namaSkema: "Program Kemitraan Masyarakat",
            penilaianProposal: 2,
            monitoringEvaluasi: 1,
          },
        ];

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
      title: "Penilaian Proposal",
      count: 0,
      icon: <FaHdd size={24} className="text-violet-800" />,
      path: "/review-penilaian-proposal",
    },
    {
      title: "Monitoring dan Evaluasi",
      count: 0,
      icon: <FaBullseye size={24} className="text-violet-800" />,
      path: "/review-usulan-sudah-dinilai-penelitian",
    },
  ];

  return (
    <div className="mx-10 my-10">
      <div>
        <h2 className="text-violet-800 font-bold text-lg mb-4">
          DASHBOARD REVIEWER
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
          options={optionsJenisKegiatan}
          selectedOption={jenisKegiatan}
          onChange={(selected) => setJenisKegiatan(selected.value)} // Fix error
          className="w-72 border border-black"
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
        {metriks.map((metric, index) => (
          <div
            key={index}
            onClick={() => navigate(metric.path)}
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

      {/* Tabel Rekap Usulan */}
      <h2 className="text-violet-800 font-bold text-lg mb-4">REKAP USULAN</h2>
      <div className="relative overflow-x-auto my-10 max-h-96 overflow-y-auto">
        <table className="w-full text-sm text-center text-gray-500 border border-black">
          <thead className="bg-neutral-30 text-xs text-gray-700 uppercase">
            <tr>
              <th className="border border-black px-4 py-2">Nama Skema</th>
              <th className="border border-black px-4 py-2">
                Penilaian Proposal
              </th>
              <th className="border border-black px-4 py-2">
                Monitoring dan Evaluasi
              </th>
            </tr>
          </thead>
          <tbody className="bg-neutral-30 text-xs text-gray-700 text-center uppercase">
            {tabelData.map((row, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">
                  {row.namaSkema}
                </td>
                <td className="border border-black px-4 py-2">
                  {row.penilaianProposal}
                </td>
                <td className="border border-black px-4 py-2">
                  {row.monitoringEvaluasi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardReviewerCmp;
