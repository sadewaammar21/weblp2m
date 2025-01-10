import React, { useState } from "react";
import TextAreaCmp from "../TextAreaCmp";
import TextfieldCmp from "../TextfieldCmp";
import { FaDownload } from "react-icons/fa";
import ModalEditLapKemajuanTab1 from "./ModalEditLapKemajuanTab1";
 
const LaporanKemajuanTab1 = ({ research, data, setData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const openModal = (index) => {
    setIsOpen(true);
    setOutputIndex(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = () => (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
    console.log(data)
  };

  const [outputIndex, setOutputIndex] = useState(0);
  const handleOutputData = (index, outputData) => {
    const updatedOutput = [...data.outputs];
    updatedOutput[index] = outputData;
    setData({...data, outputs: updatedOutput});
    console.log(data);
  }

  return (
    <div>
      <div>
        <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
          {/* Icon */}
          <div className="text-blue-600">
            <img
              src="/assets/icon_filesubs.svg"
              alt="Action Icon"
              className="py-2 w-10 h-auto z-10"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex justify-end mx-1">
              <span className="bg-black text-white text-xs font-medium py-1 px-2 rounded">
                Belum Unggah
              </span>
              <span className="bg-bluef-500 text-white text-xs font-medium py-1 px-2 rounded mx-1">
                Tgl.Update:12 September 2024
              </span>
            </div>
            <p className="text-md font-semibold font-sans text-black my-1">
              Penelitian | Tahun Pelaksanaan 2024
            </p>
            <h2 className="text-lg font-bold text-gray-800">
              {research.title}
            </h2>

            <div className="flex mx-1 my-2">
              <span className="bg-cyan-500 text-white text-xs font-medium py-1 px-2 rounded">
                Penelitian Fundamental–Reguler
              </span>
              <span className="bg-oranges-500 text-white text-xs font-medium py-1 px-2 rounded mx-1">
                Tahun Pelaksanaan 2024
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ModalEditLapKemajuanTab1 data={data.outputs} isOpen={isOpen} onRequestClose={closeModal} index={outputIndex} onSave={handleOutputData}/>
        <label className="text-lg font-bold font-sans text-gray-800">
          Ringkasan
        </label>
        <h2 className="text-md font-sans text-gray-800 my-5">
          Tuliskan secara ringkas latar belakang penlitian, tujuan dan tahapan
          metode, luaran yang ditargetkan, dan hasil yang diperoleh sesuai
          dengan tahun pelaksanaan
        </h2>
        <TextAreaCmp 
          value={data.summary}
          name='summary'
          onChange={handleInputChange()}
          placeholder={`Ringksan Penelitian`} 
          rows={4} 
        />
      </div>
      <div>
        <label className="text-lg font-bold font-sans text-gray-800">
          Keyword
        </label>
        <h2 className="text-md font-sans text-gray-800 my-5">
          Maksimal 5 kata kunci. Gunakan tanda baca titik koma(;) sebagai
          perintah
        </h2>
        <TextfieldCmp
          value={data.keyword}
          name="keyword"
          onChange={handleInputChange()}
          placeholder={`Keyword1;keyword2;keyword3`}
          height="h-10"
        />
      </div>

      <div>
        <label className="text-lg font-bold font-sans text-gray-800">
          Substansi Laporan
        </label>
        <h2 className="text-md font-sans text-gray-800 my-5">
          Unggah dokumen substansi laporan kemajuan dalam format PDF sesuai
          dengan template yang disediakan, dan klik simpan perubahan
        </h2>
        <div>
          {/* Label dan Link untuk Unduh Template */}
          <div className="flex items-center space-x-4">
            {/* Input file */}
            <input
              type="file"
              name='substance'
              onChange={(e) => handleFileChange(e)}
              className="border border-gray-300 rounded-lg p-2 w-1/2"
              id="file-upload"
            />

            {/* Tombol Unduh Template */}
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/Isian Substansi Proposal - LPPM SINUS.docx"
              }
              className="flex items-center bg-bluef-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-bluef-200 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <FaDownload className="w-3 h-3 mr-2 text-white" />
              Unduh Template
            </a>
          </div>
        </div>
      </div>
      <div>
        <label className="text-lg font-bold font-sans text-gray-800 mx-5">
          Realisasi Keterlibatan/Kontribusi Mitra
        </label>

        <div>
          {/* Label dan Link untuk Unduh Template */}
          <div>
            {/* Input file */}
            <input
              type="file"
              name="partner_contribution"
              onChange={(e) => handleFileChange(e)}
              className="border border-gray-300 rounded-lg p-2 w-1/2"
              id="file-upload"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="flex items-center bg-bluef-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-bluef-200 focus:outline-none focus:ring focus:ring-blue-300">
          Simpan Perubahan
        </button>
      </div>
      <div>
        <h1 className="text-lg font-bold font-sans text-violet-800">
          Luaran Wajib
        </h1>
      </div>
      {/* Tabel */}
      <div className="relative overflow-x-auto my-10">
        <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-gray-300">
          <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="border border-black px-4 py-2 align-middle">No</th>
              <th className="border border-black px-4 py-2 align-middle">
                Judul
              </th>
              <th className="border border-black px-4 py-2 align-middle">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {(research?.output || []).map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2 align-middle">{index+1}</td>
                <td className="border border-black px-4 py-2 break-words text-right">
                  {item.description}
                </td>
                <td className="border border-black px-4 py-2 align-middle flex justify-center items-center">
                  <button
                    onClick={() => openModal(index)}
                    className="flex items-center px-2 py-1 rounded-md hover:text-cyan-500"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/assets/act_edit.svg"}
                      alt="penelitian"
                      className="w-7 h-7 mr-2"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LaporanKemajuanTab1;
