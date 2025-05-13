import React, { useState, useEffect } from "react";
import DropdownCmp from "../../DropdownCmp";
import TextAreaCmp from "../../TextAreaCmp";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { getToken } from "../../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const SubtansiUsulan = ({ navigate, data, setData }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [target, setTarget] = useState(0);

  const handleDropdownChange = (option, fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: option.value,
    }));
  };

  const [outputServiceCategory, setOutputServiceCategory] = useState([]);
  const [outputServiceType, setOutputServiceType] = useState([]);

  const fetchOutputServiceCategory = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/output-service-category`,
        getToken()
      );
      setOutputServiceCategory(response.data);
    } catch (error) {
      console.error("Error fetching output-service-category", error);
    }
  };

  const fetchOutputServiceType = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/output-service-type`,
        getToken()
      );
      setOutputServiceType(response.data);
    } catch (error) {
      console.error("Error fetching output-service-type", error);
    }
  };

  useEffect(() => {
    fetchOutputServiceCategory();
    fetchOutputServiceType();

    // Inisialisasi output_service jika belum ada
    if (!Array.isArray(data.output_service)) {
      setData((prev) => ({
        ...prev,
        output_service: [],
      }));
    }
  }, []);

  const year = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  const status = [
    { value: "Tercapai", label: "Tercapai" },
  ];

  const mapToDropdown = (data, labelKey, valueKey) => {
    return Array.isArray(data)
      ? data.map((item) => ({
          label: item[labelKey],
          value: item[valueKey],
        }))
      : [];
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setData((prevData) => ({
      ...prevData,
      substance_document: event.target.files[0],
    }));
  };

  const handleOutputChange = (index, name, value) => {
    const updatedOutput = [...(data.output_service || [])];
    updatedOutput[index][name] = value;
    setData({ ...data, output_service: updatedOutput });
  };

  const addOutputField = () => {
    setData({
      ...data,
      output_service: [
        ...data.output_service,
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

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-10">
        <div>
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
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
            id="file-upload"
          />
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
            <FaPlus className="mr-2" />
            Tambah Usulan
          </button>
        </div>
      </div>

      {Array.isArray(data.output_service) &&
        data.output_service.map((output_service, index) => (
          <div className="grid grid-cols-4 gap-x-10" key={index}>
            <DropdownCmp
              label="Tahun Ke*"
              options={mapToDropdown(year, "value", "id")}
              value={mapToDropdown(year, "value", "id").find(
                (option) => option.value === output_service.year
              )}
              onChange={(option) =>
                handleOutputChange(index, "year", option.value)
              }
              placeholder="Tahun"
            />
            <DropdownCmp
              label="Kategori Luaran *"
              options={mapToDropdown(outputServiceCategory, "name", "id")}
              value={mapToDropdown(outputServiceCategory, "name", "id").find(
                (option) =>
                  option.value === output_service.id_category_output
              )}
              onChange={(option) =>
                handleOutputChange(index, "id_category_output", option.value)
              }
              placeholder="Pilih Kategori Luaran"
            />
            <DropdownCmp
              label="Tipe Luaran *"
              options={mapToDropdown(outputServiceType, "name", "id")}
              value={mapToDropdown(outputServiceType, "name", "id").find(
                (option) => option.value === output_service.id_type_output
              )}
              onChange={(option) =>
                handleOutputChange(index, "id_type_output", option.value)
              }
              placeholder="Pilih Tipe Luaran"
            />
            <DropdownCmp
              label="Status *"
              options={status}
              value={status.find(
                (option) => option.value === output_service.status
              )}
              onChange={(option) =>
                handleOutputChange(index, "status", option.value)
              }
              placeholder="Pilih Status"
            />
            <TextAreaCmp
              label="Keterangan (optional)"
              value={output_service.description}
              onChange={(e) =>
                handleOutputChange(index, "description", e.target.value)
              }
              placeholder="url dan nama jurnal, penerbit, url paten"
              rows={3}
            />
          </div>
        ))}
    </div>
  );
};

export default SubtansiUsulan;