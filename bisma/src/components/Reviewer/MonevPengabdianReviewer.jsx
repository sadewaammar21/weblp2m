import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import ModalMonevPengabdian from "./ModalMonevPengabdian";
import TextAreaCmp from "../TextAreaCmp";

const MonevPengabdianReviewer = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCheckboxChange1 = (row, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [row]: prev[row] === value ? undefined : value, // Toggle logic
    }));
  };
  const handleCheckboxChange2 = (row, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [row]: prev[row] === value ? undefined : value, // Toggle logic
    }));
  };
  const handleCheckboxChange3 = (row, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [row]: prev[row] === value ? undefined : value, // Toggle logic
    }));
  };
  const handleCheckboxChange4 = (row, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [row]: prev[row] === value ? undefined : value, // Toggle logic
    }));
  };
  const handleCheckboxChange5 = (row, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [row]: prev[row] === value ? undefined : value, // Toggle logic
    }));
  };
  const handleCheckboxChange6 = (row, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [row]: prev[row] === value ? undefined : value, // Toggle logic
    }));
  };
  const handleCheckboxChange7 = (row, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [row]: prev[row] === value ? undefined : value, // Toggle logic
    }));
  };
  const handleCheckboxChange8 = (row, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [row]: prev[row] === value ? undefined : value, // Toggle logic
    }));
  };

  const componentsKehadirandanPelaksanaan = [
    {
      id: "A",
      description: "Kemampuan presentasi dan penguasaan materi usulan",
    },
    { id: "B", description: "Kehadiran Pelaksana" },
    { id: "C", description: "Kesiapan dan Kelengkapan Pelaksana" },
    { id: "D", description: "Ketepatan waktu" },
    {
      id: "E",
      description: "Kesesuaian substansi usulan dengan materi presentasi",
    },
  ];
  const componentsArtikelpublikasiberitapadamediamassa = [
    {
      id: "A",
      description:
        "Artikel publikasi berita pada media massa (cetak/elektronik)",
    },
  ];
  const componentsPublikasipadaJurnalnasionalterakreditasiSINTA = [
    {
      id: "A",
      description: "Publikasi pada Jurnal  nasional terakreditasi  SINTA 1-6",
    },
  ];
  const componentsRekognisiSKSminimal6SKS = [
    {
      id: "A",
      description: "Rekognisi SKS  mahasiswa Ke 1",
    },
    {
      id: "B",
      description: "ARekognisi SKS  mahasiswa Ke 2",
    },
  ];
  const componentsKaryaVisualVideo = [
    {
      id: "A",
      description: "Channel Penayangan  YouTube",
    },
    {
      id: "B",
      description: "Kualitas video",
    },
    {
      id: "C",
      description: "Bentuk Video",
    },
    {
      id: "D",
      description: "Voice Over dan Running  Text/Text Tittle/Subtitle",
    },
    {
      id: "E",
      description: "Penyebutan Program  dan Sumber dana",
    },
    {
      id: "F",
      description: "Cerita dan  Penggambaran",
    },
    {
      id: "G",
      description: "Daya Tarik, Transisi dan  Stabilisasi",
    },
    {
      id: "H",
      description: "Jumlah viewers video",
    },
  ];
  const componentsKaryaVisualPoster = [
    {
      id: "A",
      description: "Kemampuan presentasi  dan penguasaan materi  usulan",
    },
    {
      id: "B",
      description: "Isi/Substansi Poster",
    },
    {
      id: "C",
      description: "Daya Tarik, Warna dan  Layout",
    },
  ];
  const componentsPenggunaanAnggaran = [
    {
      id: "A",
      description: "Dokumen Laporan  Penggunaan Anggaran",
    },
    {
      id: "B",
      description: "Penggunaan Anggaran  70% dengan SBM",
    },
    {
      id: "C",
      description: "Penggunaan Anggaran  70% dengan Panduan  dan Komponennya",
    },
  ];
  const componentsPEMBERDAYAANDANKEBERDAYAAN = [
    {
      id: "A",
      description: "Peningkatan level  keberdayaan mitra 1",
    },
    {
      id: "B",
      description: "Persen peningkatan level  keberdayaan mitra 1",
    },
    {
      id: "C",
      description: "Penerapan teknologi dan  inovasi",
    },
    {
      id: "D",
      description:
        "Kehadiran seluruh  anggota tim pelaksana  dan mahasiswa ke lokasi  mitra sasaran",
    },
    {
      id: "E",
      description:
        "Partisipasi dan peran  seluruh anggota tim  pelaksasa dan  mahasiswa",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        MONITORING DAN EVALUASI PENGABDIAN
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
                      Membangun Kemandirian Ekonomi Desa melalui Implementasi
                      Sistem Manajemen Pelaporan Keuangan Terintegrasi di
                      BUMDesa Sinergi Sidowayah
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
          <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
            Penilaian Monitoring dan Evaluasi Skema Riset Terapan
          </h1>
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
          <ModalMonevPengabdian isOpen={isOpen} closeModal={closeModal} />
          {/* main table */}
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Kehadiran dan Pelaksanaan ((A+B+C+D+E)/10)
          </h2>
          <div className="overflow-x-auto my-5">
            <table className="min-w-full border border-black border-collapse">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    No
                  </th>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    Komponen
                  </th>
                  <th
                    className="border border-black px-4 py-2"
                    rowSpan={3}
                    colSpan="2"
                  >
                    Opsi Komponen
                  </th>
                  <th className="border border-black px-4 py-2" colSpan="3">
                    Nilai
                  </th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2">1</th>
                  <th className="border border-black px-4 py-2">2</th>
                  <th className="border border-black px-4 py-2">3</th>
                </tr>
              </thead>
              <tbody>
                {componentsKehadirandanPelaksanaan.map((component, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsKehadirandanPelaksanaan.length}
                        >
                          1
                        </td>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsKehadirandanPelaksanaan.length}
                        >
                          Kehadiran dan Pelaksanaan
                        </td>
                      </>
                    )}
                    <td className="border border-black px-4 py-2 text-center">
                      {component.id}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {component.description}
                    </td>
                    {[1, 2, 3].map((value) => (
                      <td
                        className="border border-black px-4 py-2 text-center"
                        key={value}
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={selectedValues[component.id] === value}
                            onChange={() =>
                              handleCheckboxChange1(component.id, value)
                            }
                          />
                          <span className="w-6 h-6 border-2 border-gray-50 rounded-md flex items-center justify-center peer-checked:bg-gray-50 peer-checked:border-gray-50 relative">
                            {selectedValues[component.id] === value && (
                              <FaCheck className="text-blue-600 w-4 h-4" />
                            )}
                          </span>
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Artikel publikasi berita pada media massa (cetak/elektronik)
            ((A)/10)
          </h2>
          <div className="overflow-x-auto my-10">
            <table className="min-w-full border border-black border-collapse">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    No
                  </th>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    Komponen
                  </th>
                  <th
                    className="border border-black px-4 py-2"
                    rowSpan={3}
                    colSpan="2"
                  >
                    Opsi Komponen
                  </th>
                  <th className="border border-black px-4 py-2" colSpan="5">
                    Nilai
                  </th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2">1</th>
                  <th className="border border-black px-4 py-2">2</th>
                  <th className="border border-black px-4 py-2">3</th>
                  <th className="border border-black px-4 py-2">4</th>
                  <th className="border border-black px-4 py-2">5</th>
                </tr>
              </thead>
              <tbody>
                {componentsArtikelpublikasiberitapadamediamassa.map(
                  (component, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td
                            className="border border-black px-4 py-2"
                            rowSpan={
                              componentsArtikelpublikasiberitapadamediamassa.length
                            }
                          >
                            1
                          </td>
                          <td
                            className="border border-black px-4 py-2"
                            rowSpan={
                              componentsArtikelpublikasiberitapadamediamassa.length
                            }
                          >
                            Artikel publikasi berita pada media massa
                          </td>
                        </>
                      )}
                      <td className="border border-black px-4 py-2 text-center">
                        {component.id}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {component.description}
                      </td>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <td
                          className="border border-black px-4 py-2 text-center"
                          key={value}
                        >
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={selectedValues[component.id] === value}
                              onChange={() =>
                                handleCheckboxChange2(component.id, value)
                              }
                            />
                            <span className="w-6 h-6 border-2 border-gray rounded-md flex items-center justify-center peer-checked:bg-gray peer-checked:border-gray relative">
                              {selectedValues[component.id] === value && (
                                <FaCheck className="text-blue-600 w-4 h-4" />
                              )}
                            </span>
                          </label>
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Publikasi pada Jurnal nasional terakreditasi SINTA 1-6 ((A)/10)
          </h2>
          <div className="overflow-x-auto my-10">
            <table className="min-w-full border border-black border-collapse">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    No
                  </th>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    Komponen
                  </th>
                  <th
                    className="border border-black px-4 py-2"
                    rowSpan={3}
                    colSpan="2"
                  >
                    Opsi Komponen
                  </th>
                  <th className="border border-black px-4 py-2" colSpan="5">
                    Nilai
                  </th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2">1</th>
                  <th className="border border-black px-4 py-2">2</th>
                  <th className="border border-black px-4 py-2">3</th>
                  <th className="border border-black px-4 py-2">4</th>
                  <th className="border border-black px-4 py-2">5</th>
                </tr>
              </thead>
              <tbody>
                {componentsPublikasipadaJurnalnasionalterakreditasiSINTA.map(
                  (component, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td
                            className="border border-black px-4 py-2"
                            rowSpan={
                              componentsPublikasipadaJurnalnasionalterakreditasiSINTA.length
                            }
                          >
                            1
                          </td>
                          <td
                            className="border border-black px-4 py-2"
                            rowSpan={
                              componentsPublikasipadaJurnalnasionalterakreditasiSINTA.length
                            }
                          >
                            Publikasi pada Jurnal nasional terakreditasi SINTA
                            1-6
                          </td>
                        </>
                      )}
                      <td className="border border-black px-4 py-2 text-center">
                        {component.id}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {component.description}
                      </td>
                      {[1, 2, 3, 4, 5].map((value) => (
                        <td
                          className="border border-black px-4 py-2 text-center"
                          key={value}
                        >
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={selectedValues[component.id] === value}
                              onChange={() =>
                                handleCheckboxChange3(component.id, value)
                              }
                            />
                            <span className="w-6 h-6 border-2 border-gray rounded-md flex items-center justify-center peer-checked:bg-gray peer-checked:border-gray relative">
                              {selectedValues[component.id] === value && (
                                <FaCheck className="text-blue-600 w-4 h-4" />
                              )}
                            </span>
                          </label>
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Rekognisi SKS minimal 6 SKS ((A+B)/10)
          </h2>
          <div className="overflow-x-auto my-10">
            <table className="min-w-full border border-black border-collapse">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    No
                  </th>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    Komponen
                  </th>
                  <th
                    className="border border-black px-4 py-2"
                    rowSpan={3}
                    colSpan="2"
                  >
                    Opsi Komponen
                  </th>
                  <th className="border border-black px-4 py-2" colSpan="4">
                    Nilai
                  </th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2">1</th>
                  <th className="border border-black px-4 py-2">2</th>
                  <th className="border border-black px-4 py-2">3</th>
                  <th className="border border-black px-4 py-2">4</th>
                </tr>
              </thead>
              <tbody>
                {componentsRekognisiSKSminimal6SKS.map((component, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsRekognisiSKSminimal6SKS.length}
                        >
                          1
                        </td>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsRekognisiSKSminimal6SKS.length}
                        >
                          Rekognisi SKS minimal 6 SKS
                        </td>
                      </>
                    )}
                    <td className="border border-black px-4 py-2 text-center">
                      {component.id}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {component.description}
                    </td>
                    {[1, 2, 3, 4].map((value) => (
                      <td
                        className="border border-black px-4 py-2 text-center"
                        key={value}
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={selectedValues[component.id] === value}
                            onChange={() =>
                              handleCheckboxChange4(component.id, value)
                            }
                          />
                          <span className="w-6 h-6 border-2 border-gray rounded-md flex items-center justify-center peer-checked:bg-gray peer-checked:border-gray relative">
                            {selectedValues[component.id] === value && (
                              <FaCheck className="text-blue-600 w-4 h-4" />
                            )}
                          </span>
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Karya Audio Visual (Video) ((A+B+C+D+E+F+G+I)/8)
          </h2>
          <div className="overflow-x-auto my-5">
            <table className="min-w-full border border-black border-collapse">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    No
                  </th>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    Komponen
                  </th>
                  <th
                    className="border border-black px-4 py-2"
                    rowSpan={3}
                    colSpan="2"
                  >
                    Opsi Komponen
                  </th>
                  <th className="border border-black px-4 py-2" colSpan="3">
                    Nilai
                  </th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2">1</th>
                  <th className="border border-black px-4 py-2">2</th>
                  <th className="border border-black px-4 py-2">3</th>
                </tr>
              </thead>
              <tbody>
                {componentsKaryaVisualVideo.map((component, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsKaryaVisualVideo.length}
                        >
                          1
                        </td>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsKaryaVisualVideo.length}
                        >
                          Karya Audio Visual (Video)
                        </td>
                      </>
                    )}
                    <td className="border border-black px-4 py-2 text-center">
                      {component.id}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {component.description}
                    </td>
                    {[1, 2, 3].map((value) => (
                      <td
                        className="border border-black px-4 py-2 text-center"
                        key={value}
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={selectedValues[component.id] === value}
                            onChange={() =>
                              handleCheckboxChange5(component.id, value)
                            }
                          />
                          <span className="w-6 h-6 border-2 border-gray-50 rounded-md flex items-center justify-center peer-checked:bg-gray-50 peer-checked:border-gray-50 relative">
                            {selectedValues[component.id] === value && (
                              <FaCheck className="text-blue-600 w-4 h-4" />
                            )}
                          </span>
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Karya Visual (Poster) ((A+B+C)/10)
          </h2>
          <div className="overflow-x-auto my-5">
            <table className="min-w-full border border-black border-collapse">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    No
                  </th>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    Komponen
                  </th>
                  <th
                    className="border border-black px-4 py-2"
                    rowSpan={3}
                    colSpan="2"
                  >
                    Opsi Komponen
                  </th>
                  <th className="border border-black px-4 py-2" colSpan="3">
                    Nilai
                  </th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2">1</th>
                  <th className="border border-black px-4 py-2">2</th>
                  <th className="border border-black px-4 py-2">3</th>
                </tr>
              </thead>
              <tbody>
                {componentsKaryaVisualPoster.map((component, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsKaryaVisualPoster.length}
                        >
                          1
                        </td>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsKaryaVisualPoster.length}
                        >
                          Karya Visual (Poster)
                        </td>
                      </>
                    )}
                    <td className="border border-black px-4 py-2 text-center">
                      {component.id}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {component.description}
                    </td>
                    {[1, 2, 3].map((value) => (
                      <td
                        className="border border-black px-4 py-2 text-center"
                        key={value}
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={selectedValues[component.id] === value}
                            onChange={() =>
                              handleCheckboxChange6(component.id, value)
                            }
                          />
                          <span className="w-6 h-6 border-2 border-gray-50 rounded-md flex items-center justify-center peer-checked:bg-gray-50 peer-checked:border-gray-50 relative">
                            {selectedValues[component.id] === value && (
                              <FaCheck className="text-blue-600 w-4 h-4" />
                            )}
                          </span>
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            Penggunaan Anggaran 70% ((A+B+C)/10)
          </h2>
          <div className="overflow-x-auto my-5">
            <table className="min-w-full border border-black border-collapse">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    No
                  </th>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    Komponen
                  </th>
                  <th
                    className="border border-black px-4 py-2"
                    rowSpan={3}
                    colSpan="2"
                  >
                    Opsi Komponen
                  </th>
                  <th className="border border-black px-4 py-2" colSpan="3">
                    Nilai
                  </th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2">1</th>
                  <th className="border border-black px-4 py-2">2</th>
                  <th className="border border-black px-4 py-2">3</th>
                </tr>
              </thead>
              <tbody>
                {componentsPenggunaanAnggaran.map((component, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsPenggunaanAnggaran.length}
                        >
                          1
                        </td>
                        <td
                          className="border border-black px-4 py-2"
                          rowSpan={componentsPenggunaanAnggaran.length}
                        >
                          Penggunaan Anggaran 70%
                        </td>
                      </>
                    )}
                    <td className="border border-black px-4 py-2 text-center">
                      {component.id}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {component.description}
                    </td>
                    {[1, 2, 3].map((value) => (
                      <td
                        className="border border-black px-4 py-2 text-center"
                        key={value}
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={selectedValues[component.id] === value}
                            onChange={() =>
                              handleCheckboxChange7(component.id, value)
                            }
                          />
                          <span className="w-6 h-6 border-2 border-gray-50 rounded-md flex items-center justify-center peer-checked:bg-gray-50 peer-checked:border-gray-50 relative">
                            {selectedValues[component.id] === value && (
                              <FaCheck className="text-blue-600 w-4 h-4" />
                            )}
                          </span>
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="text-md font-sans font-bold text-black mr-1">
            PEMBERDAYAAN DAN KEBERDAYAAN ((A+B+C+D+E)/10)
          </h2>
          <div className="overflow-x-auto my-5">
            <table className="min-w-full border border-black border-collapse">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    No
                  </th>
                  <th className="border border-black px-4 py-2" rowSpan="2">
                    Komponen
                  </th>
                  <th
                    className="border border-black px-4 py-2"
                    rowSpan={3}
                    colSpan="2"
                  >
                    Opsi Komponen
                  </th>
                  <th className="border border-black px-4 py-2" colSpan="3">
                    Nilai
                  </th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2">1</th>
                  <th className="border border-black px-4 py-2">2</th>
                  <th className="border border-black px-4 py-2">3</th>
                </tr>
              </thead>
              <tbody>
                {componentsPEMBERDAYAANDANKEBERDAYAAN.map(
                  (component, index) => (
                    <tr key={index}>
                      {index === 0 && (
                        <>
                          <td
                            className="border border-black px-4 py-2"
                            rowSpan={
                              componentsPEMBERDAYAANDANKEBERDAYAAN.length
                            }
                          >
                            1
                          </td>
                          <td
                            className="border border-black px-4 py-2"
                            rowSpan={
                              componentsPEMBERDAYAANDANKEBERDAYAAN.length
                            }
                          >
                            PEMBERDAYAAN DAN KEBERDAYAAN
                          </td>
                        </>
                      )}
                      <td className="border border-black px-4 py-2 text-center">
                        {component.id}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {component.description}
                      </td>
                      {[1, 2, 3].map((value) => (
                        <td
                          className="border border-black px-4 py-2 text-center"
                          key={value}
                        >
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={selectedValues[component.id] === value}
                              onChange={() =>
                                handleCheckboxChange8(component.id, value)
                              }
                            />
                            <span className="w-6 h-6 border-2 border-gray-50 rounded-md flex items-center justify-center peer-checked:bg-gray-50 peer-checked:border-gray-50 relative">
                              {selectedValues[component.id] === value && (
                                <FaCheck className="text-blue-600 w-4 h-4" />
                              )}
                            </span>
                          </label>
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <h2 className="text-xl font-bold text-violet-800 mb-4">
            Catatan Reviewer
          </h2>
          <TextAreaCmp name="notes" placeholder="Fill" rows={10} />
        </div>
      </div>
    </div>
  );
};

export default MonevPengabdianReviewer;
