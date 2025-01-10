import React, { useState } from "react";
import DropdownCmp from "../../DropdownCmp";
import TextAreaCmp from "../../TextAreaCmp";

const PerbaikanSubstansi = ({ navigate }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [UTDP, setUTDP] = useState("");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const handleClick = () => {
    navigate("#"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        {" "}
        Substansi Usulan
      </h1>
      <div className="grid grid-cols-2 gap-x-10  ">
        <DropdownCmp
          label="Kelompok Makro Riset *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)} // Corrected here
          placeholder="Kelompok Riset teknologi tinggi"
        />

        <div>
          {/* Label dan Link untuk Unduh Template */}
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium text-gray-700">
              Unggah Substansi Laporan *
            </label>
            <a
              href={
                process.env.PUBLIC_URL +
                "/assets/Isian Substansi Proposal - LPPM SINUS.docx"
              }
              className="text-blue-600 hover:underline flex items-center"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/download.svg"}
                alt="logo"
                className="w-5 h-5 mr-2"
              />
              Unduh Template
            </a>
          </div>

          {/* Label untuk Download Isian Substansi */}
          <div className="flex justify-between items-center">
            <label className="font-medium text-gray-700">
              Download Isian Substansi Revisi Proposal Penelitian
            </label>
            {/* Tombol Unggah Ulang */}
          </div>
          <div className="">
            <button
              onClick={handleFileChange}
              className="bg-oranges-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
            >
              Unggah Ulang
            </button>
          </div>

          {/* Menampilkan nama file yang dipilih */}
          {selectedFile && (
            <p className="mt-2 text-gray-600">
              File yang dipilih: {selectedFile.name}
            </p>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          {" "}
          Catatan Reviewer
        </h1>
        <div>
          <TextAreaCmp
            name="description"
            value={UTDP}
            onChange={handleInputChange(setUTDP)}
            placeholder="Enter your description here..."
            rows={10}
          />
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          {" "}
          Catatan Reviewer
        </h1>
        <div className="relative overflow-x-auto my-2">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 border border-black">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="border border-black px-4 py-2">No.</th>
                <th className="border border-black px-4 py-2">Mitra</th>
                <th className="border border-black px-4 py-2">Jenis Mitra</th>
                <th className="border border-black px-4 py-2">
                  Kontribusi Pendanaan
                </th>
                <th className="border border-black px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2">1</td>
                <td className="border border-black px-4 py-2">Mitra</td>
                <td className="border border-black px-4 py-2">Jenis Mitra</td>
                <td className="border border-black px-4 py-2">
                  Kontribusi Pendanaan
                </td>
                <td className="border border-black px-4 py-2">
                  <button onClick={handleClick}>
                    <img
                      src="/assets/edit_perusl.svg"
                      alt="Action Icon"
                      className="py-2 w-10 h-auto z-10"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PerbaikanSubstansi;
