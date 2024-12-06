import React, { useState } from "react";
import TextAreaCmp from "../TextAreaCmp";

const PenelitianProposalTab2 = ({review, setReview}) => {
  const [des, setDes] = useState('');
  const [checked, setChecked] = useState({
    row1: [false, false, true, false],
    row2: [false, false, true, false],
    row3: [false, false, true, false],
    row4: [false, false, true, false],
    row5: [false, false, true, false],
    row6: [false, false, true, false],
    row7: [false, false, true, false],
    row8: [false, false, true, false],
    row9: [false, false, true, false],
    row10: [false, false, true, false],
    row11: [false, false, true, false],
    row12: [false, false, true, false],
  });

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const toggleCheckbox = (row, index) => {
    setChecked((prevState) => {
      const newRow = [...prevState[row]];
      newRow[index] = !newRow[index];
      return { ...prevState, [row]: newRow };
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-violet-800 mb-4">
        Penilaian Substansi Usulan Penelitian
      </h2>
      <div className="p-6">
        <table className="table-auto border border-black w-full">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2" rowSpan={2}>No</th>
              <th className="border border-black px-4 py-2" rowSpan={2}>Usulan Pengusul</th>
	  	<th className="border border-gray-400 px-4 py-2" colSpan={4}>Skor</th>
            </tr>	
		<tr>
      <th className="border border-gray-300 p-2">1</th>
      <th className="border border-gray-300 p-2">2</th>
      <th className="border border-gray-300 p-2">3</th>
      <th className="border border-gray-300 p-2">4</th>
    </tr>

          </thead>
          <tbody>
            {/* Rekam Jejak yang Relevan */}
            <tr>
              <td rowSpan="3" className="border border-black px-4 py-2 text-center">1</td>
              <td className="border border-black px-4 py-2">
                Publikasi, kekayaan intelektual, buku ketua pengusul yang disitasi pada proposal
              </td>
              {checked.row1.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">
                Relevansi kepakaran pengusul dengan tema proposal (kata kunci)
              </td>
              {checked.row2.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">
                Jumlah kolaborator publikasi jurnal bereputasi internasional
              </td>
              {checked.row3.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>

            {/* Urgensi Penelitian */}
            <tr>
              <td rowSpan="4" className="border border-black px-4 py-2 text-center">2</td>
              <td className="border border-black px-4 py-2">Ketajaman perumusan masalah</td>
              {checked.row4.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row2", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Inovasi pendekatan pemecahan masalah</td>
              {checked.row5.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">State of the art dan kebaruan</td>
              {checked.row6.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Akurasi peta jalan (roadmap) penelitian</td>
              {checked.row7.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>

            {/* Metode */}
            <tr>
              <td rowSpan="3" className="border border-black px-4 py-2 text-center">3</td>
              <td className="border border-black px-4 py-2">Akurasi metode penelitian</td>
              {checked.row8.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row3", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Kejelasan pembagian tugas tim peneliti</td>
              {checked.row9.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Kredibilitas mitra dan bentuk dukungan</td>
              {checked.row10.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>

            {/* Referensi */}
            <tr>
              <td rowSpan="2" className="border border-black px-4 py-2 text-center">4</td>
              <td className="border border-black px-4 py-2">Kebaruan referensi</td>
              {checked.row11.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row4", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Relevansi dan kualitas referensi</td>
              {checked.row12.map((isChecked, index) => (
                <td key={index} className="border border-black px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheckbox("row1", index)}
                    className="w-6 h-6 accent-blue-500"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-bold text-violet-800 mb-4">Catatan Usulan Penelitian</h2>
      <TextAreaCmp
        name="description"
        value={des}
        onChange={handleInputChange(setDes)}
        placeholder="Fill"
        rows={10}
      />
    </div>
  );
};

export default PenelitianProposalTab2;
