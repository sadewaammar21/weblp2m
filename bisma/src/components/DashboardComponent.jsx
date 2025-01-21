import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaGlobe,
  FaChartBar,
  FaCogs,
  FaPen,
  FaClipboardList,
  FaLightbulb,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const DashboardComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const handlePenelitian = () => {
    navigate("/penelitian/usulan"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };
  const handlePengabdian = () => {
    navigate("/pengabdian/usulan"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };
  const handleEdit = () => {
    navigate("/dosen/edit-user"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parseUser = JSON.parse(user);
      setUsername(parseUser.name);
    }
  }, []);
  const metrics = [
    {
      title: "Identitas",
      count: username,
      icon: <FaUser size={24} className="text-white" />,
    },
    {
      title: "Artikel Jurnal Internasional Bereputasi",
      count: 0,
      icon: <FaGlobe size={24} className="text-white" />,
    },
    {
      title: "Buku",
      count: 0,
      icon: <FaBook size={24} className="text-white" />,
    },
    {
      title: "Scopus H-Index",
      count: 0,
      icon: <FaChartBar size={24} className="text-white" />,
    },
    {
      title: "SS 3Yr",
      count: 0,
      icon: <FaCogs size={24} className="text-white" />,
    },
    {
      title: "HKI",
      count: 0,
      icon: <FaLightbulb size={24} className="text-white" />,
    },
    {
      title: "Sinta Skor Overall",
      count: 0,
      icon: <FaChartBar size={24} className="text-white" />,
    },
    {
      title: "Jumlah Proposal Pengabdian",
      count: 0,
      icon: <FaClipboardList size={24} className="text-white" />,
    },
    {
      title: "Jumlah Proposal Penelitian",
      count: 0,
      icon: <FaPen size={24} className="text-white" />,
    },
  ];

  return (
    <div className="mx-5">
      {/* Dasboard Pengusul */}
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          DASHBOARD PENGUSUL
        </h1>
      </div>
      {/* <div className="bg-violet-800 mx-5 rounded-lg shadow">
        <h5 className="text-white pl-11 pt-11">
          Anda dapat mengajukan usulan{" "}
        </h5>
        <h5 className="text-white pl-11 ">terkait dengan layanan berikut :</h5>
        <div className="container mx-auto flex justify-center items-center mt-14 pb-2">
          <button className="bg-gray-50 hover:bg-gray-200 rounded-md mr-20 col">
            <h2 className="text-violet-800 px-24 py-8">Penelitian</h2>
          </button>
          <button className="bg-gray-50 hover:bg-gray-200 rounded-md">
            <h2 className="text-violet-800 px-24 py-8">Pengabdian</h2>
          </button>
        </div>
      </div> */}
      <div className="relative bg-violet-800 mx-10 p-12 rounded-lg shadow">
        <h5 className="text-white text-xl pl-11 pt-5">
          Anda dapat mengajukan usulan{" "}
        </h5>
        <h5 className="text-white text-xl pl-11 pb-16">
          terkait dengan layanan berikut :
        </h5>
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center transform translate-y-1/2">
          <div className="flex space-x-10">
            <button
              className="bg-gray-50 hover:bg-gray-200 rounded-md shadow-lg"
              onClick={handlePenelitian}
            >
              <h2 className="text-violet-800 px-16 py-8 text-lg">Penelitian</h2>
            </button>
            <button
              className="bg-gray-50 hover:bg-gray-200 rounded-md shadow-lg"
              onClick={handlePengabdian}
            >
              <h2 className="text-violet-800 px-16 py-8 text-lg">Pengabdian</h2>
            </button>
          </div>
        </div>
      </div>

      {/* Status Usulan Terakhir */}
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-8">
        STATUS USULAN
      </h1>
      <div className="bg-white rounded-lg shadow p-5 m-5">
        <h3 className="text-lg font-semibold">Usulan Penelitian</h3>
        <p className="text-gray-600">Sistem Informasi Pariwisata Terpadu</p>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-violet-800 text-white flex items-center justify-center">
              ✓
            </div>
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
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          PROFIL ANDA
        </h1>
      </div>

      <div className="mx-5 my-5">
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg p-5 flex flex-col items-center text-center"
            >
              {/* Wrapper untuk icon dengan background bulat */}
              <div className="bg-violet-800 rounded-full p-4 flex items-center justify-center mb-3">
                {/* Pastikan ikon memiliki ukuran sesuai */}
                <div className="text-white w-6 h-6">{metric.icon}</div>
              </div>

              {/* Judul */}
              <p className="text-violet-800 font-semibold mt-2">
                {metric.title}
              </p>

              {/* Jumlah */}
              <p className="text-3xl font-bold text-violet-800">
                {metric.count}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-white rounded-lg shadow-lg p-5">
        {/* <h1 className="text-xl font-bold text-violet-800 mb-4">Profil Anda</h1> */}
        <div className="bg-bluef-50 rounded-lg shadow-lg w-full p-10">
          <div className="flex justify-between">
            <div className="mx-5 my-5">
              <h1 className="text-2xl font-bold text-violet-800 ">
                Yustina Retno Wahyu Utami
              </h1>
              <h1 className="text-xl font-bold text-violet-800 ">
                Program Studi Informatika
              </h1>
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/user_profil.png"}
                alt="logo"
                className=""
              />
            </div>
          </div>
        </div>
        <div className=" mx-5 my-5 grid grid-cols-2 gap-4">
          {/* Kiri - Informasi Profil */}
          <div className="space-y-2">
            <div className="space-y-1">
              <p className="font-semibold text-gray-700 mb-3">
                NIDN/NIDK:
                <br />
                <span className="text-violet-800">0020337801</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                Klaster: <br />
                <span className="text-violet-800">Kelompok PT Madya</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                Institusi: <br />
                <span className="text-violet-800">STMIK Sinar Nusantara</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                Program Studi: <br />
                <span className="text-violet-800">Informatika</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                Jenjang Pendidikan:
                <br />
                <span className="text-violet-800">S2</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                Jabatan Akademik:
                <br />
                <span className="text-violet-800">Lektor</span>
              </p>
            </div>
          </div>
          {/* Kanan - Kontak dan Informasi Tambahan */}
          <div className="space-y-2">
            <div className="space-y-1">
              <p className="font-semibold text-gray-700 mb-3">
                Tempat Tanggal Lahir: <br />
                <span className="text-violet-800">Semarang, 23 Maret 1978</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                No KTP:
                <br />
                <span className="text-violet-800">33223111111</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                No Telepon:
                <br />
                <span className="text-violet-800">0271-9993333</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                No HP:
                <br />
                <span className="text-violet-800">08223332222</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                Alamat Surel: <br />
                <span className="text-violet-800">yust.retno@gmail.com</span>
              </p>
              <p className="font-semibold text-gray-700 mb-3">
                Alamat: <br />
                <span className="text-violet-800">
                  Griya Kelapa Gading No. 6 Blulukan Colomadu
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-2" />
        <div className="flex justify-end">
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded-md"
            onClick={handleEdit}
          >
            Sunting
          </button>
        </div>
      </div>
    </div>
  );
};
export default DashboardComponent;
