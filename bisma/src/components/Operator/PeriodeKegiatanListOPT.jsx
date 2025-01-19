import React, { useEffect, useState } from "react";
import DropdownCmp from "../DropdownCmp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import * as XLSX from "xlsx"; // Library for Excel
import { saveAs } from "file-saver"; // Library for saving files
import ModalPeriodeKegiatanOPT from "./ModalPeriodeKegiatanOPT";
import { deletePeriod, getAllPeriods } from "../../Features/OperatorSlice";

const PeriodeKegiatanListOPT = () => {
  const navigate = useNavigate(); 
  const [periods, setPeriods] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPeriods = async() => {
    try {
      setLoading(true);
      const response = await getAllPeriods();
      setPeriods(response);
      console.log(periods);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchPeriods();
  },[]);

  const openModalView = () => {
    setIsOpen(true);
  };

  const closeModalView = () => {
    setIsOpen(false);
    fetchPeriods();
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  const handleBack = () => {
    navigate("/monitoring/penenelitian/periode-kegiatan");
  };

  const handleDelete = async(id) => {
    const response = await deletePeriod(id);
    console.log(response);
    fetchPeriods();
  }

  if(loading){
    return <p>Loading...</p>
  }
  
  return (
    <div className="min-h-screen p-5 mx-10 my-5">
      {/* Judul Halaman */}
      <h1 className="text-xl font-bold text-violet-800">
        PENENTUAN PERIODE KEGIATAN PENELITIAN
      </h1>

      {/* Tombol Kembali */}
      <div className="flex justify-end border-b max-w-6xl mb">
        <button
          onClick={handleBack}
          className="flex items-center px-4 py-2 rounded-md border border-bluef-500 bg-bluef-500 text-white"
        >
          <FaArrowLeft className="mr-2" /> {/* Ikon panah kiri */}
          Kembali
        </button>
      </div>

      {/* Kontainer Utama */}
      <div className="bg-white max-w-6xl shadow-md rounded-md">
        <div className="mx-5 my-5">
          {/* Header dengan Tombol Ekspor dan Dropdown */}
          <div className="flex justify-end w-full items-start space-x-5 mt-5">
            <DropdownCmp
              label="Jenis Kegiatan *"
              options={options}
              selectedOption={selectedOption}
              onChange={(e) => handleDropdownChange(e.target.value)}
              placeholder="Penelitian"
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
          <div className="flex justify-end w-full items-start space-x-5 ">
            <h1 className="text-md font-bold  mb-4">{`Proposal 0`}</h1>
          </div>
          <div className="mx-5 my-5">
            <h1 className="text-md font-bold text-violet-800 mb-4">
              Rekap Usulan
            </h1>
            <button
                        className="bg-bluef-500 text-white px-4 py-2 rounded-md"
                        onClick={openModalView}
                      >
                        Tambah Periode Kegiatan
                      </button>
          </div>
          {/* Tabel */}
          <div className="overflow-x-auto mx-5 my-10">
            <table className="w-full text-sm text-left text-gray-500 border border-black">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Kegiatan</th>
                  <th className="border px-4 py-2">Periode Kegiatan Awal</th>
                  <th className="border px-4 py-2">Periode Kegiatan Akhir</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {periods.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-center">{index+1}</td>
                    <td className="border px-4 py-2 text-bluef-500">
                      {item.type}
                    </td>
                    <td className="border px-4 py-2 text-bluef-500">
                      <span className="bg-white text-bluef-500 border border-bluef-500 px-4 py-2 rounded-md">
                        Detail
                      </span>
                      <br />
                    </td>
                    <td className="border px-4 py-2">
                      <span className="bg-white text-bluef-500 border border-bluef-500 px-4 py-2 rounded-md">
                        Detail
                      </span>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <button className="text-white bg-red-700 p-2 rounded-md" onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Modal */}
        <ModalPeriodeKegiatanOPT
          isOpen={isOpen}
          onRequestClose={closeModalView}
        />
      </div>
    </div>
  );
};

export default PeriodeKegiatanListOPT;
