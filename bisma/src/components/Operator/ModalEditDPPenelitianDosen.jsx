import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import SearchInput from "../SearchInput";
import { getToken } from "../../Features/AuthSlice";

Modal.setAppElement("#root");
const apiUrl = process.env.REACT_APP_API_URL;

const ModalEditDPPenelitianDosen = ({
  isOpen,
  onRequestClose,
  data,
  onUpdated,
}) => {
  const [nidn, setNidn] = useState("");
  const [found, setFound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setFound({
        ...data,
        position: data.position || "Kepala",
      });
      setNidn(data.nidn ?? "");
    }
  }, [data]);

  // ===================== SEARCH BY NIDN ======================
  const handleSearch = async () => {
    if (!nidn) return;

    try {
      setLoading(true);

      const res = await axios.get(
        `${apiUrl}/api/dosen/search?nidn=${nidn}`,
        getToken()
      );

      const result = res.data.data ?? null;

      setFound((prev) => ({
        ...prev,
        nidn: result?.nidn || prev?.nidn,
        name: result?.name || prev?.name,
      }));
    } catch (err) {
      console.error("SEARCH ERROR:", err);
      setFound(null);
    } finally {
      setLoading(false);
    }
  };

  // ===================== UPDATE ======================
  const handleSave = async () => {
    if (!found) return;

    try {
      await axios.post(
        `${apiUrl}/api/activity/update/${data.id}`,
        {
          leader_nidn: found.nidn,
          leader_name: found.name,
          leader_position: found.position, // tambahan untuk jabatan
        },
        getToken()
      );

      onUpdated();
      onRequestClose();
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
      {/* ===================== TITLE ====================== */}
      <h1 className="text-xl font-bold mx-2 my-4">
        EDIT PROFIL LEMBAGA PENELITIAN
      </h1>

      {/* ===================== SEARCH ====================== */}
      <div className="p-4">
        <SearchInput
          label="NIDN"
          placeholder="Masukkan NIDN"
          value={nidn}
          onChange={(e) => setNidn(e.target.value)}
          onSearch={handleSearch}
          color={`bg-oranges-500`}
        />
      </div>

      {/* Foto */}
      <div className="flex justify-center items-center my-4">
        <img src="/assets/user_dos.svg" alt="user icon" className="w-20 h-20" />
      </div>

      {/* ===================== INPUT DATA ====================== */}
      {loading && <p className="text-center text-gray-500">Mencari dosen...</p>}

      <div className="space-y-4 mt-4">
        {/* JABATAN */}
        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Nama Jabatan Pimpinan</p>
          <p className="">:</p>
          <input
            type="text"
            className="w-2/3 border p-2 rounded"
            value={found?.position ?? ""}
            onChange={(e) =>
              setFound((prev) => ({ ...prev, position: e.target.value }))
            }
            placeholder="Masukkan nama jabatan"
          />
        </div>

        {/* NIDN */}
        <div className="flex items-center gap-x-4">
          <p className="w-1/3">NIDN Pimpinan</p>
          <p className="">:</p>
          <input
            type="text"
            className="w-2/3 border p-2 rounded"
            value={found?.nidn ?? ""}
            onChange={(e) =>
              setFound((prev) => ({ ...prev, nidn: e.target.value }))
            }
            placeholder="Masukkan NIDN"
          />
        </div>

        {/* NAMA */}
        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Nama</p>
          <p className="">:</p>
          <input
            type="text"
            className="w-2/3 border p-2 rounded"
            value={found?.name ?? ""}
            onChange={(e) =>
              setFound((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Masukkan nama pimpinan"
          />
        </div>
      </div>

      {/* ===================== BUTTON ====================== */}
      <div className="flex justify-end space-x-4 mt-6">
        <button
          className="bg-white text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
          onClick={onRequestClose}
        >
          Tutup
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSave}
          disabled={!found}
        >
          Selesai
        </button>
      </div>
    </Modal>
  );
};

export default ModalEditDPPenelitianDosen;
