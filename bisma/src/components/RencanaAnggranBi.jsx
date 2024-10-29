import React, {useState} from 'react';
import { FaPlus } from 'react-icons/fa';
import DropdownCmp from './DropdownCmp';
import TextfieldCmp from './TextfieldCmp';

const RencanaAnggranBi = (navigate) => {

  const [selectedOption, setSelectedOption] = useState('');
  const [kelompok, setKelompok] = useState("");
  const [komponen, setKomponen] = useState("");
  const [item, setItem] = useState("");
  const [satuan, setSatuan] = useState("");
  const [volume, setVolume] = useState("");
  const [hargaSatuan, setHargaSatuan] = useState("");
  const [total, setTotal] = useState("");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };
  
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
  const kelompokOptions = ["Kelompok 1", "Kelompok 2", "Kelompok 3"];
  const komponenOptions = ["Komponen 1", "Komponen 2", "Komponen 3"];
  // const satuanOptions = ["Satuan 1", "Satuan 2", "Satuan 3"];


  const handleClick = () => {
    navigate('#'); // Arahkan ke halaman 'usulan-baru-penelitian'
  };

  // const handleInputChange = (setter) =>(e)=>{
  //   setter(e.target.value);
  // }

  return (
    <div>
       <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>3.1 Rencana Anggran Biaya </h1>
       <div className='px-10'>
       <div className='p-4 bg-violet-100 w-full rounded-md '>
        <div className='flex'>
       <img 
          src={process.env.PUBLIC_URL + "/assets/information.svg"} 
          alt="logo" 
          className="w-6 h-6 mr-4 "  
          />
          <h2 className='text-md font-bold text-violet-800'> Informasi</h2>
        </div>
        <div className='my-2 flex'>
        <h2 className='text-sm font-medium text-violet-800 mr-1'> Maksimal Usulan Dana Pertahun</h2>
        <h2 className='text-md font-bold text-violet-800'> Rp. 10.000.000</h2>
        </div>
       </div>
       </div>
       <div className='my-5 flex items-start space-x-4'>
        <div className='mt-7'>
            <button className="flex items-center px-2 py-2 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
              onClick={handleClick}>
              <FaPlus className="mr-2" /> {/* Icon tambah */}
              Tambah
            </button>
          </div>
          <div>
          <DropdownCmp
          label="Tahun Ke"
          options={options}
          selectedOption={selectedOption}
          onChange={(e) => handleDropdownChange(e.target.value)}// Corrected here
          placeholder="1"
        />
          </div>
    </div>
        <div className='grid grid-cols-8 gap-x-4'>
        <DropdownCmp
            label="Kelompok RAB"
            options={kelompokOptions}
            value={kelompok}
            onChange={(e) => setKelompok(e.target.value)}
            // width="w-204" 
          />
          <DropdownCmp
            label="Komponen"
            options={komponenOptions}
            value={komponen}
            onChange={(e) => setKomponen(e.target.value)}
            // width="w-40" // Custom width untuk dropdown
          />
          <TextfieldCmp
            label="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            width="w-64" // Custom width untuk text input
          />
          <TextfieldCmp
            label="Satuan"
            value={satuan}
            onChange={(e) => setSatuan(e.target.value)}
            width="w-20" // Custom width untuk text input
          />
           <TextfieldCmp
            label="Volume"
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            width="w-20" // Custom width untuk text input
          />
          <TextfieldCmp
            label="Harga Satuan"
            type="number"
            value={hargaSatuan}
            onChange={(e) => setHargaSatuan(e.target.value)}
            width="w-full" // Lebar penuh untuk text input
          />
          <TextfieldCmp
            label="Total"
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            width="w-full" // Lebar penuh untuk text input
          />
        </div>
        <div className='flex justify-between mx-5'>
          <h1 className='text-ml font-bold text-bluef-500 mx-5 my-5'>Total Anggaran</h1>
          <h1 className='text-ml font-bold  mx-5 my-5'> Rp.0</h1>
        </div>
    </div>
  )
}

export default RencanaAnggranBi