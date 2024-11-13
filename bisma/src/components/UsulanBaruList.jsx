import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { FaPlus, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../Features/AuthSlice';
import { Link } from 'react-router-dom';
const UsulanBaruList = () => {

  const apiUrl = process.env.REACT_APP_API_URL;


const [fixed, setFixed] = useState([]);
const [error, setError] = useState(null);



const getFixed= async ()=>{
  try {
      const response = await axios.get(`${apiUrl}/api/research`,getToken());
      setFixed(response.data.data);
      console.log(response)
  }catch (error){
    setError("failed fetch data")
  }
}

useEffect(() => {
  getFixed();
  console.log(getFixed())
}, []);

  const navigate = useNavigate(); // Hook untuk navigasi

  const handleClick = () => {
    navigate('/usulan-baru-penelitian'); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  return (
    <div className='mx-5'>
      {/* Bagian Usulan Penelitian tidak dimasukkan ke dalam card */}
      <div>
        <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>USULAN PENELITIAN</h1>
      </div>

      {/* Card untuk bagian Tambah Usulan dan Tabel */}
      <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 ">
        <div className="flex justify-between items-center w-full">
          <div>
            <button className="flex items-center px-4 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
              onClick={handleClick}>
              <FaPlus className="mr-2" /> {/* Icon tambah */}
              Tambah Usulan
            </button>
          </div>
          <div>
            <h1>Tahun Pelaksana</h1>
            <div className='flex'>
              <button className='bg-bluef-500 px-1 text-white hover:bg-bluef-300 focus:outline-none'>
                <FaPen className='items-center' size={15} />
              </button>
              <input
                type="text"
                className="text-sm w-full border border-black"
                value=''
                onChange={``}
                placeholder="2024"
              />
            </div>
          </div>
        </div>

        {/* Tabel */}
        <div className="relative overflow-x-auto my-10 max-h-96 overflow-y-auto">
          {error && <p className="text-red-500">{error}</p>}
          {!error && fixed.length > 0 && (
            <table className="w-full text-sm text-center text-gray-500 border border-gray-300">
              <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Ketua</th>
                  <th className="border px-4 py-2">Judul</th>
                  <th className="border px-4 py-2">Bidang Fokus</th>
                  <th className="border px-4 py-2">Tahun Pelaksanaan</th>
                  <th className="border px-4 py-2">Peran</th>
                  <th className="border px-4 py-2">Status Usulan</th>
                  <th className="border px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
  {fixed.map((d, i) => (
    <tr key={d.id} className="odd:bg-white even:bg-gray-50 border-b">
      <td className="border px-4 py-2">{d.id}</td>
      <td className="border px-4 py-2">{typeof d.user?.name === 'string' ? d.user.name : '-'}</td>
      <td className="border px-4 py-2">{typeof d.title === 'string' ? d.title : '-'}</td>
      <td className="border px-4 py-2">{typeof d.focus?.name === 'string' ? d.focus.name : '-'}</td>
      <td className="border px-4 py-2">{typeof d.year === 'number' ? d.year : '-'}</td>
      <td className="border px-4 py-2">-</td>
      <td className="border px-4 py-2">{typeof d.status === 'string' ? d.status : '-'}</td>
      <td className="border px-4 py-2">
        <Link to="#">
          <button>
            <img 
              src="/assets/action.svg"
              alt="Action Icon"
              className="py-2 w-10 h-auto z-10"
            />
          </button>
        </Link>
      </td>
    </tr>
  ))}
</tbody>


            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsulanBaruList;
