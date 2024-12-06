import React, { useState } from "react";
import { FaArrowLeft, FaPen, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PopUpTambahCatatanHarian from "./PopUpTambahCatatanHarian";
import PopUpEditCatatanHarian from "./PopUpEditCatataHarian";


const ViewCatatanHarianpnt = () => {
  const [isOpenTambah, setIsOpenTambah] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const openModalTambah = () => {
    setIsOpenTambah(true);
  };

  const closeModalTambah = () => {
    setIsOpenTambah(false);
  };

  const openModalEdit = () => {
    setIsOpenEdit(true);
  };

  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/catatan-harian');
      };
  return (
    <div className="mx-10 my-10">
        <div className="bg-blue-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
            {/* Icon */}
            

            {/* Content */}
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa Inggris
                Berbasis Digital Visual Literacy dan Keterampilan 5C untuk Siswa
                Sekolah Dasar
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Penelitian Fundamental - Reguler Penelitian Kompetitif Nasional -
                Reguler | Thn Usulan 2024 | Thn. Pelaksanaan 2024
              </p>
            </div>
          </div>
    <div>
      <div className="container ">
        <div className="bg-gray-50 shadow-sm rounded-md p-5 mx-5 my-5">
        <div className="flex justify-between items-center w-full">
          <div>
          <button
        onClick={handleBack}
        className="flex items-center px-4 py-2 rounded-md border border-bluef-500 text-bluef-500 bg-white hover:bg-bluef-500 hover:text-white"
      >
        <FaArrowLeft className="mr-2" /> {/* Ikon panah kiri */}
        Kembali
      </button>
      </div>
          <div>
            <h1>Pilih Bulan</h1>
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
        <div className="mt-7">
          <button
            className="flex items-center px-2 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={openModalTambah}
          >
            <FaPlus className="mr-2" /> {/* Icon tambah */}
            Tambah
          </button>
        </div>
            {/* Tabel */}
<div className="relative overflow-x-auto my-10">
  <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
    <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th className="border border-black px-4 py-2 align-middle">No</th>
        <th className="border border-black px-4 py-2 align-middle">Tanggal</th>
        <th className="border border-black px-4 py-2 align-middle">Kegiatan</th>
        <th className="border border-black px-4 py-2 align-middle">Persentase</th>
        <th className="border border-black px-4 py-2 align-middle">Total Berkas</th>
        <th className="border border-black px-4 py-2 align-middle">Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-black px-4 py-2 align-middle">1</td>
        <td className="border border-black px-4 py-2 align-middle">
          Penelitian Fundamental - Reguler Penelitian Kompetitif Nasional
        </td>
        <td className="border border-black px-4 py-2 align-middle"></td>
        <td className="border border-black px-4 py-2 align-middle"></td>
        <td className="border border-black px-4 py-2 align-middle"></td>
        <td className="border border-black px-4 py-2 align-middle">
          <div className="flex justify-center items-center space-x">
            <button onClick={openModalEdit} className="flex items-center px-2 py-1 rounded-md">
              <img
                src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                alt="edit"
                className="w-7 h-7"
              />
            </button>
            <button className="flex items-center px-2 py-1 rounded-md">
              <img
                src={process.env.PUBLIC_URL + "/assets/act_remove.svg"}
                alt="remove"
                className="w-7 h-7"
              />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<PopUpTambahCatatanHarian isOpen={isOpenTambah} onRequestClose={closeModalTambah}/>
<PopUpEditCatatanHarian isOpen={isOpenEdit} onRequestClose={closeModalEdit}/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewCatatanHarianpnt;
