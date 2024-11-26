// import axios from 'axios';
import React, {useState,useEffect} from 'react';
// import { FaPlus, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../Features/AuthSlice';
import { Link } from 'react-router-dom';
// import { getResearch } from '../../Features/ResearchSlice';

const PerbaikanUsulanList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/perbaikan-usulan-penelitian'); // Arahkan ke halaman 'usulan-baru-penelitian'
  };


    return (
        <div className='mx-5'>
      {/* Bagian Usulan Penelitian tidak dimasukkan ke dalam card */}
        <div>
        <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>USULAN PENELITIAN</h1>
        </div>

      {/* Card untuk bagian Tambah Usulan dan Tabel */}
        <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 ">
        

        {/* Tabel */}
        <div className="relative overflow-x-auto my-10 max-h-96 overflow-y-auto">
        
            <table className="w-full text-sm text-center text-gray-500 border border-gray-300">
              <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Skema</th>
                  <th className="border px-4 py-2">Judul</th>
                  <th className="border px-4 py-2">Tahun</th>
                  <th className="border px-4 py-2">Dana Disetujui</th>
                  <th className="border px-4 py-2">Dokumen</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>1</td>
                    <td>Coba</td>
                    <td>Penelitian dan Pengabdian</td>
                    <td>2024</td>
                    <td>-</td>
                    <td>2024</td>
                    <td>Perbaikan</td>
                    <td>
                            <button onClick={handleClick}>
                                <img 
                                    src="/assets/edit_perusl.svg"
                                    alt="Action Icon"
                                    className="py-2 w-10 h-auto z-10"
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
}


export default PerbaikanUsulanList