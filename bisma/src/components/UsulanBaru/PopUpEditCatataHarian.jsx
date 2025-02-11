import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import gaya bawaan dari react-datepicker
import { id } from "date-fns/locale"; // Impor locale bahasa Indonesia
import { getDetailLogbook } from "../../Features/ResearchSlice";
import { addLogbook } from "../../Features/ResearchSlice";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const PopUpEditCatatanHarian = ({ isOpen, onRequestClose, logbookId }) => {
  const [logbook, setLogbook] = useState({ type: "research" });

  const fetchLogbooks = async () => {
    const response = await getDetailLogbook(logbookId);
    console.log(response.data);
    setLogbook({ ...logbook, ...response });
    setLogbook({ ...logbook, type: "research" });
    console.log(logbook);
  };
  useEffect(() => {
    if (isOpen) {
      fetchLogbooks();
    }
  }, [isOpen]);

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

  const handleSubmit = () => {
    try {
      const response = addLogbook({
        id: logbook.id,
        dateActivity: logbook.date_activity,
        activityDescription: logbook.activity_description,
        percentage: logbook.percentage,
        document: logbook.document,
      });
      console.log("Response:", response);

      // Cek apakah response memiliki pesan sukses
      if (response) {
        toast.success(response); // ✅ Tampilkan notifikasi sukses
      } else {
        toast.success("Catatan harian berhasil ditambahkan!");
      }
      console.log(response);
      setLogbook({ type: "research" });
      onRequestClose();
    } catch (error) {
      console.error("Gagal menyimpan catatan harian:", error);

      const errorMessage =
        error.response?.data?.message || "Terjadi kesalahan!";

      toast.error(errorMessage);
    }
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
                Unggah Dokumen
              </label>
              {/* <button className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <FaPlus size={14} />
              </button> */}
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
          </div>

          {/* Persentase */}
          <div className="col-span-2">
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
