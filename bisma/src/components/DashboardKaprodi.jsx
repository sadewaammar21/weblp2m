import React from 'react'
import DropdownCmp from './DropdownCmp'

const DashboardKaprodi = () => {
  return (  
    <div className='p-10 w-[100%]'>
        <h1 className='text-xl font-bold'>Dashboard Kaprodi</h1>
        <div className='w-[100%] flex justify-end my-20'>
            <div className='w-[60%] grid grid-cols-2 gap-2'>
                <DropdownCmp
                    label={'Program Hibah'}
                />
                <DropdownCmp
                    label={'Tahun Usulan'}
                />
                <DropdownCmp
                    label={'Jenis Kegiatan'}
                />
                <DropdownCmp
                    label={'Tahun Pelaksanaan'}
                />
            </div>
        </div>
        <div className='w-full grid grid-cols-3 gap-10'>
            <div className=' bg-white rounded-md shadow-md p-8 flex flex-col items-center'>
                <div className='w-20 h-20 rounded-full bg-blue-500'></div>
                <h2 className='text-md font-bold'>Identitas</h2>
                <h2 className='text-xl font-bold'>Poleng Adi Kurniawan</h2>
            </div>
            <div className=' bg-white rounded-md shadow-md p-8 flex flex-col items-center'>
                <div className='w-20 h-20 rounded-full bg-blue-500'></div>
                <h2 className='text-md font-bold'>Identitas</h2>
                <h2 className='text-xl font-bold'>Poleng Adi Kurniawan</h2>
            </div>
            <div className=' bg-white rounded-md shadow-md p-8 flex flex-col items-center'>
                <div className='w-20 h-20 rounded-full bg-blue-500'></div>
                <h2 className='text-md font-bold'>Identitas</h2>
                <h2 className='text-xl font-bold'>Poleng Adi Kurniawan</h2>
            </div>
            <div className=' bg-white rounded-md shadow-md p-8 flex flex-col items-center'>
                <div className='w-20 h-20 rounded-full bg-blue-500'></div>
                <h2 className='text-md font-bold'>Identitas</h2>
                <h2 className='text-xl font-bold'>Poleng Adi Kurniawan</h2>
            </div>
            <div className=' bg-white rounded-md shadow-md p-8 flex flex-col items-center'>
                <div className='w-20 h-20 rounded-full bg-blue-500'></div>
                <h2 className='text-md font-bold'>Identitas</h2>
                <h2 className='text-xl font-bold'>Poleng Adi Kurniawan</h2>
            </div>
        </div>
        <div>
            <table className="w-full border-collapse border border-gray-300 my-20">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2 font-semibold text-left">Nama Skema</th>
                        <th className="border border-gray-300 p-2 font-semibold text-center">Usulan Draft</th>
                        <th className="border border-gray-300 p-2 font-semibold text-center">Dikirim</th>
                        <th className="border border-gray-300 p-2 font-semibold text-center">Belum Ditinjau</th>
                        <th className="border border-gray-300 p-2 font-semibold text-center">Disetujui</th>
                        <th className="border border-gray-300 p-2 font-semibold text-center">Ditolak</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-5">Penelitian Dasar - Penelitian Dosen Pemula</td>
                        <td className="border border-gray-300 p-2 text-center">0</td>
                        <td className="border border-gray-300 p-2 text-center">0</td>
                        <td className="border border-gray-300 p-2 text-center">0</td>
                        <td className="border border-gray-300 p-2 text-center">0</td>
                        <td className="border border-gray-300 p-2 text-center">0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DashboardKaprodi