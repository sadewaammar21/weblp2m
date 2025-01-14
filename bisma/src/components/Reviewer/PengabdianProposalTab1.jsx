import React, { useEffect, useState } from "react";

const PengabdianProposalTab1 = ({ data, review, setReview }) => {
  const [isVisible, setIsVisible] = useState(true);

  const [responses, setResponses] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  });

  const handleResponseChange = (id, value) => {
    setReview({ ...review, [id]: value });
    console.log(review);
  };

  const handleClicktes = () => {
    console.log(data);
  };

  return (
    <div className="p-6">
      <div className="flex space-x-10 my-5">
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
      <div className="flex justify-between">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
            <tbody>
              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Judul Proposal
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  {data?.title ||
                    "Membangun Kemandirian Ekonomi Desa melalui Implementasi Sistem Manajemen Pelaporan Keuangan Terintegrasi di BUMDesa Sinergi Sidowayah"}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Kelompok Skema
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.scheme?.name || "Kelompok Skema Placeholder"}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Ruang Lingkup
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.scope?.name || "Ruang Lingkup Placeholder"}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Bidang Fokus</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {data?.research_focus?.name || "Bidang Fokus Placeholder"}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Tahun Usulan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.year || "Tahun Placeholder"}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Tahun Pelaksanaan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.year || "Tahun Placeholder"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-10 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
            <tbody>
              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Lama Kegiatan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.duration || 0} Tahun
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Tema Penelitian
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  {data?.research_theme?.name || "Tema Placeholder"}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Topik Penelitian
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  {data?.research_topic?.name || "Topik Placeholder"}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Rumpun Ilmu Level 3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.science_cluster3?.name || "Rumpun Placeholder"}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Target TKT</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {data?.tkt_final || "TKT Placeholder"}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Profil Sinta Ketua
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.sinta_profile || "6049857"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-2xl text-violet-800 font-bold mb-4">
          Penilaian Administrasi Usulan Pengabdian
        </h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th
                className="border border-gray-300 p-2 border-b-0 border-r-2"
                rowSpan={2}
              >
                No
              </th>
              <th className="border border-gray-300 p-2 border-b-0" rowSpan={2}>
                Usulan Pengusul
              </th>
              <th className="border border-gray-300 p-2" colSpan={2}>
                Indikator
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2">Sesuai</th>
              <th className="border border-gray-300 p-2">Tidak Sesuai</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "indicator_1",
                text: "Penulisan Usulan proposal sesuai dengan template dan ketentuan pada panduan",
              },
              {
                id: "indicator_2",
                text: "Penulisan proosal usulan menggunakan Bahasa Indonesia",
              },
              {
                id: "indicator_3",
                text: "Penulisan Jumlah kata per bagian pada proposal sesuai ketentuan",
              },
              {
                id: "indicator_4",
                text: "Menggunakan sistem sitasi Vancouver",
              },
              {
                id: "indicator_5",
                text: "Tim pengusul memiliki kompetensi multidisiplin sesuai dengan kepakaran rumpun ilmu level 2 yang diusulkan, minimal dua kompetensi",
              },
              {
                id: "indicator_6",
                text: "Jenis mitra sasaran sesuai dengan ketentuan",
              },
              {
                id: "indicator_7",
                text: "Terdapat minimal dua bidang masalah",
              },
              {
                id: "indicator_8",
                text: "Terdapat peta yang menggambarkan jarak lokasi kegiatan dari PT Ketua  Pelaksana ke lokasi mitra sasaran sesuai",
              },
              {
                id: "indicator_9",
                text: "Jarak mitra sasaran maksimum 200 km dari PT Ketua Pelaksana",
              },
              {
                id: "indicator_10",
                text: "Mendukung transformasi pendidikan tinggi melalui 8 Indikator Kinerja  Utama (IKU) minimal 2 indikator",
              },
              {
                id: "indicator_11",
                text: "Surat pernyataan mitra sasaran",
              },
              {
                id: "indicator_12",
                text: "Bukti jumlah keanggotaan kelompok/karyawan",
              },
              {
                id: "indicator_13",
                text: "Surat Pernyataan orisinalitas usulan",
              },
            ].map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2 text-left">
                  {item.text}
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="checkbox"
                    name={`response-${item.id}`}
                    value={true}
                    checked={review[item.id] === true}
                    onChange={() => handleResponseChange(item.id, true)}
                    className="w-5 h-5 text-blue-600"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="checkbox"
                    name={`response-${item.id}`}
                    value={false}
                    checked={review[item.id] === false}
                    onChange={() => handleResponseChange(item.id, false)}
                    className="w-5 h-5 text-blue-600"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PengabdianProposalTab1;
