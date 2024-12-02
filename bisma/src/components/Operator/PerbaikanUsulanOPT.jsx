import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownCmp from '../DropdownCmp';
import * as XLSX from 'xlsx'; // Library for Excel
import { saveAs } from 'file-saver';

const PerbaikanUsulanOPT = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleExportExcel = () => {
        const tableData = [
          ['No', 'Pengusul', 'Skema', 'Judul', 'Berkas'],
          [
            '1',
            `Ketua: SRI HARJANTO
            NIDN: 0626016803
            Tahun Pelaksanaan: 2024
            Lama Kegiatan: 1 Tahun
            Bidang Fokus: Teknologi Informasi dan Komunikasi`,
            'Penelitian Dasar - Penelitian Dosen Pemula',
            'Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa Inggris Berbasis Digital Visual Literacy dan Keterampilan 5C untuk Siswa Sekolah Dasar',
            '-',
          ],
        ];
    
        // Membuat worksheet dan workbook
        const worksheet = XLSX.utils.aoa_to_sheet(tableData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data Usulan Draft');
    
        // Menyimpan file Excel
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(data, 'UsulanDraftMonitoring.xlsx');
      };

  // Options untuk dropdown
    const handleDropdownChange = (value) => {
        setSelectedOption(value); // Update the selected option
    if (value === "penelitian") {
        navigate("/monitoring-perbaikan-usulan-penelitian");
    } else if (value === "pengabdian") {
        navigate("/monitoring-perbaikan-usulan-pengabdian");
    }
    };

    const options = [
    { label: "Penelitian", value: "penelitian" },
    { label: "Pengabdian", value: "pengabdian" }
    ];
    return (
    <div className='mx-10 my-5'>
        <div>
        <h2 className="text-violet-800 font-bold text-lg mb-4">
                PERBAIKAN USULAN
            </h2>
        </div>
        <div className="flex justify-end items-start mb-4">
  <DropdownCmp
    label="Jenis Kegiatan"
    options={options}
    selectedOption={selectedOption}
    onChange={handleDropdownChange}
    placeholder="Pilih Jenis Kegiatan"
    className="w-72 border border-black" // Panjang dropdown
    controlClassName="bg-neutral-30 text-black"
  />
</div>
        <div>
        <div className='flex justify-between my-5'>
  <div className="mx-2">
          <button
            onClick={handleExportExcel}
            className="flex items-center px-2 py-1 bg-bluef-500 text-white rounded-md hover:bg-green-600"
          >
            <img
              src={process.env.PUBLIC_URL + '/assets/icon_excel.svg'}
              alt="penelitian"
              className="w-5 h-5 mr-2"
            />
            Excel
          </button>
        </div>
        <div>
            <h2 className='text-bluef-600'>Jumlah Proposal : 0</h2>
        </div>

  </div>
        </div>
        <div className='my-10'>
        <h2 className="text-violet-800 font-bold text-sm mb-4">
                Daftar Usulan
            </h2>
        </div>
        <div>
        <table className="w-full border-collapse border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Usulan</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
                No Data
            </tr>
          </tbody>
        </table>
        </div>
    </div>
    
  )
}

export default PerbaikanUsulanOPT