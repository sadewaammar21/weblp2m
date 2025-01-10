import React, { useState } from "react";
import Modal from "react-modal";
import SearchInput from "../../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
// import TextAreaCmp from "../TextAreaCmp";

Modal.setAppElement("#root");

const ModalTambahDosen = ({ isOpen, onRequestClose, index, onSave }) => {
  const [nidn, setNidn] = useState("");
  const [memberData, setMemberData] = useState({
    id: 0,
    task: "",
    research_role: "",
    status: "",
  });
  const [UTDP, setUTDP] = useState("");

  const handleSearch = () => {
    console.log("Search for:", nidn);
    // Add search logic here
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setMemberData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleSave = () => {
    onSave(index, memberData);
    onRequestClose();
    console.log(memberData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto" // Limit height and add scrolling
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl font-bold mx-2 my-4">Anggota Pengabdian - Form</h1>
      <div className="p-4">
        <SearchInput
          label="NIDN"
          placeholder="select NIDN"
          value={nidn}
          onChange={(e) => setNidn(e.target.value)}
          onSearch={handleSearch}
          color="bg-blue-800"
        />
      </div>

      <div className="flex justify-center items-center my-4">
        <img
          src="/assets/user_dos.svg"
          alt="user icon"
          className="w-20 h-20 text-neutral-950 hover:text-neutral-70"
        />
      </div>
      <h1 className="flex justify-center items-center text-xl font-bold mx-2 my-2">
        Nama Dosen
      </h1>
      <h2 className="flex justify-center items-center text-lg font-serif mx-2 my-2">
        Universitas Tiga Serangkai - Informatika
      </h2>

      <div className="flex justify-between items-center my-2 mx-4">
        <h2 className="flex justify-center items-center text-md font-serif mx-2">
          Kualifikasi
        </h2>
        <h2 className="flex justify-center items-center text-md font-serif mx-2">
          Alamat Surel
        </h2>
      </div>
      <div className="flex justify-around items-center">
        <h2 className="flex justify-center items-center text-md font-serif ">
          -
        </h2>
        <h2 className="flex justify-center items-center text-md font-serif mx-2">
          email dosen
        </h2>
      </div>

      <div className="p-4">
        <TextfieldCmp
          label="Id"
          value={memberData.id}
          name="id"
          onChange={handleInputChange}
          placeholder="Anggota Pengusul"
        />
        <TextfieldCmp
          label="Peran"
          value={memberData.research_role}
          name="research_role"
          onChange={handleInputChange}
          placeholder="Anggota Pengusul"
        />
        <TextfieldCmp
          label="tugas"
          value={memberData.task}
          name="task"
          onChange={handleInputChange}
          placeholder="Anggota Pengusul"
        />
        <TextfieldCmp
          label="Status"
          value={memberData.status}
          name="status"
          onChange={handleInputChange}
          placeholder="Anggota Pengusul"
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
          onClick={handleSave} // Ganti dengan aksi yang sesuai
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default ModalTambahDosen;
