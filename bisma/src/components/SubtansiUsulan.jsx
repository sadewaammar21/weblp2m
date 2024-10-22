import React, { useState } from 'react';
import DropdownCmp from './DropdownCmp';
import TextAreaCmp from './TextAreaCmp';
import { FaPlus } from 'react-icons/fa';

const SubtansiUsulan = ({navigate}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [UTDP,setUTDP] = useState('');

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };
  
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const handleClick = () => {
    navigate('#'); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  const handleInputChange = (setter) =>(e)=>{
    setter(e.target.value);
  }

  return (
    <div>
      <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>2.1 Substansi Usulan</h1>
      <div className='grid grid-cols-2 gap-x-10  '>
        <DropdownCmp
          label="Kelompok Makro Riset *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}// Corrected here
          placeholder="Kelompok Riset teknologi tinggi"
        />
      
      <div>
      {/* Label dan Link untuk Unduh Template */}
      <div className="flex justify-between items-center mb-2">
        <label className="font-medium text-gray-700">Unggah Substansi Laporan *</label>
        <a href={process.env.PUBLIC_URL+"/assets/Isian Substansi Proposal - LPPM SINUS.docx"} className="text-blue-600 hover:underline flex items-center">
        <img 
          src={process.env.PUBLIC_URL + "/assets/download.svg"} 
          alt="logo" 
          className="w-5 h-5 mr-2"  
        />
          Unduh Template
        </a>
      </div>

      {/* Input untuk upload file */}
      <input
        type="file"
        onChange={handleFileChange}
        className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
        id="file-upload"
      />
      
      {/* Menampilkan nama file yang dipilih */}
      {selectedFile && (
        <p className="mt-2 text-gray-600">File yang dipilih: {selectedFile.name}</p>
      )}
    </div>
    </div>
    <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>2.2 Luaran Target Capaian</h1>
    <label className="mx-10 my-10 font-medium text-gray-700">Luaran Wajib</label>

    <div className='flex items-start space-x-4'>
        <div className='mt-7'>
            <button className="flex items-center px-2 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
              onClick={handleClick}>
              <FaPlus className="mr-2" /> {/* Icon tambah */}
              Tambah Usulan
            </button>
          </div>
          <div>
          <DropdownCmp
          label="Kelompok Makro Riset *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}// Corrected here
          placeholder="Kelompok Riset teknologi tinggi"
        />
          </div>
    </div>

    <div className='grid grid-cols-4 gap-x-10'>
    <DropdownCmp
          label="Kategori Luaran *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}// Corrected here
          placeholder="Pilih Kategori Luaran"
        />
        <DropdownCmp
          label="Kelompok Makro Riset *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}// Corrected here
          placeholder="Pilih Luaran"
        />
        <DropdownCmp
          label="Status *"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}// Corrected here
          placeholder="txt"
        />
        <TextAreaCmp
                label="Keterangan (optional)"
                name="description"
                value={UTDP}
                onChange={handleInputChange(setUTDP)}
                placeholder="url dan nama jurnal, penerbit, url paten"
                rows={3} 
              />
    </div>
    </div>
    
  );
};

export default SubtansiUsulan;
