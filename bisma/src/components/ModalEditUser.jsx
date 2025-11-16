import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import TextfieldCmp from "./TextfieldCmp";
import TextAreaCmp from "./TextAreaCmp";

Modal.setAppElement("#root");

const ModalEditUser = ({ isOpen, onRequestClose, user, onSave }) => {
  const [formData, setFormData] = useState(user || {});

  // List Prodi
  const getProdiName = (id) => {
    const prodiList = [
      { id: 1, name: "D3 - Sistem Informasi Akuntantsi" },
      { id: 2, name: "D3 - Sistem Informasi" },
      { id: 3, name: "D3 - Teknologi Informasi" },
      { id: 4, name: "S1 - Sistem Informasi" },
      { id: 5, name: "S1 - Informatika" },
    ];
    const result = prodiList.find((p) => p.id === id);
    return result ? result.name : "-";
  };

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* HEADER */}
      <div className="bg-bluef-50 rounded-lg shadow-lg w-full p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 pr-4">
            <h1 className="text-md font-bold text-violet-800">
              {formData?.name || "-"}
            </h1>
            <h1 className="text-md font-bold text-violet-800">
              {getProdiName(formData?.id_prodi)}
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

      <h2 className="text-xl font-bold text-violet-700 mb-3">
        Edit Data Dosen
      </h2>

      {/* FORM */}
      <div className="grid grid-cols-2 gap-x-10 my-5">
        <TextfieldCmp
          label="No KTP"
          name="nik"
          value={formData.nik || ""}
          onChange={handleInputChange}
        />

        <TextfieldCmp
          label="Alamat Surel"
          name="email"
          value={formData.email || ""}
          onChange={handleInputChange}
        />

        <TextfieldCmp
          label="Tempat Lahir"
          name="place_of_birth"
          value={formData.place_of_birth || ""}
          onChange={handleInputChange}
        />

        <TextfieldCmp
          label="Tanggal Lahir"
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth || ""}
          onChange={handleInputChange}
        />

        <TextfieldCmp
          label="Website Personal"
          name="website"
          value={formData.website || ""}
          onChange={handleInputChange}
        />

        <TextfieldCmp
          label="No HP"
          name="phone"
          value={formData.phone || ""}
          onChange={handleInputChange}
        />

        <TextfieldCmp
          label="No Telepon"
          name="telp"
          value={formData.telp || ""}
          onChange={handleInputChange}
        />

        <TextAreaCmp
          label="Alamat"
          name="address"
          value={formData.address || ""}
          onChange={handleInputChange}
          rows={3}
        />
      </div>

      {/* BUTTON */}
      <div className="flex justify-end space-x-3 mt-5">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={onRequestClose}
        >
          Batal
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleSave}
        >
          Simpan
        </button>
      </div>
    </Modal>
  );
};

export default ModalEditUser;
