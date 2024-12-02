import React, { useState } from "react";
import Modal from "react-modal";
import SearchInput from "../SearchInput";
import TextfieldCmp from "../TextfieldCmp";
import TextAreaCmp from "../TextAreaCmp";

Modal.setAppElement("#root");

const PopUpMhs = ({ isOpen, onRequestClose, index, onSave }) => {
  const [studentData, setStudentData] = useState({
    name: "",
    nim: "",
    address: "",
    email: "",
    phone: "",
    prodi: "",
    role: "",
    task: "",
  });

  const handleSearch = () => {
    // console.log("Search for:", NIM);
    // Add search logic here
  };

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setStudentData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  const handleSave = () => {
    onSave(index, studentData);
    onRequestClose();
    console.log(studentData);
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
        //   value={NIM}
        //   onChange={(e) => setNim(e.target.value)}
          onSearch={handleSearch}
          width="w-[50%]"
        />
      </div>

      <div>
        <TextfieldCmp
          label="Nama Lengkap"
          value={studentData.name}
          name="name"
          onChange={handleInputChange}
          placeholder="Masukkan Nama Lengkap"
        />
        <TextfieldCmp
          label="Nim"
          value={studentData.nim}
          name="nim"
          onChange={handleInputChange}
          placeholder="Masukkan Nama Lengkap"
        />
        <TextAreaCmp
          label="Alamat Tinggal"
          value={studentData.address}
          name="address"
          onChange={handleInputChange}
          placeholder="Masukkan Alamat Sesuai KTP"
          rows={3}
        />
        <div className="grid grid-cols-2 gap-x-10  ">
          <TextfieldCmp
            label="Email"
            value={studentData.email}
            name="email"
            onChange={handleInputChange}
            placeholder="Nama Instansi"
          />
          <TextfieldCmp
          label="Phone"
          value={studentData.phone}
          name="phone"
          onChange={handleInputChange}
          placeholder="Masukkan Nama Lengkap"
        />
          <TextfieldCmp
            label="Program Studi"
            value={studentData.prodi}
          name='prodi'
          onChange={handleInputChange}
            placeholder="Jurusan Yang sedang Ditempuh"
          />
        </div>
        <TextfieldCmp
          label="Peran"
          value={studentData.role}
          name='role'
          onChange={handleInputChange}
          placeholder="Peran  Mahasiswa"
        />
        <TextAreaCmp
          label="Tugas Dalam Pengabdian"
          value={studentData.task}
          name='task'
          onChange={handleInputChange}
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
          onClick={handleSave} // Replace with the desired action
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default PopUpMhs;
