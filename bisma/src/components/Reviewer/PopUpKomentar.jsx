import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchInput from '../SearchInput';
import TextfieldCmp from '../TextfieldCmp';
import TextAreaCmp from '../TextAreaCmp';

Modal.setAppElement('#root');

const ModalEditDPPengabdian = ({ isOpen, onRequestClose }) => {
  const [nidn, setNidn] = useState('');
  const [komentar1, setKomentar1] = useState('');
  const [komentar2, setKomentar2] = useState('');
//   const [textInput, setTextInput] = useState('');
//   const [UTDP,setUTDP] = useState('');

const handleInputChange = (setter) => (e) => setter(e.target.value);

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
      <h1 className="text-xl text-violet-800 font-bold mx-2 my-4"> EDIT PROFIL LEMABAGA PENGABDIAN</h1>

        <TextAreaCmp
              label="Uraian Tugas Dalam Penelitian *"
              name="description"
              value={komentar1}
              onChange={handleInputChange(setKomentar1)}
              placeholder="Enter your description here..."
              rows={6}
            />
        <TextAreaCmp
              label="Uraian Tugas Dalam Penelitian *"
              name="description"
              value={komentar2}
              onChange={handleInputChange(setKomentar2)}
              placeholder="Enter your description here..."
              rows={6}
            />


      
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

export default ModalEditDPPengabdian;
