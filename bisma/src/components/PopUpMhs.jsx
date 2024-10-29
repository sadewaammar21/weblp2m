import React, { useState } from 'react';
import Modal from 'react-modal';
import SearchInput from './SearchInput';
import TextfieldCmp from './TextfieldCmp';
import TextAreaCmp from './TextAreaCmp';

Modal.setAppElement('#root');

const PopUpMhs = ({ isOpen, onRequestClose }) => {
    const [NIM, setNim] = useState('');
    const [textInput, setTextInput] = useState('');
    const [UTDP,setUTDP] = useState('');

    const handleSearch = () => {
        console.log('Search for:', NIM);
        // Add search logic here
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Added height limit and scrolling
            overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
        <h1 className="text-xl font-bold mx-5 my-5">Anggota Pengabdian - Form</h1>
        
            <div className="p-4">
                <SearchInput
                    label="NIM"
                    placeholder="Select NIM"
                    value={NIM}
                    onChange={(e) => setNim(e.target.value)}
                    onSearch={handleSearch}
                    width="w-[50%]"
                />
            </div>

            <div>
            <TextfieldCmp
                label="Nama Lengkap"
                value={textInput}
                onChange={handleInputChange(setTextInput)}
                placeholder="Masukkan Nama Lengkap"
            />
            <TextAreaCmp
                label="Alamat Tinggal"
                name="description"
                value={UTDP}
                onChange={handleInputChange(setUTDP)}
                placeholder="Masukkan Alamat Sesuai KTP"
                rows={3} 
            />
            <div className='grid grid-cols-2 gap-x-10  '>
            <TextfieldCmp
                label="Instansi"
                value={textInput}
                onChange={handleInputChange(setTextInput)}
                placeholder="Nama Instansi"
            />
            <TextfieldCmp
                label="Program Studi"
                value={textInput}
                onChange={handleInputChange(setTextInput)}
                placeholder="Jurusan Yang sedang Ditempuh"
            />
            <TextfieldCmp
                label="Alamat Surel"
                value={textInput}
                onChange={handleInputChange(setTextInput)}
                placeholder="Email Yang Masih Aktif"
            />
            <TextfieldCmp
                label="No. Handphone"
                value={textInput}
                onChange={handleInputChange(setTextInput)}
                placeholder="Nomer Handphone Yang Masih Aktif"
            />
            </div>
            <TextfieldCmp
                label="Peran"
                value={textInput}
                onChange={handleInputChange(setTextInput)}
                placeholder="Peran  Mahasiswa"
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
        
            <div className="flex justify-end space-x-4 mt-5">
                <button
                    className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
                    onClick={onRequestClose}
                >
                    Tutup
                </button>
                <button
                    className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => alert('Selesai')} // Replace with the desired action
                >
                    Selesai
                </button>
                </div>
        </Modal>
  );
};

export default PopUpMhs;
