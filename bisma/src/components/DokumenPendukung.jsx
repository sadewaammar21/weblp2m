import React  from 'react'
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DokumenPendukung = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/usulan-baru-penelitian'); // Arahkan ke halaman 'usulan-baru-penelitian'
  };
  return (
    <div>
      <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>4.1 Dokumen Pendukung (Jika Ada)</h1>
      <div>
            <button className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
              onClick={handleClick}>
              <FaPlus className="mr-2" /> {/* Icon tambah */}
              Tambah Usulan
            </button>
          </div>
      <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">No</th>
                <th className="border border-black px-4 py-2">NIDN</th>
                <th className="border border-black px-4 py-2">Nama</th>
                <th className="border border-black px-4 py-2">Tugas</th>
                <th className="border border-black px-4 py-2">Status</th>
                <th className="border border-black px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
          </div>
  )
}

export default DokumenPendukung