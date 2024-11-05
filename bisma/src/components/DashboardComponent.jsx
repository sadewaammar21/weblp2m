import React from 'react';
import { FaDashcube,FaBook, FaFileAlt, FaGlobe, FaChartBar, FaCogs, FaPen, FaClipboardList, FaLightbulb ,FaUser } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

const DashboardComponent = () => {
    const metrics = [
        { title: 'Identitas',count: "Rapek", icon: <FaUser size={24} className="text-violet-800" /> },
        { title: 'Artikel Jurnal Internasional Bereputasi', count: 0, icon: <FaGlobe size={24} className="text-violet-800" /> },
        { title: 'Buku', count: 0, icon: <FaBook size={24} className="text-violet-800" /> },
        { title: 'Scopus H-Index', count: 0, icon: <FaChartBar size={24} className="text-violet-800" /> },
        { title: 'SS 3Yr', count: 0, icon: <FaCogs size={24} className="text-violet-800" /> },
        { title: 'HKI', count: 0, icon: <FaLightbulb size={24} className="text-violet-800" /> },
        { title: 'Sinta Skor Overall', count: 0, icon: <FaChartBar size={24} className="text-violet-800" /> },
        { title: 'Jumlah Proposal Pengabdian', count: 0, icon: <FaClipboardList size={24} className="text-violet-800" /> },
        { title: 'Jumlah Proposal Penelitian', count: 0, icon: <FaPen size={24} className="text-violet-800" /> },
      ];

return(
    <div className='mx-5'>
        {/* Dasboard Pengusul */}
        <div>
            <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>DASHBOARD PENGUSUL</h1>
        </div>
        <div className= "bg-violet-800 mx-5 rounded-lg shadow">
            <h5 className='text-white pl-11 pt-11'>Anda dapat mengajukan usulan </h5>
            <h5 className='text-white pl-11 '>terkait dengan layanan berikut :</h5>
            <div className="container mx-auto flex justify-center items-center mt-14 pb-2">
                <button className='bg-gray-50 hover:bg-gray-200 rounded-md mr-20 col'>
                    <h2 className='text-violet-800 px-24 py-8'>Penelitian</h2>
                </button>
                <button className='bg-gray-50 hover:bg-gray-200 rounded-md'>
                    <h2 className='text-violet-800 px-24 py-8'>Pengabdian</h2>
                </button>
                <button className='bg-gray-50 hover:bg-gray-200 rounded-md ml-20'>
                    <h2 className='text-violet-800 px-14 py-8'>Kekayaan Intelektual</h2>
                </button>
            </div>
        </div>

        {/* Status Usulan Terakhir */}
        <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>STATUS USULAN</h1>
        <div className="bg-white rounded-lg shadow p-5 m-5">
          <h3 className="text-lg font-semibold">Usulan Penelitian</h3>
          <p className="text-gray-600">Sistem Informasi Pariwisata Terpadu</p>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-violet-800 text-white flex items-center justify-center">✓</div>
                <p className="text-gray-700">Tahapan Seleksi/Usulan</p>
                <p className="text-sm text-gray-500">29-08-2024</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <p className="text-gray-700">Tahapan Pelaksanaan Kegiatan</p>
                <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <p className="text-gray-700">Tahapan Seleksi Lanjutan</p>
                <p className="text-sm text-gray-500"></p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <p className="text-gray-700">Tahapan Pasca Pelaksanaan Kegiatan</p>
                <p className="text-sm text-gray-500"></p>
            </div>
          </div>
        </div>
      
        <div>
            <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>PROFIL ANDA</h1>
        </div>

        <div className="mx-5 my-5">
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

        <div className="mx-5 my-5 bg-white rounded-lg shadow-lg p-5">
            <h1 className="text-xl font-bold text-violet-800 mb-4">Profil Anda</h1>
                <div className="grid grid-cols-2 gap-4">
                {/* Kiri - Informasi Profil */}
                    <div className="space-y-2">
                        <div className="text-gray-700 font-semibold">Identitas</div>
                            <div className="bg-gray-100 p-3 rounded-md">
                                <p className="font-semibold text-violet-800">Yustina Retno Wahyu Utami</p>
                                <p>Program Studi Informatika</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-gray-700">NIDN/NIDK: <span className="text-gray-600">0020337801</span></p>
                                <p className="font-semibold text-gray-700">Klaster: <span className="text-gray-600">Kelompok PT Madya</span></p>
                                <p className="font-semibold text-gray-700">Institusi: <span className="text-gray-600">STMIK Sinar Nusantara</span></p>
                                <p className="font-semibold text-gray-700">Program Studi: <span className="text-gray-600">Informatika</span></p>
                                <p className="font-semibold text-gray-700">Jenjang Pendidikan: <span className="text-gray-600">S2</span></p>
                                <p className="font-semibold text-gray-700">Jabatan Akademik: <span className="text-gray-600">Lektor</span></p>
                            </div>
                    </div>
                {/* Kanan - Kontak dan Informasi Tambahan */}
        <div className="space-y-2">
            <div className="text-gray-700 font-semibold">Kontak</div>
                <div className="space-y-1">
                    <p className="font-semibold text-gray-700">Tempat Tanggal Lahir: <span className="text-gray-600">Semarang, 23 Maret 1978</span></p>
                    <p className="font-semibold text-gray-700">No KTP: <span className="text-gray-600">33223111111</span></p>
                    <p className="font-semibold text-gray-700">No Telepon: <span className="text-gray-600">0271-9993333</span></p>
                    <p className="font-semibold text-gray-700">No HP: <span className="text-gray-600">08223332222</span></p>
                    <p className="font-semibold text-gray-700">Alamat Surel: <span className="text-gray-600">yust.retno@gmail.com</span></p>
                    <p className="font-semibold text-gray-700">Alamat: <span className="text-gray-600">Griya Kelapa Gading No. 6 Blulukan Colomadu</span></p>
                </div>
                <div className="mt-4">
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-md">Sunting</button>
                </div>
            </div>
        </div>
        </div>
    </div>
);
}
export default DashboardComponent
