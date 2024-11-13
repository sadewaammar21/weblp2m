import React, { useState, useEffect } from "react";
import TextfieldCmp from "./TextfieldCmp";
import DropdownCmp from "./DropdownCmp";
import TextAreaCmp from "./TextAreaCmp";
import { FaPlus } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
import PopupTKT from "./PopupTKT";
import PopUpDosen from "./PopUpDosen";
import PopUpMhs from "./PopUpMhs";
import { getToken } from '../Features/AuthSlice';
import axios from 'axios';

const IdentitasUsulan = () => {

  const apiUrl = process.env.REACT_APP_API_URL;

  const [Judul, setJudul] = useState("");
  const [tktSaatini, SetTktsaatini] = useState("");
  const [taTKT, setTatkt] = useState("");
  const [UTDP, setUTDP] = useState("");
  const [des, setDes] = useState('');
  const [ket, setKet] = useState('');
  const [selectedOption, setSelectedOption] = useState("");
  // const navigate = useNavigate(); // Hook untuk navigasi
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDos, setIsOpenDos] = useState(false);
  const [isOpenMhs, setIsOpenMhs] = useState(false);
  const [kelompokSkema, setKelompokSkema] = useState(""); // State for selected "kelompok skema"
  const [dropdownOptions, setDropdownOptions] = useState([]); 
  const [skemaOptions, setSkemaOptions] = useState([]);
  const [skema, setSkema] = useState("");
  const [ctgOptions, setCtgOptions] = useState([]);
  const [category, setCategory] = useState("");
  const [fcsOptions, setFcsOptions] = useState([]);
  const [focus, setFocus] = useState("");
  const [thmOptions, setThmOptions] = useState([]);
  const [theme, setTheme] = useState("");
  const [tpcOptions, setTpcOptions] = useState([]);
  const [topic, setTopik] = useState("");
  const [rumpunIlmuLevel1Options, setRumpunIlmuLevel1Options] = useState([]);
const [rumpunIlmuLevel2Options, setRumpunIlmuLevel2Options] = useState([]);
const [rumpunIlmuLevel3Options, setRumpunIlmuLevel3Options] = useState([]);
const [prioritasRisetOptions, setPrioritasRisetOptions] = useState([]);
// const [tahunPertamaUsulanOptions, setTahunPertamaUsulanOptions] = useState([]);
// const [lamaKegiatanOptions, setLamaKegiatanOptions] = useState([]);
const [rumpunIlmuLevel1, setRumpunIlmuLevel1] = useState("");
const [rumpunIlmuLevel2, setRumpunIlmuLevel2] = useState("");
const [rumpunIlmuLevel3, setRumpunIlmuLevel3] = useState("");
const [prioritasRiset, setPrioritasRiset] = useState("");
const [tahunPertamaUsulan, setTahunPertamaUsulan] = useState("");
const [lamaKegiatan, setLamaKegiatan] = useState("");
const [error, setError] = useState("");



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

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  // const handleDropdownChange = (option) => {
  //   setSelectedOption(option);
  // };

  const year = [
    { label: "2024", value: 2024 },
    { label: "2023", value: 2023 }
];

  const options = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
  ];

  const fetchRuangLingkup = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/scope`, getToken());
      setDropdownOptions(response.data); // Set data or fallback to empty array
    } catch (error) {
      console.error("Error fetching scope data:", error);
    }
  };

  const fetchSkema = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/research-scheme/4`, getToken());
      setSkemaOptions(response.data );
// Set data or fallback to empty array
    } catch (error) {
      console.error("Error fetching skema data:", error);
    }
  };

  const fetchKategory = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/category`, getToken());
      setCtgOptions(response.data); // Set data or fallback to empty array
    } catch (error) {
      console.error("Error fetching skema data:", error);
    }
  };

  const fetchFocus = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/research-focus`, getToken());
      setFcsOptions(response.data); // Set data or fallback to empty array
    } catch (error) {
      console.error("Error fetching skema data:", error);
    }
  };

  const fetchTheme = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/research-theme/3`, getToken());
      setThmOptions(response.data ); // Set data or fallback to empty array
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching skema data:", error);
    }
  };

  const fetchTopic = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/research-topic/3`, getToken());
      setTpcOptions(response.data ); // Set data or fallback to empty array
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching skema data:", error);
    }
  };

  // Fetch untuk Rumpun Ilmu Level 1 (dropdown nomor 10)
const fetchRumpunIlmuLevel1 = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/cluster1`, getToken());
    setRumpunIlmuLevel1Options(response.data ); // Set data or fallback to empty array
  } catch (error) {
    console.error("Error fetching Rumpun Ilmu Level 1 data:", error);
  }
};

// Fetch untuk Rumpun Ilmu Level 2 (dropdown nomor 11)
const fetchRumpunIlmuLevel2 = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/cluster2`, getToken());
    setRumpunIlmuLevel2Options(response.data ); // Set data or fallback to empty array
  } catch (error) {
    console.error("Error fetching Rumpun Ilmu Level 2 data:", error);
  }
};

// Fetch untuk Rumpun Ilmu Level 3 (dropdown nomor 12)
const fetchRumpunIlmuLevel3 = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/cluster3`, getToken());
    setRumpunIlmuLevel3Options(response.data ); // Set data or fallback to empty array
  } catch (error) {
    console.error("Error fetching Rumpun Ilmu Level 3 data:", error);
  }
};

// Fetch untuk Prioritas Riset (dropdown nomor 13)
const fetchPrioritasRiset = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/research-priority`, getToken());
    setPrioritasRisetOptions(response.data ); // Set data or fallback to empty array
  } catch (error) {
    console.error("Error fetching Prioritas Riset data:", error);
  }
};






  useEffect(() => {
    fetchRuangLingkup();
    fetchSkema();
    fetchKategory();
    fetchFocus();
    fetchTheme();
    fetchTopic();
    fetchRumpunIlmuLevel1();
    fetchRumpunIlmuLevel2();
    fetchRumpunIlmuLevel3();
    fetchPrioritasRiset();
  }, []);

  // const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: Judul,
      leader_name:ket,
      leader_task:des,
      tkt_current: tktSaatini,
      tkt_final: taTKT,
      scheme_id: kelompokSkema,
      scope_id: kelompokSkema,
      cluster_lv1: rumpunIlmuLevel1,
      cluster_lv2: rumpunIlmuLevel2,
      cluster_lv3: rumpunIlmuLevel3,
      category_id: category,
      focus_id: focus,
      priority_id: prioritasRiset,
      theme_id: theme,
      year: tahunPertamaUsulan,
      topic_id: topic,
      duration: lamaKegiatan,
    };

      console.log(data);
    try {
      const response = await axios.post(`${apiUrl}/api/research`, data, getToken());
      if (response.status === 200) {
        console.log('Data submitted successfully:', response.data.data);
      } else {
        console.error('Failed to submit data:', response);
      }
    } catch (error) {
      console.error('Error submitting data:', error.response || error.message);
      setError('Failed to submit data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.1 Identitas Usulan Penelitian{" "}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <TextfieldCmp
            label="1. Judul*"
            value={Judul}
            onChange={handleInputChange(setJudul)}
            placeholder="Judul usulan baru"
          />
          <div className="relative">
            <div className="relative w-full ">
              {" "}
              {/* Set width as needed (e.g., w-1/2 for half page) */}
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
            <PopupTKT isOpen={isOpen} onRequestClose={closeModal} />
            <PopUpDosen isOpen={isOpenDos} onRequestClose={closeModalDos} />
            <PopUpMhs isOpen={isOpenMhs} onRequestClose={closeModalMhs} />
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
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.2 Pemilihan Program Penelitian{" "}
        </h1>
        <div className="grid grid-cols-2 gap-x-10  ">
        <DropdownCmp
          label="4.Kelompok Skema"
          options={skemaOptions.map((option) => ({
            label: option.name || "Unknown", // Ensuring name exists
            value: option.id || "Unknown", // Ensuring ID exists
          }))}
          selectedOption={skema}
          onChange={(value) => setSkema(value)}
          name="skema"
          placeholder="Pilih skema"
        />
          <DropdownCmp
            label="10. Rumpun Ilmu Level 1 *"
            options={rumpunIlmuLevel1Options.map((option) => ({
              label: option.name || "Unknown", // Ensuring name exists
              value: option.id || "Unknown", // Ensuring ID exists
            }))}
            selectedOption={rumpunIlmuLevel1}
            onChange={(value) => setRumpunIlmuLevel1(value)}
            placeholder="Pilih RIL 1"
          />
          <DropdownCmp
          label="5. Ruang Lingkup"
          options={dropdownOptions.map((option) => ({
            label: option.name || "Unknown", // Ensuring name exists
            value: option.id || "Unknown", // Ensuring ID exists
          }))}
          selectedOption={kelompokSkema}
          onChange={(value) => setKelompokSkema(value)}
          name="kelompokSkema"
          placeholder="Pilih kelompok skema"
        />
          <DropdownCmp
            label="11. Rumpun Ilmu Level 2 *"
            options={rumpunIlmuLevel2Options.map((option) => ({
              label: option.name || "Unknown", // Ensuring name exists
              value: option.id || "Unknown", // Ensuring ID exists
            }))}
            selectedOption={rumpunIlmuLevel2}
            onChange={(value) => setRumpunIlmuLevel2(value)}
            placeholder="Pilih RIL 2"
          />
          <DropdownCmp
            label="6. Kategori SBK *"
            options={ctgOptions.map((option) => ({
              label: option.name || "Unknown", // Ensuring name exists
              value: option.id || "Unknown", // Ensuring ID exists
            }))}
            selectedOption={category}
            onChange={(value) => setCategory(value)}
            placeholder={`Pilih Kategory SBK`}
          />
          <DropdownCmp
            label="12. Rumpun Ilmu Level 3 *"
            options={rumpunIlmuLevel3Options.map((option) => ({
              label: option.name || "Unknown", // Ensuring name exists
              value: option.id || "Unknown", // Ensuring ID exists
            }))}
            selectedOption={rumpunIlmuLevel3}
            onChange={(value) => setRumpunIlmuLevel3(value)}
            placeholder="Pilih RIL 3"
          />
          <DropdownCmp
            label="7. Bidang Fokus Penelitian *"
            options={fcsOptions.map((option) => ({
              label: option.name || "Unknown", // Ensuring name exists
              value: option.id || "Unknown", // Ensuring ID exists
            }))}
            selectedOption={focus}
            onChange={(value) => setFocus(value)}
            placeholder="Pilih Bidang Fokus pen."
          />
          <DropdownCmp
            label="13. Prioritas Riset "
            options={prioritasRisetOptions.map((option) => ({
              label: option.name || "Unknown", // Ensuring name exists
              value: option.id || "Unknown", // Ensuring ID exists
            }))}
            selectedOption={prioritasRiset}
            onChange={(value) => setPrioritasRiset(value)}
            placeholder="Pilih Prioritas Riset"
          />
          <DropdownCmp
            label="8. Tema Penelitian *"
            options={thmOptions.map((option) => ({
              label: option.name || "Unknown", // Ensuring name exists
              value: option.id || "Unknown", // Ensuring ID exists
            }))}
            selectedOption={theme}
            onChange={(value) => setTheme(value)}
            placeholder="Pilih Tema"
          />
          <DropdownCmp
    label="14. Tahun Pertama Usulan *"
    options={year}
    selectedOption={tahunPertamaUsulan}
    onChange={(value) => setTahunPertamaUsulan(parseInt(value))}
/>
          <DropdownCmp
            label="9. Topik Penelitian *"
            options={tpcOptions.map((option) => ({
              label: option.name || "Unknown", // Ensuring name exists
              value: option.id || "Unknown", // Ensuring ID exists
            }))}
            selectedOption={topic}
            onChange={(value) => setTopik(value)}
            placeholder="Pilih Topik pen."
          />
          <DropdownCmp
            label="15. Lama Kegiatan *"
            options={options}
            selectedOption={lamaKegiatan}
            onChange={(value) => setLamaKegiatan(value)}
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
            1.3 Identitas Ketua{" "}
          </h1>
          <div className="grid grid-cols-2 gap-x-10  ">
            <TextfieldCmp
              label="Nama Ketua *"
              value={ket}
              onChange={handleInputChange(setKet)}
              placeholder="TKT"
            />

            <TextAreaCmp
              label="Uraian Tugas Dalam Penelitian *"
              name="description"
              value={des}
              onChange={handleInputChange(setDes)}
              placeholder="Enter your description here..."
              rows={6}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.4 Identitas Pengusul - Anggota Peneliti Dosen{" "}
        </h1>
        <div>
          <button
            className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={openModalDos}
          >
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
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          1.5 Identitas Pengusul - Anggota Peneliti Mahasiswa{" "}
        </h1>
        <div>
          <button
            className="flex items-center px-4 py-2 mx-5 bg-bluef-500 text-white rounded-lg hover:bg-bluef-300 focus:outline-none"
            onClick={openModalMhs}
          >
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
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
    <div>
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">Submit</button>
      </div>
    </form>
  );
};

export default IdentitasUsulan;