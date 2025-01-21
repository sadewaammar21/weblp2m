import React, { useState } from "react";
import Modal from "react-modal";
import SearchInput from "../../SearchInput";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";

Modal.setAppElement("#root");

const ModalEditProfileUser = ({ isOpen, onRequestClose, index, onSave }) => {
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
      <div className="bg-bluef-50 rounded-lg shadow-lg w-full p-4">
        {" "}
        {/* Mengurangi padding */}
        <div className="flex justify-between items-center">
          <div className="flex-1 pr-4">
            {" "}
            {/* Menambahkan padding kanan untuk sedikit spasi */}
            <h1 className="text-md font-bold text-violet-800">
              Yustina Retno Wahyu Utami
            </h1>
            <h1 className="text-md font-bold text-violet-800">
              Program Studi Informatika
            </h1>
          </div>
          <div className="flex-shrink-0">
            <img
              src={process.env.PUBLIC_URL + "/assets/user_profil.png"}
              alt="logo"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-10 my-5">
        <TextfieldCmp
          label="No KTP"
          //   value={studentData.name}
          //   name="name"
          //   onChange={handleInputChange}
          placeholder="3311*****"
        />
        <TextfieldCmp
          label="Alamat Surel"
          // value={studentData.email}
          // name="email"
          // onChange={handleInputChange}
          placeholder="Nama Instansi"
        />
        <div className="grid grid-cols-2 gap-x-3 ">
          <TextfieldCmp
            label="Tempat Lahir"
            // value={studentData.email}
            // name="email"
            // onChange={handleInputChange}
            placeholder="Tempat Lahir"
          />
          <TextfieldCmp
            label="Tanggal Lahir"
            // value={studentData.phone}
            // name="phone"
            // onChange={handleInputChange}
            placeholder="Masukkan Nama Lengkap"
          />
        </div>
        <TextfieldCmp
          label="Website Personal"
          value={studentData.role}
          name="role"
          onChange={handleInputChange}
          placeholder="-"
        />
        <TextfieldCmp
          label="No Hp"
          //   value={studentData.role}
          //   name="role"
          //   onChange={handleInputChange}
          placeholder="0821****"
        />
        <TextAreaCmp
          label="Alamat"
          //   value={studentData.task}
          //   name="task"
          //   onChange={handleInputChange}
          //   placeholder="Enter your description here..."
          rows={3}
        />
        <TextfieldCmp
          label="No telp"
          //   value={studentData.role}
          //   name="role"
          //   onChange={handleInputChange}
          placeholder="0271-****"
        />
      </div>

      <div className="flex justify-end space-x-4 mt-5">
        <button
          className="bg-white text-bluef-500 border border-bluef-500 px-4 py-2 rounded hover:bg-bluef-100"
          onClick={onRequestClose}
        >
          Back
        </button>
        <button
          className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-bluef-100"
          onClick={handleSave} // Replace with the desired action
        >
          Submit Form
        </button>
      </div>
    </Modal>
  );
};

export default ModalEditProfileUser;
