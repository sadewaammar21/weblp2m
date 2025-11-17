import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import TextfieldCmp from "../../TextfieldCmp";
import TextAreaCmp from "../../TextAreaCmp";
import { getToken } from "../../../Features/AuthSlice";

Modal.setAppElement("#root");
const apiUrl = process.env.REACT_APP_API_URL;

const ModalEditProfileUser = ({ isOpen, onRequestClose, user, onSave }) => {
  const [form, setForm] = useState({
    nik: "",
    email: "",
    place_of_birth: "",
    date_of_birth: "",
    website: "",
    phone: "",
    address: "",
    telp: "",
  });

  // Prefill ketika modal dibuka
  useEffect(() => {
    if (user) {
      setForm({
        nik: user.nik ?? "",
        email: user.email ?? "",
        place_of_birth: user.place_of_birth ?? "",
        date_of_birth: user.date_of_birth ?? "",
        website: user.website ?? "",
        phone: user.phone ?? "",
        address: user.address ?? "",
        telp: user.telp ?? "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ==================== SAFE UPDATE TO API ====================
  const handleSubmit = async () => {
    try {
      let payload = { ...form };

      // Hapus field yang kosong agar tidak divalidasi backend
      Object.keys(payload).forEach((key) => {
        if (
          payload[key] === "" ||
          payload[key] === null ||
          payload[key] === undefined
        ) {
          delete payload[key];
        }
      });

      // Jangan kirim email kalau tidak berubah
      if (payload.email === user.email) {
        delete payload.email;
      }

      const res = await axios.post(
        `${apiUrl}/api/update-profile`,
        payload,
        getToken()
      );

      // Update local user
      const updatedUser = { ...user, ...payload };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      onSave(updatedUser);
      onRequestClose();
    } catch (err) {
      console.error("UPDATE ERROR:", err.response?.data || err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* ================= HEADER ================= */}
      <div className="bg-bluef-50 rounded-lg shadow-lg w-full p-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 pr-4">
            <h1 className="text-md font-bold text-violet-800">{user?.name}</h1>
            <h1 className="text-md font-bold text-violet-800">
              Program Studi: {user?.prodi_name ?? "-"}
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

      {/* ================= FORM ================= */}
      <div className="grid grid-cols-2 gap-x-10 my-5">
        <TextfieldCmp
          label="No KTP"
          name="nik"
          value={form.nik}
          onChange={handleChange}
          placeholder="3311xxxxxxx"
        />

        <TextfieldCmp
          label="Alamat Surel"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="email@example.com"
        />

        <div className="grid grid-cols-2 gap-x-3">
          <TextfieldCmp
            label="Tempat Lahir"
            name="place_of_birth"
            value={form.place_of_birth}
            onChange={handleChange}
            placeholder="Kota"
          />

          <TextfieldCmp
            label="Tanggal Lahir"
            name="date_of_birth"
            value={form.date_of_birth}
            onChange={handleChange}
            placeholder="yyyy-mm-dd"
          />
        </div>

        <TextfieldCmp
          label="Website Personal"
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder="https://"
        />

        <TextfieldCmp
          label="No HP"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="08xxxx"
        />

        <TextAreaCmp
          label="Alamat"
          name="address"
          value={form.address}
          onChange={handleChange}
          rows={3}
        />

        <TextfieldCmp
          label="No Telp"
          name="telp"
          value={form.telp}
          onChange={handleChange}
          placeholder="0271xxxx"
        />
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex justify-end space-x-4 mt-5">
        <button
          className="bg-white text-bluef-500 border border-bluef-500 px-4 py-2 rounded hover:bg-bluef-100"
          onClick={onRequestClose}
        >
          Back
        </button>
        <button
          className="bg-bluef-500 text-white px-4 py-2 rounded hover:bg-bluef-100"
          onClick={handleSubmit}
        >
          Submit Form
        </button>
      </div>
    </Modal>
  );
};

export default ModalEditProfileUser;
