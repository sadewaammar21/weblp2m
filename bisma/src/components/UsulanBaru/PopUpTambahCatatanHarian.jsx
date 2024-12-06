import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchInput from '../SearchInput';
import TextfieldCmp from '../TextfieldCmp';
import TextAreaCmp from '../TextAreaCmp';
import { FaCalendarAlt, FaPlus } from 'react-icons/fa';

Modal.setAppElement('#root');

const PopUpTambahCatatanHarian = ({ isOpen, onRequestClose }) => {
  const [nidn, setNidn] = useState('');
//   const [textInput, setTextInput] = useState('');
//   const [UTDP,setUTDP] = useState('');

  const handleSearch = () => {
    console.log('Search for:', nidn);
    // Add search logic here
  };

//   const handleInputChange = (setter) => (e) => {
//     setter(e.target.value);
//   };

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
          <button className="text-gray-500 hover:text-gray-800">
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
                placeholder="dd/mm/yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-2.5 text-gray-500">
                <FaCalendarAlt/>
              </span>
            </div>
          </div>

          {/* Unggah Dokumen */}
          <div className="col-span-1 flex justify-end items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unggah Dokumen
              </label>
              <button className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <FaPlus size={14} />
              </button>
            </div>
          </div>

          {/* Uraikan Kegiatan */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Uraikan Kegiatan
            </label>
            <textarea
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
              type="text"
              placeholder="Text Field"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Tombol Simpan */}
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Simpan
          </button>
        </div>
      
    </div>
    </Modal>
  );
};

export default PopUpTambahCatatanHarian;
