import React, { useState, forwardRef } from "react";
import Modal from "react-modal";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setResearchProgressReportDeadline } from "../../Features/OperatorSlice";

Modal.setAppElement("#root");

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <div className="relative">
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      placeholder="dd/mm/yyyy"
      readOnly
      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <span
      className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
      onClick={onClick}
    >
      <FaCalendarAlt />
    </span>
  </div>
));

const ModalPerKegLaporanAkhir = ({ researchId, isOpen, onRequestClose }) => {
  const [startDate, setStartDate] = useState(null);

  const handleStartDateChange = (dateStr) => {
    const date = new Date(dateStr);
    const formattedDate = date.toISOString().split("T")[0]
    setStartDate(formattedDate);
  };

  const handleSubmit = async() => {
      const response = await setResearchProgressReportDeadline({researchId, data:{final_report_deadline:startDate}})
      console.log(response);
      console.log(startDate);
      setStartDate(null);
      onRequestClose()
    }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold">Deadline Laporan Akhir - Ubah</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onRequestClose}
          >
            &times;
          </button>
        </div>

        {/* Form Content */}
        <div className="grid grid-cols-1 gap-4 my-5">
          {/* Tanggal Awal */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tanggal Deadline
            </label>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              dateFormat="yyyy/MM/dd"
              customInput={<CustomInput />}
            />
          </div>
        </div>

        {/* Tombol Simpan */}
        <div className="flex justify-end space-x-4">
          <button
            className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
            onClick={onRequestClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPerKegLaporanAkhir;
