import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { getToken } from "../../Features/AuthSlice";

Modal.setAppElement("#root");
const apiUrl = process.env.REACT_APP_API_URL;

const ModalEditDPPengabdian = ({ isOpen, onRequestClose, data, onUpdated }) => {
  const [form, setForm] = useState({
    nama_lembaga: "",
    alamat_lembaga: "",
    no_sk_lembaga: "",
    no_telp: "",
    email: "",
    website: "",
  });

  // Load data ke form saat modal dibuka
  useEffect(() => {
    if (data) {
      setForm({
        nama_lembaga: data.nama_lembaga ?? "",
        alamat_lembaga: data.alamat_lembaga ?? "",
        no_sk_lembaga: data.no_sk_lembaga ?? "",
        no_telp: data.no_telp ?? "",
        email: data.email ?? "",
        website: data.website ?? "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.post(
        `${apiUrl}/api/activity/update/${data.id}`,
        form,
        getToken()
      );

      onUpdated(); // refresh parent
      onRequestClose(); // tutup modal
    } catch (err) {
      console.error("UPDATE ERROR:", err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white rounded-lg shadow-lg p-6 w-[50%] mx-auto mt-20 max-h-[80vh] overflow-y-auto"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <h1 className="text-xl text-violet-800 font-bold mx-2 my-4">
        EDIT PROFIL LEMBAGA PENELITIAN
      </h1>

      <div className="space-y-2">
        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Nama Lembaga</p>
          <p>:</p>
          <input
            name="nama_lembaga"
            value={form.nama_lembaga}
            onChange={handleChange}
            className="border p-1 w-2/3"
          />
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Alamat Lembaga</p>
          <p>:</p>
          <input
            name="alamat_lembaga"
            value={form.alamat_lembaga}
            onChange={handleChange}
            className="border p-1 w-2/3"
          />
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Nomor SK Pendirian</p>
          <p>:</p>
          <input
            name="no_sk_lembaga"
            value={form.no_sk_lembaga}
            onChange={handleChange}
            className="border p-1 w-2/3"
          />
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">No Telepon</p>
          <p>:</p>
          <input
            name="no_telp"
            value={form.no_telp}
            onChange={handleChange}
            className="border p-1 w-2/3"
          />
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Email</p>
          <p>:</p>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border p-1 w-2/3"
          />
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Website</p>
          <p>:</p>
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            className="border p-1 w-2/3"
          />
        </div>
      </div>

      <div className="flex justify-end mt-5 space-x-4">
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

export default ModalEditDPPengabdian;
