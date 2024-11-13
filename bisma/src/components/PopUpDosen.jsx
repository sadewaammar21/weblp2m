import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchInput from './SearchInput';
import TextfieldCmp from './TextfieldCmp';
import TextAreaCmp from './TextAreaCmp';

Modal.setAppElement('#root');

const PopUpDosen = ({ isOpen, onRequestClose }) => {
  const [nidn, setNidn] = useState('');
  const [textInput, setTextInput] = useState('');
  const [UTDP,setUTDP] = useState('');

  const handleSearch = () => {
    console.log('Search for:', nidn);
    // Add search logic here
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Limit height and add scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold mx-2 my-4">Anggota Pengabdian - Form</h1>
      <div className='p-4'>
        <SearchInput
          label="NIDN"
          placeholder="select NIDN"
          value={nidn}
          onChange={(e) => setNidn(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      <div className='flex justify-center items-center my-4'>
        <img
          src="/assets/user_dos.svg"
          alt="user icon"
          className="w-20 h-20 text-neutral-950 hover:text-neutral-70"
        />
      </div>
      <h1 className="flex justify-center items-center text-xl font-bold mx-2 my-2">Nama Dosen</h1>
      <h2 className="flex justify-center items-center text-lg font-serif mx-2 my-2">Universitas Tiga Serangkai - Informatika</h2>

      <div className='flex justify-between items-center my-2 mx-4'>
        <h2 className="flex justify-center items-center text-md font-serif mx-2">Kualifikasi</h2>
        <h2 className="flex justify-center items-center text-md font-serif mx-2">Alamat Surel</h2>
      </div>
      <div className='flex justify-around items-center'>
        <h2 className="flex justify-center items-center text-md font-serif ">-</h2>
        <h2 className="flex justify-center items-center text-md font-serif mx-2">email dosen</h2>
      </div>

      <div className='p-4'>
        <TextfieldCmp
          label="Peran"
          value={textInput}
          onChange={handleInputChange(setTextInput)}
          placeholder="Anggota Pengusul"
        />
        <TextAreaCmp
                label="Tugas Dalam Pengabdian"
                name="description"
                value={UTDP}
                onChange={handleInputChange(setUTDP)}
                placeholder="Enter your description here..."
                rows={3} 
              />
      </div>
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
    </Modal>
  );
};

export default PopUpDosen;
