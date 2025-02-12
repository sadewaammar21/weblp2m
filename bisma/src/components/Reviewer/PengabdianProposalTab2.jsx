import React, { useEffect, useState } from "react";
import TextAreaCmp from "../TextAreaCmp";

const PengabdianProposalTab2 = ({ data, review, setReview }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleResponseChange = (id, value) => {
    setReview({ ...review, [id]: value });
    console.log(review);
  };

  const handleClicktes = () => {
    console.log(data);
  };

  const handleInputChange = () => (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setReview((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  }; 

  return (
    <div className="p-6">
      <div className="p-8">
        <h1 className="text-2xl text-violet-800 font-bold mb-4">
          Penilaian Administrasi Usulan Pengabdian
        </h1>
        <table className="table-auto w-full border-collapse border border-black">
          <thead>
            <tr>
              <th
                className="border border-black p-2 border-b-0 border-r-2"
                rowSpan={2}
              >
                No
              </th>
              <th className="border border-black p-2 border-b-0" rowSpan={2}>
                Usulan Pengusul
              </th>
              <th className="border border-black p-2" colSpan={4}>
                Skor
              </th>
            </tr>
            <tr>
              <th className="border border-black p-2">1</th>
              <th className="border border-black p-2">2</th>
              <th className="border border-black p-2">3</th>
              <th className="border border-black p-2">4</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "substance_score_1",
                text: " Penjelasan kondisi eksisting mitra seperti profil, potensi masyarakat dan wilayah",
              },
              {
                id: "substance_score_2",
                text: " Ketajaman analisis situasi permasalahan mitra sasaran",
              },
              {
                id: "substance_score_3",
                text: "Rumusan masalah prioritas minimal 2 bidang permasalahan",
              },
              {
                id: "substance_score_4",
                text: "Kesesuaian solusi dengan permasalahan mitra",
              },
              {
                id: "substance_score_5",
                text: "Metode dan rencana kegiatan yang ditawarkan",
              },
              {
                id: "substance_score_6",
                text: "Pelaksanaan pengabdian dan metode penyelesaian masalah",
              },
              {
                id: "substance_score_7",
                text: "Partisipasi mitra sasaran",
              },
              {
                id: "substance_score_8",
                text: "Kesesuaian penugasan, kompetensi tim pelaksana dan mahasiswa",
              },
              {
                id: "substance_score_9",
                text: "Kualitas Ipteks yang ditawarkan (hasil  penelitian)",
              },
              {
                id: "substance_score_10",
                text: "Implementasi/Penerapan Teknologi dan Inovasi menggambarkan spesifikasi, ukuran, kebermanfaatan,  kegunaan disertakan narasi",
              },
              {
                id: "substance_score_11",
                text: "Kewajaran tahapan target capaian luaran wajib dan penyelesaiannya",
              },
              {
                id: "substance_score_12",
                text: "Kesesuaian jadwal",
              },
              {
                id: "substance_score_13",
                text: "Rencana Anggaran Biaya",
              },
              {
                id: "substance_score_14",
                text: "Penjelasan Rencana Peningkatan level keberdayaan mitra sesuai permasalahan yang  dihadapi",
              },
              {
                id: "substance_score_15",
                text: "Satu artikel ilmiah yang dipublikasikan melalui jurnal terakreditasi SINTA",
              },
              {
                id: "substance_score_16",
                text: "Satu artikel pada media massa cetak/elektronik",
              },
              {
                id: "substance_score_17",
                text: "Video Kegiatan",
              },
              {
                id: "substance_score_18",
                text: "Rekognisi SKS",
              },
            ].map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="border border-black p-2">{index + 1}</td>
                <td className="border border-black p-2 text-left">
                  {item.text}
                </td>
                <td className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    value={25}
                    checked={review[item.id] === 25}
                    onChange={() => handleResponseChange(item.id, 25)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
                <td className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    value={50}
                    checked={review[item.id] === 50}
                    onChange={() => handleResponseChange(item.id, 50)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
                <td className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    value={75}
                    checked={review[item.id] === 75}
                    onChange={() => handleResponseChange(item.id, 75)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
                <td className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    value={100}
                    checked={review[item.id] === 100}
                    onChange={() => handleResponseChange(item.id, 100)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-bold text-violet-800 mb-4">
        Catatan Usulan Pengabdian
      </h2>
      <TextAreaCmp
        name="notes"
        value={review.notes}
        onChange={handleInputChange()}
        placeholder="Fill"
        rows={10}
      />
    </div>
  );
};

export default PengabdianProposalTab2;
