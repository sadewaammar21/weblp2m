import React, { useState } from 'react';
import DropdownCmp from '../DropdownCmp';
import TextfieldCmp from '../TextfieldCmp';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as XLSX from 'xlsx'; // Library for Excel
import { saveAs } from 'file-saver';

const UsulanBelumDitinjauOPT = () => {
    const navigate = useNavigate();
    const [judul, setJudul] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleDropdownChange = (option) => {
      setSelectedOption(option);
    };
  
  //   const handleInputChange = (setter) => (e) => {
  //     setter(e.target.value);
  //   };
  
    // Fungsi untuk ekspor data ke Excel
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
  
    // Fungsi untuk kembali ke halaman sebelumnya
    const handleBack = () => {
      navigate('/monitoring-usulan-reguler');
    };
  
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ];
  return (
    <div className="min-h-screen p-5 mx-10 my-5">
    {/* Judul Halaman */}
    <h1 className="text-xl font-bold text-violet-800 mb-4">
      LIST USULAN BELUM DITINJAU MONITORING
    </h1>
  
    {/* Tombol Kembali */}
    <div className="flex justify-end border-b max-w-6xl ">
      <button
        onClick={handleBack}
        className="flex items-center px-4 py-2 rounded-md border border-bluef-500 bg-bluef-500 text-white"
      >
        <FaArrowLeft className="mr-2" /> {/* Ikon panah kiri */}
        Kembali
      </button>
    </div>
  
    {/* Kontainer Utama */}
    <div className="bg-white max-w-6xl mx-auto shadow-md rounded-md">
      {/* Header dengan Tombol Ekspor dan Dropdown */}
      <div className="flex justify-between mx-5 py-4">
        {/* Tombol Ekspor ke Excel */}
        <div className="mx-2">
          <button
            onClick={handleExportExcel}
            className="flex items-center px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <img
              src={process.env.PUBLIC_URL + '/assets/icon_excel.svg'}
              alt="penelitian"
              className="w-5 h-5 mr-2"
            />
            Excel
          </button>
        </div>
  
        {/* Dropdown */}
        <div className="mx-2">
          <DropdownCmp
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
            placeholder="Jumlah Baris"
            className="border border-black"
            controlClassName="bg-white text-black"
          />
        </div>
      </div>
  
      {/* Input Pencarian */}
      <div className="mx-5 my-5">
        <TextfieldCmp
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          placeholder="Cari Berdasarkan Judul"
          width="w-64 p-2"
        />
      </div>
    </div>
  </div>
  
    
  )
}

export default UsulanBelumDitinjauOPT