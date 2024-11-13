import React, { useState } from 'react';
import Modal from 'react-modal';
import TextfieldCmp from './TextfieldCmp';
import DropdownCmp from './DropdownCmp';

Modal.setAppElement('#root');

const PopupTKT = ({ isOpen, onRequestClose }) => {
  const [textInput, setTextInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showTable, setShowTable] = useState(false); // State untuk mengontrol visibilitas tabel dan tombol

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    // Tampilkan tabel dan tombol jika dropdown dipilih
    if (option) {
      setShowTable(true);
    } else {
      setShowTable(false); // Sembunyikan tabel dan tombol jika tidak ada opsi yang dipilih
    }
  };

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold mx-5 my-5">Perhitungan TKT</h1>
      <div className="grid grid-cols-2 gap-4">
        <TextfieldCmp
          label="Teknologi yang dikembangkan*"
          value={textInput}
          onChange={handleInputChange(setTextInput)}
          placeholder="Judul usulan baru"
        />

        <DropdownCmp
          label="Kategori Indikator TKT*"
          options={options}
          selectedOption={selectedOption}
          onChange={(value) => handleDropdownChange(value)} // Panggil handler dengan nilai yang dipilih
          placeholder="Pilih kategori indikator"
        />
      </div>

      <h1 className="text-xl font-bold mx-5 my-5">Capaian Indikator TKT</h1>

      <div className="p-4 bg-bluef-50 w-full rounded-md">
        <div className="my-2 flex">
          <h2 className="text-md font-medium text-bluef-500 mr-1">
            Silahkan Pilih
          </h2>
          <h2 className="text-md font-bold text-bluef-500">
            Kategori Indikator TKT
          </h2>
          <h2 className="text-md font-medium text-bluef-500">
            terlebih dahulu, melanjutkan perhitungan
          </h2>
        </div>
      </div>

      {showTable && ( // Tampilkan tabel hanya jika `showTable` bernilai true
        <>
          <div className="relative overflow-x-auto my-10">
            <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300">
              <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="border border-black">
                  <th className="border border-black px-4 py-2">No</th>
                  <th className="border border-black px-20 py-2">Indikator</th>
                  <th className="border border-black px-30 py-2">Presentase (%)</th>
                </tr>
              </thead>
              <tbody>
                {/* Data tabel akan dimasukkan di sini */}
                <tr>
                  <td className="border border-black px-4 py-2">1</td>
                  <td className="border border-black px-20 py-2">Indikator 1</td>
                  <td className="border border-black px-30 py-2">50%</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">2</td>
                  <td className="border border-black px-20 py-2">Indikator 2</td>
                  <td className="border border-black px-30 py-2">70%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tampilkan tombol hanya jika `showTable` bernilai true */}
          <div className="flex justify-end space-x-4">
          <button
            className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
            onClick={onRequestClose}
          >
            Tutup
          </button>
            <button
              className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert('Selesai')} // Ganti dengan aksi yang sesuai
            >
              Selesai
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default PopupTKT;
