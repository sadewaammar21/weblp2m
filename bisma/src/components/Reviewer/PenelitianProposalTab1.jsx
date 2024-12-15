import React, { useEffect, useState } from "react";

const PenelitianProposalTab1 = ({ data, review, setReview }) => {
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
  }

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg boder border-black border-l-2 border-r-2 border-t-2 border-b-2 ">
            <tbody>
              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  data
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  {data?.title}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Kelompok Skema
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.scheme.name}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Ruang Lingkup
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.scope.name}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Bidang Fokus</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {data?.research_focus.name}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Tahun Usulan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.year}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Tahun Pelaksanaan
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.year}
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
                  {data?.duration} Tahun
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Tema Penelitian
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  {data?.research_theme.name}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans">
                  Topik Penelitian
                </td>
                <td className="px-6 py-4 whitespace-normal break-words text-sm font-bold text-right max-w-md">
                  {data?.research_topic.name}
                </td>
              </tr>

              <tr className="boder border-black border-b-2">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-sans ">
                  Rumpun Ilmu Level 3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                  {data?.science_cluster3.name}
                </td>
              </tr>

              <tr className="bg-gray-50 boder border-black border-b-2">
                <td className="px-6 py-4 text-sm font-sans ">Target TKT</td>
                <td className="px-6 py-4 text-sm font-bold whitespace-normal break-words text-right">
                  {data?.tkt_final}
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
        <button onClick={handleClicktes}>tes data</button>
        <h1 className="text-2xl font-bold mb-4">
          Penilaian Administrasi Usulan Penelitian
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
              {/* Sub-header for the indikator columns */}
              <th className="border border-gray-300 p-2">Sesuai</th>
              <th className="border border-gray-300 p-2">Tidak Sesuai</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'indicator_1', text: "Kesesuaian Isi Per Bagian" },
              { id: 'indicator_2', text: "Jumlah Kata Per Bagian" },
              {
                id: 'indicator_3',
                text: "Model Penulisan Sitasi Dan Penulisan Daftar Pustaka",
              },
              {
                id: 'indicator_4',
                text: "Lampiran Surat Keterangan/Surat Tugas Mahasiswa Bimbingan",
              },
              {
                id: 'indicator_5',
                text: "Ketua Pengusul Memiliki Hasil Penelitian Yang Relevan",
              },
              {
                id: 'indicator_6',
                text: "Memiliki Mitra Yang Dibuktikan Dengan Surat Pernyataan",
              },
            ].map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="border border-gray-300 p-2">{index+1}</td>
                <td className="border border-gray-300 p-2">{item.text}</td>
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
                    onChange={() =>
                      handleResponseChange(item.id, false)
                    }
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
