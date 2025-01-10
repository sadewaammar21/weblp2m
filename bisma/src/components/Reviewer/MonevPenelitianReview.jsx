import React, { useState } from "react";
import TextAreaCmp from "../TextAreaCmp";
import ModalMonevPenelitian from "./ModalMonevPenelitian";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MonevPenelitianReview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [komentar, setKomentar] = useState([
    { id: 1, komentar: "" },
    { id: 2, komentar: "" },
    { id: 3, komentar: "" },
    { id: 4, komentar: "" },
    { id: 5, komentar: "" },
    { id: 6, komentar: "" },
  ]);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleKomentarChange = (id, value) => {
    setKomentar((prevKomentar) =>
      prevKomentar.map((item) =>
        item.id === id ? { ...item, komentar: value } : item
      )
    );
  };
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleSave = () => {
    // Tambahkan logika simpan data jika diperlukan
    navigate("/list-monev-penelitian"); // Navigasi ke halaman target
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        MONITORING DAN EVALUASI PENELITIAN
      </h1>
      <div className="container mx-auto">
        <div className="bg-gray-50 shadow-sm rounded-sm p-5 mx-2">
          <div className="flex space-x-10">
            <div className="p-4 bg-violet-100 w-full rounded-md">
              <div className="flex">
                <img
                  src={process.env.PUBLIC_URL + "/assets/information.svg"}
                  alt="logo"
                  className="w-6 h-6 mr-4"
                />
                <h2 className="text-md font-bold text-violet-800">Informasi</h2>
              </div>
              <div className="my-2 flex">
                <h2 className="text-sm font-sans text-violet-800 mr-1">
                  Usulan penelitian anda telah
                </h2>
                <h2 className="text-sm font-sans font-bold text-violet-800 mr-1">
                  disetujui oleh kaprodi
                </h2>
              </div>
            </div>
            <button className="cursor-pointer">
              <img
                src={process.env.PUBLIC_URL + "/assets/icon_pdf_brks.svg"}
                alt="user"
                className="w-15 h-15"
              />
            </button>
          </div>
          <div className="flex justify-between my-5">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
                <tbody>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Judul
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                      Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa
                      Inggris Berbasis DIgital Visual Literacy dan Keterampilan
                      5C untuk Siswa Sekolah Dasar
                    </td>
                  </tr>

                  <tr className="boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                      Kelompok Skema
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                      Riset Dasar
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Ruang Lingkup
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      Penelitan Dosen Pemula
                    </td>
                  </tr>

                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Bidang Fokus
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      Teknologi Informasi dan Komunikasi
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Tahun Usulan{" "}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      2024
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Tahun Pelaksanaan
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="max-w-4xl mx-10 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
                <tbody>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Lama Kegiatan
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      1 Tahun
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 text-sm font-sans ">
                      Tema Penelitan
                    </td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                      Teknologi Subsitusi Bahan Bakar
                    </td>
                  </tr>
                  <tr className=" boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Topik Penelitian
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right">
                      Teknologi untuk data informasi berbagai bentuk kearifan
                      lokal di Indonesia
                    </td>
                  </tr>
                  <tr className="boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Rumpun Ilmu Level 3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                      Teknik Komputer
                    </td>
                  </tr>

                  <tr className="bg-gray-50 boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                      Target TKT
                    </td>
                    <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                      2
                    </td>
                  </tr>

                  <tr className="boder border-black border-b-2">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                      Profil Sinta Ketua Pengusul
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                      6049857
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Main Table */}
          <div>
            <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
              Penilaian Monitoring dan Evaluasi Skema Riset Terapan
            </h1>
            <div
              className="relative bg-white shadow-md rounded-lg p-5 overflow-auto"
              style={{ maxHeight: "auto", overflow: "visible" }}
            >
              <table className="w-full text-sm text-gray-500 border border-black">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                  <tr>
                    <th className="border border-black px-4 py-2">No</th>
                    <th className="border border-black px-4 py-2 text-left">
                      Komponen Penilaian
                    </th>
                    <th className="border border-black px-4 py-2 text-center">
                      Komentar Review
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Kemajuan ketercapaian luaran wajib yang dijanjikan",
                    "Kesesuaian penelitian dengan usulan",
                    "Potensi keberlanjutan hasil penelitian",
                    "Level TKT saat ini (monev)",
                    "Persentase serapan anggaran belanja",
                    "Realisasi keterlibatan/kontribusi mitra",
                  ].map((komponen, index) => (
                    <tr key={index}>
                      <td className="border border-black px-4 py-2 text-center">
                        {index + 1}
                      </td>
                      <td className="border border-black px-4 py-2 text-left">
                        {komponen}
                      </td>
                      <td className="border border-black px-4 py-2">
                        <textarea
                          className="w-full border rounded p-2"
                          value={komentar[index].komentar}
                          onChange={(e) =>
                            handleKomentarChange(index + 1, e.target.value)
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="my-5">
              <div className="p-4 bg-reds-100 w-full rounded-md">
                <div className="flex">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/information.svg"}
                    alt="logo"
                    className="w-6 h-6 mr-4"
                    style={{ filter: "invert(0%) brightness(0%) saturate(0%)" }}
                  />
                  <h2 className="text-md font-semibold text-neutral-800 mr-1">
                    Informasi Mengenai Penilaian Monitoring dan Evaluasi
                    Penelitian
                  </h2>
                </div>
                <div className="my-2">
                  <span
                    className="text-bluef-500 cursor-pointer hover:underline"
                    onClick={openModal}
                  >
                    Klik Disini
                  </span>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Komponen Penilaian
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Item
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Nilai
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="border border-gray-300 px-4 py-2 text-center"
                      rowSpan="3"
                    >
                      1
                    </td>
                    <td
                      className="border border-gray-300 px-4 py-2 text-left"
                      rowSpan="3"
                    >
                      Kemajuan ketercapaian luaran yang dijanjikan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Kualitas dokumen luaran
                    </td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Kesesuaian isi dokumen dengan substansi penelitian
                    </td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Kesesuaian dengan periode pendanaan
                    </td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td
                      className="border border-gray-300 px-4 py-2 text-center"
                      rowSpan="2"
                    >
                      2
                    </td>
                    <td
                      className="border border-gray-300 px-4 py-2 text-left"
                      rowSpan="2"
                    >
                      Kesesuaian penelitian dengan usulan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Kesesuaian pelaksanaan penelitian dengan usulan
                    </td>
                    <td className="border border-gray-300 px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Penelitian dengan usulan
                    </td>
                    <td
                      className="border border-gray-300 px-4 py-2"
                      rowSpan={`3`}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
              Catatan Review
            </h1>
            <div>
              <TextAreaCmp rows={10} placeholder={`fill`} />
            </div>
            <div className="flex justify-between my-10">
              <button
                className=" bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
                // onClick={onRequestClose}
              >
                Cancel
              </button>
              <button
                className="flex items-center bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSave} // Ganti dengan aksi yang sesuai
              >
                Simpan
                <FaChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalMonevPenelitian isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default MonevPenelitianReview;
