import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchInput from '../SearchInput';
import TextfieldCmp from '../TextfieldCmp';
import TextAreaCmp from '../TextAreaCmp';

Modal.setAppElement('#root');

const ModalEditDPPenelitianDosen = ({ isOpen, onRequestClose }) => {
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
      <h1 className="text-xl font-bold mx-2 my-4"> EDIT PROFIL LEMABAGA PENELITIAN</h1>
      <div className='p-4'>
        <SearchInput
          label="NIDN"
          placeholder="select NIDN"
          value={nidn}
          onChange={(e) => setNidn(e.target.value)}
          onSearch={handleSearch}
          color={`bg-oranges-500`}
        />
      </div>

      <div className='flex justify-center items-center my-4'>
        <img
          src="/assets/user_dos.svg"
          alt="user icon"
          className="w-20 h-20 text-neutral-950 hover:text-neutral-70"
        />
      </div>
      

      <div className="space-y-2">
      <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Nama Jabatan Pimpinan</p>
    <p className="text-center">:</p>
    <p className="w-2/3" >Kepala</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">NIDN Pimpinan</p>
    <p className="text-center">:</p>
    <p className="w-2/3">0023037801</p>
  </div>

  <div className="flex items-center gap-x-4">
    <p className=" w-1/3">Nama</p>
    <p className="text-center">:</p>
    <p className="w-2/3">YUSTINA RETNO UTAMI</p>
  </div>

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

export default ModalEditDPPenelitianDosen;
