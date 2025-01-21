import React, {useEffect, useState } from "react";
import Modal from "react-modal";
import SearchInput from "../../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { getDetailServiceLogbook, addServiceLogbook } from "../../../Features/ServiceSlice";
import DropdownCmp from "../../DropdownCmp";

Modal.setAppElement("#root");

const PopUpEditCatatanHarian = ({ isOpen, onRequestClose, id }) => {
 const [logbook, setLogbook] = useState({
     id: id,
     date_activity: "",
     group_budget: "",
     nominal: "",
     file_number: "",
     activity_description: "",
     percentage: 0,
  });
 
   const fetchLogbooks = async () => {
      const response = await getDetailServiceLogbook(id);
      console.log(response);
      setLogbook(response);
      console.log(logbook);
    }
    useEffect(() => {
      if(isOpen){
        fetchLogbooks();
      }
    }, [isOpen])


  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setLogbook((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setLogbook((prevData) => ({
      ...prevData,
      document: event.target.files[0],
    }));
  };

  const kelompokBiaya = [
    { value: "Teknologi dan Inovasi", label: "Teknologi dan Inovasi" },
    { value: "Biaya Upah dan Jasa", label: "Biaya Upah dan Jasa" },
    { value: "Biaya Perjalanan", label: "Biaya Perjalanan" },
    { value: "Biaya Pelatihan", label: "Biaya Pelatihan" },
    { value: "Biaya Lainnya", label: "Biaya Lainnya" },
  ];

  const handleGroupBudget = (value) => {
    setLogbook({ ...logbook, group_budget: value });
    console.log(logbook.group_budget);
  };

  const handleSubmit = () => {
    const response = addServiceLogbook({
      id: logbook.comunity_service_id,
      dateActivity: logbook.date_activity,
      groupBudget: logbook.group_budget,
      nominal: logbook.nominal,
      fileNumber: logbook.file_number,
      activityDescription: logbook.activity_description,
      percentage: logbook.percentage,
      document: logbook.document,
      isEdit: true,
      logbookId: logbook.id
    });
    console.log(response);
    console.log(logbook);
    setLogbook({
      id: id,
      date_activity: "",
      group_budget: "",
      nominal: "",
      file_number: "",
      activity_description: "",
      percentage: 0,
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Limit height and add scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold">Catatan Harian - Form</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onRequestClose}
          >
            &times;
          </button>
        </div>

        {/* Form Content */}
        <div className="grid grid-cols-2 gap-4">
          {/* Tanggal */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tanggal
            </label>
            <div className="relative">
              <input
                type="text"
                name="date_activity"
                value={logbook.date_activity}
                onChange={(e) => handleInputChange(e)}
                placeholder="dd/mm/yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-2.5 text-gray-500">
                <FaCalendarAlt />
              </span>
            </div>
          </div>

          {/* Unggah Dokumen */}
          <div className="col-span-1 flex justify-end items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Berkas Bukti Biaya (kuitansi, tiket, dll)
              </label>
              {/* <button className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <FaPlus size={14} />
              </button> */}
              <input
                type="file"
                onChange={(e)=>handleFileChange(e)}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kelompok Biaya
            </label>
            <DropdownCmp
              width="w-full"
              options={kelompokBiaya}
              value={kelompokBiaya.find((option) => option.value === logbook.group_budget)}
              onChange={(option) => handleGroupBudget(option.value)} 
            />
          </div>

          {/* Persentase */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nominal
            </label>
            <input
            name="nominal"
            value={logbook.nominal}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Text Field"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nomor Berkas
            </label>
            <input
              name="file_number"
              value={logbook.file_number}
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="Text Field"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {/* Uraikan Kegiatan */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Uraikan Kegiatan
          </label>
          <textarea
            name="activity_description"
            value={logbook.activity_description}
            onChange={(e) => handleInputChange(e)}
            placeholder="Text Field"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Persentase
          </label>
          <input
            name="percentage"
            value={logbook.percentage}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Text Field"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tombol Simpan */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Simpan
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PopUpEditCatatanHarian;
