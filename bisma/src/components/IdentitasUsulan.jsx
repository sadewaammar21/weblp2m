import React, {useState} from 'react';
import TextfieldCmp from './TextfieldCmp';
import DropdownCmp from './DropdownCmp';
import TextAreaCmp from './TextAreaCmp';
import { FaPlus } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import PopupTKT from './PopupTKT';
import PopUpDosen from './PopUpDosen';
import PopUpMhs from './PopUpMhs';

const IdentitasUsulan = () => {
  const [Judul,setJudul] = useState('');
    const [tktSaatini,SetTktsaatini]= useState('');
    const [taTKT,setTatkt] = useState('');
    const [UTDP,setUTDP] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    // const navigate = useNavigate(); // Hook untuk navigasi
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDos, setIsOpenDos] = useState(false);
    const [isOpenMhs, setIsOpenMhs] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalDos = () => {
    setIsOpenDos(true);
  };

  const closeModalDos = () => {
    setIsOpenDos(false);
  };

  const openModalMhs = () => {
    setIsOpenMhs(true);
  };

  const closeModalMhs = () => {
    setIsOpenMhs(false);
  };

  // const handleClick = () => {
  //   navigate('/usulan-baru-penelitian'); // Arahkan ke halaman 'usulan-baru-penelitian'
  // };


    const handleInputChange = (setter) =>(e)=>{
      setter(e.target.value);
    }

    const handleDropdownChange = (option) => {
      setSelectedOption(option);
    };

    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ];

  return (
    <div>
        <div>
        <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>1.1 Identitas Usulan Penelitian </h1>
        <div className='grid grid-cols-3 gap-4'>
          <TextfieldCmp
          label="1. Judul*"
          value={Judul}
          onChange={handleInputChange(setJudul)}
          placeholder="Judul usulan baru"
          />
        <div className="relative">
        <div className="relative w-full "> {/* Set width as needed (e.g., w-1/2 for half page) */}
      <TextfieldCmp
        label="2. TKT Saat ini*"
        value={tktSaatini}
        onChange={handleInputChange(SetTktsaatini)}
        placeholder="TKT"
      />
      {/* Button placed outside the TextfieldCmp */}
      <button 
        className="absolute right-1 top-8 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-300 focus:outline-none"
        onClick={openModal}
      >
        ukur
      </button>
    </div>
  <PopupTKT isOpen={isOpen} onRequestClose={closeModal}/>
  <PopUpDosen isOpen={isOpenDos} onRequestClose={closeModalDos}/>
  <PopUpMhs isOpen={isOpenMhs} onRequestClose={closeModalMhs}/>
</div>
        <TextfieldCmp
          label="3. Target Akir TKT*"
          value={taTKT}
          onChange={handleInputChange(setTatkt)}
          placeholder="Judul usulan baru"
          />
        </div>
        </div>
        <div>
        <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>1.2 Pemilihan Program Penelitian </h1>
          <div className='grid grid-cols-2 gap-x-10  '>
          <DropdownCmp
            label="4. Kelompok Skema *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="10. Rumpun Ilmu Level 1 *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="5. Ruang Lingkup *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="11. Rumpun Ilmu Level 2 *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="6. Kategori SBK *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="12. Rumpun Ilmu Level 3 *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="7. Bidang Fokus Penelitian *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="13. Prioritas Riset "
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="8. Tema Penelitian *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="14. Tahun Pertama Usulan *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="9. Topik Penelitian *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          <DropdownCmp
            label="15. Lama Kegiatan *"
            options={options}
            selectedOption={selectedOption}
            onChange={(e) => handleDropdownChange(e.target.value)}
          />
          </div>
        <div>
          <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>1.3 Identitas Ketua </h1>
              <div className='grid grid-cols-2 gap-x-10  '>
              <TextfieldCmp
                label="Nama Ketua *"
                value={tktSaatini}
                onChange={handleInputChange(SetTktsaatini)}
                placeholder="TKT"
              />

              <TextAreaCmp
                label="Uraian Tugas Dalam Penelitian *"
                name="description"
                value={UTDP}
                onChange={handleInputChange(setUTDP)}
                placeholder="Enter your description here..."
                rows={6} 
              />
              </div>
          </div>
        </div>
        <div>
          <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>1.4 Identitas Pengusul - Anggota Peneliti Dosen </h1>
          <div>
            <button className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
              onClick={openModalDos}>
              <FaPlus className="mr-2" /> {/* Icon tambah */}
              Tambah Usulan
            </button>
          </div>
          <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">No</th>
                <th className="border border-black px-4 py-2">NIDN</th>
                <th className="border border-black px-4 py-2">Nama</th>
                <th className="border border-black px-4 py-2">Tugas</th>
                <th className="border border-black px-4 py-2">Status</th>
                <th className="border border-black px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
          
        </div>
          </div>
          <div>
          <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>1.5 Identitas Pengusul - Anggota Peneliti Mahasiswa </h1>
          <div>
            <button className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
              onClick={openModalMhs}>
              <FaPlus className="mr-2" /> {/* Icon tambah */}
              Tambah Usulan
            </button>
          </div>
          <div className="relative overflow-x-auto  my-10">
          <table className="w-full text-sm text-center bg-neutral-20 text-gray-500 dark:text-gray-400 border border-gray-300 ">
            <thead className="border border-gray-300 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-black">
                <th className="border border-black px-4 py-2">No</th>
                <th className="border border-black px-4 py-2">NIM</th>
                <th className="border border-black px-4 py-2">Nama</th>
                <th className="border border-black px-4 py-2">Instansi</th>
                <th className="border border-black px-4 py-2">Tugas</th>
                <th className="border border-black px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
          </div>
    </div>
  )
}

export default IdentitasUsulan