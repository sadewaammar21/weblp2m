import React, { useState } from "react";
import Modal from "react-modal";
import SearchInput from "../../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";

Modal.setAppElement("#root");

const ModalTambahDosen = ({ isOpen, onRequestClose, index, onSave }) => {
  const [nidn, setNidn] = useState("");
  const [memberData, setMemberData] = useState({
    id: 0,
    task: "",
    research_role: "",
    status: "",
  });
  const [rumpunIlmuLv1, setRumpunIlmuLv1] = useState("");
  const [rumpunIlmuLv2, setRumpunIlmuLv2] = useState("");
  const [rumpunIlmuLv3, setRumpunIlmuLv3] = useState("");

  const rumpunIlmuOptionsLv1 = [
    "ILMU BAHASA",
    "ILMU EKONOMI",
    "ILMU SOSIAL HUMANIORA",
    "MATEMATIKA DAN ILMU PENGETAHUAN ALAM (MIPA)",
    "ILMU TANAMAN",
    "ILMU HEWANI",
    "ILMU KEDOKTERAN",
    "ILMU TEKNIK",
    "AGAMA DAN FILSAFAT",
    "ILMU SENI, DESAIN DAN MEDIA",
  ];

  const rumpunIlmuOptionsLv2 = ["ILMU EKONOMI", "ILMU MANAJEMEN"];

  const rumpunIlmuOptionsLv3 = [
    "EKONOMI PEMBANGUNAN",
    "AKUNTANSI",
    "EKONOMI SYARIAH",
    "PERBANKAN",
    "PERPAJAKAN",
    "ASURANSI NIAGA (KERUGIAN)",
    "NOTARIAT",
    "BIDANG EKONOMI LAIN YANG BELUM TERCANTUM",
    "EKONOMI AKUNTANSI",
    "EKONOMI PEMASARAN",
  ];

  const handleSave = () => {
    const dataToSave = {
      ...memberData,
      rumpunIlmuLv1,
      rumpunIlmuLv2,
      rumpunIlmuLv3,
    };
    onSave(index, dataToSave);
    onRequestClose();
    console.log(dataToSave);
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setMemberData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold mx-2 my-4">Anggota Pengabdian - Form</h1>
      <div className="p-4">
        <SearchInput
          label="NIDN"
          placeholder="select NIDN"
          value={nidn}
          onChange={(e) => setNidn(e.target.value)}
          onSearch={() => console.log("Search for:", nidn)}
          color="bg-blue-800"
        />
      </div>

      <div className="p-4">
        <TextfieldCmp
          label="Peran"
          value={memberData.research_role}
          name="research_role"
          onChange={handleInputChange}
          placeholder="Anggota Pengusul"
        />
        <TextAreaCmp
          label="Tugas Dalam Pengabdian"
          value={memberData.task}
          name="task"
          onChange={handleInputChange}
          placeholder="Anggota Pengusul"
        />
      </div>
      <div className="p-4">
        <label className="block font-bold mb-2">Rumpun Ilmu Level 1</label>
        <select
          value={rumpunIlmuLv1}
          onChange={(e) => setRumpunIlmuLv1(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">Pilih Rumpun Ilmu Level 1</option>
          {rumpunIlmuOptionsLv1.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label className="block font-bold mt-4 mb-2">Rumpun Ilmu Level 2</label>
        <select
          value={rumpunIlmuLv2}
          onChange={(e) => setRumpunIlmuLv2(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">Pilih Rumpun Ilmu Level 2</option>
          {rumpunIlmuOptionsLv2.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label className="block font-bold mt-4 mb-2">Rumpun Ilmu Level 3</label>
        <select
          value={rumpunIlmuLv3}
          onChange={(e) => setRumpunIlmuLv3(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">Pilih Rumpun Ilmu Level 3</option>
          {rumpunIlmuOptionsLv3.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
          onClick={onRequestClose}
        >
          Tutup
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSave}
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default ModalTambahDosen;
