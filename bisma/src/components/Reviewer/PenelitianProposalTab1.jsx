import React, { useState } from "react";

const PenelitianProposalTab1 = () => {
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
    setResponses({ ...responses, [id]: value });
  };

  return (
    <div className="p-6">
      {/* Button to toggle visibility */}
      {/* <button
        onClick={() => setIsVisible(!isVisible)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isVisible ? "Sembunyikan" : "Tampilkan"} Data
      </button> */}

        <div className='flex justify-between'>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
        <tbody >
          <tr className="boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
              Judul
            </td>
            <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
    Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa Inggris 
    Berbasis Digital Visual Literacy dan Keterampilan 5C untuk Siswa Sekolah Dasar
  </td>
          </tr>

          <tr className="bg-gray-50 boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
              Kelompok Skema
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">Riset Dasar</td>
          </tr>

          <tr className="boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                Ruang Lingkup
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">Penelitian Dosen Pemula</td>
          </tr>

          <tr className="bg-gray-50 boder border-black border-b-2">
          <td className="px-6 py-4 text-sm font-sans ">
            Bidang Fokus
          </td>
          <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
            Teknologi informasi dan Komunikasi 
            </td>
          </tr>

          <tr className="boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                Tahun Usulan
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                2024
            </td>
          </tr>

          <tr className="bg-gray-50 boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Tahun Pelaksanaan
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">2024</td>
          </tr>

        
        </tbody>
      </table>
    </div>
    
      {/* pembatas Antar div  */}

        <div className="max-w-4xl mx-10 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
        <tbody>
          <tr className="boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                Lama Kegiatan
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                1 Tahun
            </td>
          </tr>

          <tr className="bg-gray-50 boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                Tema Penelitian
            </td>
            <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
            Teknologi Substitusi Bahan Bakar
            </td>
          </tr>

          <tr className="bg-gray-50 boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
              Topik Penelitian
            </td>
            <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
            Teknologi untuk data informasi berbagai bentuk kearifan lokal di Indonesia
            </td>
          </tr>

          <tr className="boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Rumpun Ilmu Level 3
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                Teknik Informatika
            </td>
          </tr>

          <tr className="bg-gray-50 boder border-black border-b-2">
          <td className="px-6 py-4 text-sm font-sans ">
            Target TKT
          </td>
          <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                2
            </td>
          </tr>

          <tr className="boder border-black border-b-2">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
              Profil Sinta Ketua
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
              6049857
            </td>
          </tr>


        </tbody>
        </table>
        </div>
        </div>

      {/* Table Section */}
      <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Penilaian Administrasi Usulan Penelitian</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 border-b-0 border-r-2">No</th>
            <th className="border border-gray-300 p-2 border-b-0">Usulan Pengusul</th>
            <th className="border border-gray-300 p-2" colSpan={2}>
              Indikator
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 p-2 border-t-0  border-r-2" colSpan={2}></th>
            <th className="border border-gray-300 p-2">Sesuai</th>
            <th className="border border-gray-300 p-2">Tidak Sesuai</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, text: "Kesesuaian Isi Per Bagian" },
            { id: 2, text: "Jumlah Kata Per Bagian" },
            { id: 3, text: "Model Penulisan Sitasi Dan Penulisan Daftar Pustaka" },
            { id: 4, text: "Lampiran Surat Keterangan/Surat Tugas Mahasiswa Bimbingan" },
            { id: 5, text: "Ketua Pengusul Memiliki Hasil Penelitian Yang Relevan" },
            { id: 6, text: "Memiliki Mitra Yang Dibuktikan Dengan Surat Pernyataan" },
          ].map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.text}</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="checkbox"
                  name={`response-${item.id}`}
                  value="Sesuai"
                  checked={responses[item.id] === "Sesuai"}
                  onChange={() => handleResponseChange(item.id, "Sesuai")}
                  className="w-5 h-5 text-blue-600"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="checkbox"
                  name={`response-${item.id}`}
                  value="Tidak Sesuai"
                  checked={responses[item.id] === "Tidak Sesuai"}
                  onChange={() => handleResponseChange(item.id, "Tidak Sesuai")}
                  className="w-5 h-5 text-red-600"
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

export default PenelitianProposalTab1;
