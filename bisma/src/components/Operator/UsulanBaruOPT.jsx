import React, {useState} from 'react';
import DropdownCmp from '../DropdownCmp';
import { FaBullseye, FaFileAlt, FaHdd, FaChartBar, FaRegBookmark, FaRecycle  } from 'react-icons/fa';

const UsulanBaruOPT = () => {

    const [selectedOption, setSelectedOption] = useState('');


    const handleDropdownChange = (option) => {
        setSelectedOption(option);
      };


      const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ];

      
    const metrics = [
        { title: 'Usulan Draft',count: "Rapek", icon: <FaFileAlt size={24} className="text-violet-800" /> },
        { title: 'Usulan Dikirim', count: 0, icon: <FaRegBookmark size={24} className="text-violet-800" /> },
        { title: 'Usulan Belum Ditinjau', count: 0, icon: <FaHdd size={24} className="text-violet-800" /> },
        { title: 'Usulan Disetujui', count: 0, icon: <FaBullseye size={24} className="text-violet-800" /> },
        { title: 'Usulan Ditolak', count: 0, icon: <FaChartBar size={24} className="text-violet-800" /> },
        { title: 'Hasil Review', count: 0, icon: <FaRecycle size={24} className="text-violet-800" /> },
      ];

      

  return (
    <div>
        <div>
            <h2 className="text-violet-800 font-bold text-lg mb-4">
                USULAN BARU OPT PT
            </h2>
        </div>
        <div className='flex flex-col space-y-5 mx-10'>
  {/* Baris Pertama */}
  <div className='flex justify-end items-start space-x-5'>
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
      options={options}
      selectedOption={selectedOption}
      onChange={(e) => handleDropdownChange(e.target.value)}
      placeholder="Penelitian"
      className="w-72 border border-black" // Panjang dropdown
      controlClassName="bg-neutral-30 text-black"
    />
  </div>

  {/* Baris Kedua */}
  <div className='flex justify-end items-start space-x-5'>
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
</div>

        <div className="mx-10 my-10">
            <div className="grid grid-cols-3 gap-4">
                {metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-5 flex flex-col items-center text-center">
                        {metric.icon}
                        <p className="text-violet-800 font-semibold mt-2">{metric.title}</p>
                        <p className="text-3xl font-bold text-violet-800">{metric.count}</p>
                    </div>
                ))}
            </div>
        </div>
        <div>
        <h2 className="text-violet-800 font-bold text-lg mb-4">
                USULAN BARU OPT PT
            </h2>
            <div className="relative overflow-x-auto my-10 max-h-96 overflow-y-auto">
  <table className="w-full text-sm text-center text-gray-500 border border-black">
    <thead className="bg-neutral-30 text-xs text-gray-700 uppercase">
      <tr>
        <th className="border border-black px-4 py-2">Nama Skema</th>
        <th className="border border-black px-4 py-2">Usulan Draft</th>
        <th className="border border-black px-4 py-2">Dikirim</th>
        <th className="border border-black px-4 py-2">Belum Ditinjau</th>
        <th className="border border-black px-4 py-2">Disetujui</th>
        <th className="border border-black px-4 py-2">Ditolak</th>
      </tr>
    </thead>
    <tbody className="bg-neutral-30 text-xs text-gray-700 text-center uppercase">
      <tr>
        <td className="border border-black px-4 py-2">Penelitian Dasar-Penelitian Dosen Pemula</td>
        <td className="border border-black px-4 py-2">1</td>
        <td className="border border-black px-4 py-2">0</td>
        <td className="border border-black px-4 py-2">0</td>
        <td className="border border-black px-4 py-2">1</td>
        <td className="border border-black px-4 py-2">0</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    </div>
  )
}

export default UsulanBaruOPT