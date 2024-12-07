import React, { useState } from "react";
import TextAreaCmp from "../TextAreaCmp";
import { id } from "date-fns/locale";

const PenelitianProposalTab2 = ({ review, setReview }) => {
  const [des, setDes] = useState("");

  const handleInputChange = () => (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setReview((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleResponseChange = (id, value) => {
    setReview({ ...review, [id]: value });
    console.log(review);
  };

  const indicatorData = [
    {
      number: 1,
      id: "substance_score_1_1",
      indicator:
        "Publikasi, kekayaan intelektual, buku ketua pengusul yang disitasi pada proposal",
    },
    {
      number: 1,
      id: "substance_score_1_2",
      indicator:
        "Relevansi kepakaran pengusul dengan tema proposal (kata kunci)",
    },
    {
      number: 1,
      id: "substance_score_1_3",
      indicator: "Jumlah kolaborator publikasi jurnal bereputasi internasional",
    },
    {
      number: 2,
      id: "substance_score_2_1",
      indicator: "Ketajaman perumusan masalah",
    },
    {
      number: 2,
      id: "substance_score_2_2",
      indicator: "Inovasi pendekatan pemecahan masalah",
    },
    {
      number: 2,
      id: "substance_score_2_3",
      indicator: "State of the art dan kebaruan",
    },
    {
      number: 2,
      id: "substance_score_2_4",
      indicator: "Akurasi peta jalan (roadmap) penelitian",
    },
    {
      number: 3,
      id: "substance_score_3_1",
      indicator: "Akurasi metode penelitian",
    },
    {
      number: 3,
      id: "substance_score_3_2",
      indicator: "Kejelasan pembagian tugas tim peneliti",
    },
    {
      number: 3,
      id: "substance_score_3_3",
      indicator: "Kredibilitas mitra dan bentuk dukungan",
    },
    { number: 4, id: "substance_score_4_1", indicator: "Kebaruan referensi" },
    {
      number: 4,
      id: "substance_score_4_2",
      indicator: "Relevansi dan kualitas referensi",
    },
  ];

  const rowCounts = indicatorData.reduce((acc, item) => {
    acc[item.number] = (acc[item.number] || 0) + 1;
    return acc;
  }, {});

  let renderedNumbers = new Set();

  return (
    <div>
      <h2 className="text-xl font-bold text-violet-800 mb-4">
        Penilaian Substansi Usulan Penelitian
      </h2>
      <div className="p-6">
        <table className="table-auto border border-black w-full">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2" rowSpan={2}>
                No
              </th>
              <th className="border border-black px-4 py-2" rowSpan={2}>
                Usulan Pengusul
              </th>
              <th className="border border-gray-400 px-4 py-2" colSpan={4}>
                Skor
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2">1</th>
              <th className="border border-gray-300 p-2">2</th>
              <th className="border border-gray-300 p-2">3</th>
              <th className="border border-gray-300 p-2">4</th>
            </tr>
          </thead>
          <tbody>
            {indicatorData.map((item, index) => (
              <tr key={index}>
                {!renderedNumbers.has(item.number) && (
                  <td
                    rowSpan={rowCounts[item.number]}
                    className="border border-black px-4 py-2 text-center"
                  >
                    {item.number}
                  </td>
                )}
                <td className="border border-black px-4 py-2">
                  {item.indicator}
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
                {renderedNumbers.add(item.number) && null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-bold text-violet-800 mb-4">
        Catatan Usulan Penelitian
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

export default PenelitianProposalTab2;
