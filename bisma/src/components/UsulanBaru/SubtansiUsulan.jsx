import React, { useEffect, useState } from "react";
import DropdownCmp from "../DropdownCmp";
import TextAreaCmp from "../TextAreaCmp";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { getToken } from "../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const SubtansiUsulan = ({ navigate, data, setData }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [target, setTarget] = useState(0);

  const handleDropdownChange = (option, fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
    console.log("clicked" + option);
  };

  //data
  const [substance, setSubstance] = useState([]);
  const [outputCategory, setOutputCategory] = useState([]);
  const [outputType, setOutputType] = useState([]);

  const fetchSubstance = async() =>{
    const response = await axios.get(`${apiUrl}/api/substance`, getToken());
    setSubstance(response.data);
  }
  const fetchOutputCategory = async(scheme) =>{
    const response = await axios.get(`${apiUrl}/api/output-category/${scheme}`, getToken());
    setOutputCategory(response.data);
  }
  const fetchOutputType = async() =>{
    const response = await axios.get(`${apiUrl}/api/output-type`, getToken());
    setOutputType(response.data);
  }
  useEffect(()=>{
    fetchSubstance();
    fetchOutputCategory(data.scheme_id);
    fetchOutputType()
  }, [data.scheme_id, data.output.id_category_output]);

  const year= [
      {id: 1, value: 1},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4},
      {id: 5, value: 5},
    ];

  const status = [
    {value: 'submitted', label:'Submitted'},
    {value: 'draft', label:'Draft'}
  ]

  const mapToDropdown = (data, labelKey, valueKey) => {
    return data.map((item) => ({
      label: item[labelKey],
      value: item[valueKey]
    }))
  }

  //file
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
          options={mapToDropdown(substance, 'name', 'id')}
          value={mapToDropdown(substance, 'name', 'id').find((option) => option.value === data.substance_id)}
          onChange={(option) =>
            handleDropdownChange(option, "substance_id")
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
            options={mapToDropdown(year, 'value', 'id')}
            value={mapToDropdown(year, 'value', 'id').find((option) => option.value === output.year)}
            onChange={(option) => handleOutputChange(index, 'year', option.value)}
            placeholder="Tahun"
          />
          <DropdownCmp
            label="Kategori Luaran *"
            options={mapToDropdown(outputCategory, 'name', 'id')}
            value={mapToDropdown(outputCategory, 'name', 'id').find((option) => option.value === output.id_category_output)}
            onChange={(option) => handleOutputChange(index, 'id_category_output', option.value)}
            placeholder="Pilih Kategori Luaran"
          />
          <DropdownCmp
            label="Tipe Luaran *"
            options={mapToDropdown(outputType, 'name', 'id')}
            value={mapToDropdown(outputType, 'name', 'id').find((option) => option.value === output.id_type_output)}
            onChange={(option) => handleOutputChange(index, 'id_type_output', option.value)}
            placeholder="txt"
          />
          <DropdownCmp
            label="Status *"
            options={status}
            value={status.find((option) => option.value === output.status)}
            onChange={(option) => handleOutputChange(index, 'status', option.value)}
            placeholder="Pilih Luaran"
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
