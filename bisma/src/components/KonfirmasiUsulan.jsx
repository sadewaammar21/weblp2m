import React from 'react'

const KonfirmasiUsulan = () => {
  return (
    <div>
      <div className='px-10'>
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
    </div>
  )
}

export default KonfirmasiUsulan