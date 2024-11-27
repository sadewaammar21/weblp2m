import React from 'react'

const KonfirmasiUsulan = () => {
  return (
    <div className='px-10'>
      <div className=''>
        <div className='p-4 bg-violet-100 w-full rounded-md '>
        <div className='flex'>
        <img 
          src={process.env.PUBLIC_URL + "/assets/information.svg"} 
          alt="logo" 
          className="w-6 h-6 mr-4 "  
          />
          <h2 className='text-md font-bold text-violet-800'> Informasi</h2>
        </div>
        <div className='my-2 flex'>
        <h2 className='text-sm font-sans text-violet-800 mr-1'> Anda belum bisa melakukan submit usulan, 
          status keanggotaan belum semuanya menyutujui!</h2>
        </div>
        </div>
        <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>TES USULAN PENELITIAN </h1>
        </div>
        <div className='flex justify-between'>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
              TKT Saat Ini
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">2</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
              Target Akhir TKT
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">3</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Kelompok Skema
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">Riset Dasar</td>
          </tr>

          <tr className="bg-gray-50">
          <td className="px-6 py-4 text-sm font-sans ">
            Ruang Lingkup
          </td>
          <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
            Penelitian Kompetitif Nasional – Penelitian Fundamental–Reguler
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Kategori SBK
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
              SBK Riset Dasar
            </td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Bidang Fokus Penelitian
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">Energi</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Prioritas Riset
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
              Green Economy
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
      {/* pembatas tabel */}

    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
              Rumpun Ilmu Level 3
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">2</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
              Teknik Komputer
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">3</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Tema Penilitian
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">Teknolgi Subsitusi Baham Bakar</td>
          </tr>

          <tr className="bg-gray-50">
          <td className="px-6 py-4 text-sm font-sans ">
            Topik Penelitian
          </td>
          <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
            Pengembanagan Komponen Konverter Kit
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Lama Krgiatan 
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
              2 Tahun
            </td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Tahun Pertahun Usulan
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">2023</td>
          </tr>

        </tbody>
      </table>
        </div>
        </div>
        <div className='mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md '>
        <div className=''>
          <h2 className='text-md font-bold text-violet-800'> Identitas Pengusul Ketua</h2>
        </div>
        </div>

        <div className='mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md '>
        <div className=''>
          <h2 className='text-md font-bold text-violet-800'> Anggota Usulan Dosen</h2>
        </div>
        </div>

        <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">NIDN</th>
                <th className="border border-black px-4 py-2">Nama Anggota</th>
                <th className="border border-black px-4 py-2">Peram</th>
                <th className="border border-black px-4 py-2">Urain Tugas</th>
                <th className="border border-black px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div className='mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md '>
        <div className=''>
          <h2 className='text-md font-bold text-violet-800'> Anggota Usulan Mahasiswa</h2>
        </div>
        </div>

        <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">NIM</th>
                <th className="border border-black px-4 py-2">Nama</th>
                <th className="border border-black px-4 py-2">Instansi</th>
                <th className="border border-black px-4 py-2">Prodi</th>
                <th className="border border-black px-4 py-2">Peran</th>
                <th className="border border-black px-4 py-2">No.HP</th>
                <th className="border border-black px-4 py-2">Uraian Tugas</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className='mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md '>
        <div className=''>
          <h2 className='text-md font-bold text-violet-800'> Substansi</h2>
        </div>
        </div>

        <div className='mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md '>
        <div className=''>
          <h2 className='text-md font-bold text-violet-800'> Luaran Yang dijanjikan</h2>
        </div>
        </div>

        <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">Uraian Tahun Kegiatan</th>
                <th className="border border-black px-4 py-2">Kelompok Luaran</th>
                <th className="border border-black px-4 py-2">Jenis Luaran</th>
                <th className="border border-black px-4 py-2">Target </th>
                <th className="border border-black px-4 py-2">Keterangan</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div className='mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md '>
        <div className=''>
          <h2 className='text-md font-bold text-violet-800'> Rencana Angggaran Biaya</h2>
        </div>
        </div>

        <div className=''>
          <h2 className='mb-2 text-md font-bold text-violet-800'> Total RAB 2 Tahun Rp.0,00</h2>
        </div>
        <div className=''>
          <h2 className='text-sm font-sans text-violet-800'> Tahun 1</h2>
        </div>
        <div className="relative overflow-x-auto  my-2">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">Kelompok</th>
                <th className="border border-black px-4 py-2">Komponen</th>
                <th className="border border-black px-4 py-2">Item</th>
                <th className="border border-black px-4 py-2">Satuan </th>
                <th className="border border-black px-4 py-2">Harga Satuan </th>
                <th className="border border-black px-4 py-2">Volume</th>
                <th className="border border-black px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className='flex justify-between'>
          <h2 className='mb-2 text-md font-bold text-violet-800'> Total Anggaran</h2>
          <h2 className='mb-2 text-md font-bold text-violet-800'> Rp.0,00</h2>
        </div>
        <div className=''>
          <h2 className='text-sm font-sans text-violet-800'> Tahun 2</h2>
        </div>
        <div className="relative overflow-x-auto  my-2">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">Kelompok</th>
                <th className="border border-black px-4 py-2">Komponen</th>
                <th className="border border-black px-4 py-2">Item</th>
                <th className="border border-black px-4 py-2">Satuan </th>
                <th className="border border-black px-4 py-2">Harga Satuan </th>
                <th className="border border-black px-4 py-2">Volume</th>
                <th className="border border-black px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className='flex justify-between'>
          <h2 className='mb-2 text-md font-bold text-violet-800'> Total Anggaran</h2>
          <h2 className='mb-2 text-md font-bold text-violet-800'> Rp.0,00</h2>
        </div>

        <div className='mt-10 mb-10 p-4 bg-violet-100 w-full rounded-md '>
        <div className=''>
          <h2 className='text-md font-bold text-violet-800'> Rencana Angggaran Biaya</h2>
        </div>
        </div>
        <div className="relative overflow-x-auto  my-2">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">Nama Mitra</th>
                <th className="border border-black px-4 py-2">Instunsi</th>
                <th className="border border-black px-4 py-2">Alamat Instunsi</th>
                <th className="border border-black px-4 py-2">Negara </th>
                <th className="border border-black px-4 py-2">Surel</th>
                <th className="border border-black px-4 py-2">Surat Kesanggupan</th>
                <th className="border border-black px-4 py-2">Dana th 1</th>
                <th className="border border-black px-4 py-2">Dana th 2</th>
                <th className="border border-black px-4 py-2">Dana th 3</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
    </div>
  )
}

export default KonfirmasiUsulan