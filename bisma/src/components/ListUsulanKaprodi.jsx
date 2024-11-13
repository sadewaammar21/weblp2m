import React, { useEffect, useState } from 'react';
import DropdownCmp from './DropdownCmp'
import { getResearch } from '../Features/ResearchSlice';
import PopUpPersetujuan from './PopUpPersetujuan';

const ListUsulanKaprodi = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);
    const [status, setStatus] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getResearch({
                    pageSize: 5,
                    currentPage: 1,
                    status: 1,
                    year: 2024,
                    userId: 2
                });
                setData(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleModal = (accepted, status) => {
        setIsAccepted(accepted)
        setStatus(status)
        openModal()
    }

  return (
    <div className='p-10 w-full'>
        <h1 className='text-xl font-bold mb-20'>LIST USULAN YANG BELUM DITINJAU KAPRODI</h1>
        <div className='w-full flex justify-end'>
            <div className='bg-blue-700 text-white p-2 px-4 rounded-md'>Kembali</div>
        </div>
        <div className='bg-white p-10 rounded-md'>
            <div className='w-full flex justify-between items-center mb-8'>
                <div className='bg-green-700 text-white p-2 px-4 rounded-md'>
                    Exel
                </div>
                <DropdownCmp/>
            </div>
            <input type="text" className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5  mb-10' placeholder="Cari berdasarkan judul..." />
            <div className='w-full'>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 font-semibold text-center">No</th>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Pengusul</th>
                            <th className="border border-gray-300 p-2 font-semibold text-left">Usulan Pengusul</th>
                            <th className="border border-gray-300 p-2 font-semibold text-center">Berkas</th>
                            <th className="border border-gray-300 p-2 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter(item => item.status !== 1 ).map((item, index) => (//here
                            
                            <tr key={index}>
                                <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 p-2">
                                    <p>Ketua: {item.user.name}</p>
                                    <p>NIDN: {item.user.nidn}</p>
                                    <p>Tahun Pelaksanaan: {item.year}</p>
                                    <p>Lama Kegiatan: {item.duration}</p>
                                    <p>Bidang Fokus: {item.focus.name}</p>
                                </td>
                                <td className="border border-gray-300 p-2">
                                    <p className="text-blue-600 font-bold">{item.title}</p>
                                    <p className="text-blue-600 font-bold">{item.scheme.name}</p>
                                </td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <button className="text-red-600 text-2xl">
                                        📄
                                    </button>
                                </td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <button className="bg-blue-600 text-white px-4 py-1 rounded-md mr-2" onClick={ () => handleModal(true, 2)}>Setujui</button>
                                    <button className="bg-red-600 text-white px-4 py-1 rounded-md" onClick={ () => handleModal(false, 3)}>Ditolak</button>
                                    <PopUpPersetujuan isOpen={isOpen} onRequestClose={closeModal} researchId={item.id} isAccepted={isAccepted}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    </div>
  )
}

export default ListUsulanKaprodi