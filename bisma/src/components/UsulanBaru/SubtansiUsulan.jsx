import React, { useState } from "react";
import DropdownCmp from "../DropdownCmp";
import TextAreaCmp from "../TextAreaCmp";
import { FaPlus } from "react-icons/fa";

const SubtansiUsulan = ({ navigate, data, setData }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [UTDP, setUTDP] = useState("");

  const handleDropdownChange = (option, fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: option,
    }));
    console.log("clicked" + option);
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      substance: event.target.files[0],
    }));
  };

  //tambah output
  const handleOutputChange = (index, name, value) => {
    const updatedOutput = [...data.output];
    updatedOutput[index][name] = value;
    setData({ ...data, output: updatedOutput });
    console.log(data.output);
  };

  const addOutputField = () => {
    setData({
      ...data,
      output: [
        ...data.output,
        {
          year: 0,
          id_category_output: 0,
          id_type_output: 0,
          status: "",
          description: "",
        },
      ],
    });
  };

  const handleClick = () => {
    navigate("#"); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        2.1 Substansi Usulan
      </h1>
      <div className="grid grid-cols-2 gap-x-10  ">
        <DropdownCmp
          label="Kelompok Makro Riset *"
          options={options}
          value={data.substance_id}
          onChange={(option) =>
            handleDropdownChange(option.value, "substance_id")
          }
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

          {/* Input untuk upload file */}
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
            id="file-upload"
          />

          {/* Menampilkan nama file yang dipilih */}
          {selectedFile && (
            <p className="mt-2 text-gray-600">
              File yang dipilih: {selectedFile.name}
            </p>
          )}
        </div>
      </div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        2.2 Luaran Target Capaian
      </h1>
      <label className="mx-10 my-10 font-medium text-gray-700">
        Luaran Wajib
      </label>

      <div className="flex items-start space-x-4">
        <div className="mt-7">
          <button
            className="flex items-center px-2 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={addOutputField}
          >
            <FaPlus className="mr-2" /> {/* Icon tambah */}
            Tambah Usulan
          </button>
        </div>
        <div></div>
      </div>

      {data.output.map((output, index) => (
        <div className="grid grid-cols-4 gap-x-10">
          <DropdownCmp
            label="Tahun Ke*"
            options={options}
            value={output.year}
            onChange={(option) => handleOutputChange(index, 'year', option.value)}
            placeholder="Tahun"
          />
          <DropdownCmp
            label="Kategori Luaran *"
            options={options}
            value={output.id_category_output}
            onChange={(option) => handleOutputChange(index, 'id_category_output', option.value)}
            placeholder="Pilih Kategori Luaran"
          />
          <DropdownCmp
            label="Kelompok Makro Riset *"
            options={options}
            value={output.id_type_output}
            onChange={(option) => handleOutputChange(index, 'id_type_output', option.value)}
            placeholder="Pilih Luaran"
          />
          <DropdownCmp
            label="Status *"
            options={options}
            value={output.status}
            onChange={(option) => handleOutputChange(index, 'status', option.value)}
            placeholder="txt"
          />
          <TextAreaCmp
            label="Keterangan (optional)"
            value={output.description}
            onChange={(e) => handleOutputChange(index, 'description', e.target.value)}
            placeholder="url dan nama jurnal, penerbit, url paten"
            rows={3}
          />
        </div>
      ))}
    </div>
  );
};

export default SubtansiUsulan;
