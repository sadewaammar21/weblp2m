import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../Features/AuthSlice";

import ModalEditDPPengabdian from "./ModalEditDPPengabdian";
import ModalEditDPPengabdianDosen from "./ModalEditDPPengabdianDosen";

const apiUrl = process.env.REACT_APP_API_URL;

const OperatorPengabdian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDos, setIsOpenDos] = useState(false);

  const [profile, setProfile] = useState({});

  // ====================== GET DATA (PENGABDIAN) ==========================
  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `${apiUrl}/api/activity/research`,
        getToken()
      );

      setProfile(res.data.data ?? {});
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setProfile({});
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ====================== MODAL HANDLER ===================================
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalDos = () => setIsOpenDos(true);
  const closeModalDos = () => setIsOpenDos(false);

  return (
    <div className="p-5 mx-5">
      {/* =============================================================
          PROFIL LEMBAGA PENGABDIAN
      ============================================================= */}

      <div className="flex justify-between">
        <h2 className="text-purple-600 font-bold text-lg mb-4">
          PROFIL LEMBAGA PENGABDIAN
        </h2>

        <button
          onClick={openModal}
          className="bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-300"
        >
          Edit
        </button>
      </div>

      <ModalEditDPPengabdian
        isOpen={isOpen}
        onRequestClose={closeModal}
        data={profile}
        onUpdated={fetchProfile}
      />

      <div className="space-y-2">
        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Nama Lembaga</p>
          <p>:</p>
          <p className="w-2/3">{profile?.nama_lembaga ?? ""}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Alamat Lembaga</p>
          <p>:</p>
          <p className="w-2/3">{profile?.alamat_lembaga ?? ""}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Nomor SK Pendirian</p>
          <p>:</p>
          <p className="w-2/3">{profile?.no_sk_lembaga ?? ""}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">No Telepon</p>
          <p>:</p>
          <p className="w-2/3">{profile?.no_telp ?? ""}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Email</p>
          <p>:</p>
          <p className="w-2/3">{profile?.email ?? ""}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Website</p>
          <p>:</p>
          <p className="w-2/3">{profile?.website ?? ""}</p>
        </div>
      </div>

      {/* ============================================================= */}
      <div className="flex-grow border-t border-black my-10"></div>

      {/* =============================================================
          PROFIL PIMPINAN LEMBAGA PENGABDIAN
      ============================================================= */}
      <div className="flex justify-between">
        <h2 className="text-purple-600 font-bold text-lg mb-4">
          PROFIL PIMPINAN LEMBAGA PENGABDIAN
        </h2>

        <button
          onClick={openModalDos}
          className="bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-300"
        >
          Edit
        </button>
      </div>

      <ModalEditDPPengabdianDosen
        isOpen={isOpenDos}
        onRequestClose={closeModalDos}
        data={profile?.activity_leader ?? {}}
        onUpdated={fetchProfile}
      />

      <div className="space-y-2">
        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Nama Jabatan Pimpinan</p>
          <p>:</p>
          <p className="w-2/3">{profile?.activity_leader?.position ?? ""}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">NIDN Pimpinan</p>
          <p>:</p>
          <p className="w-2/3">{profile?.activity_leader?.nidn ?? ""}</p>
        </div>

        <div className="flex items-center gap-x-4">
          <p className="w-1/3">Nama Pimpinan</p>
          <p>:</p>
          <p className="w-2/3">{profile?.activity_leader?.name ?? ""}</p>
        </div>
      </div>
    </div>
  );
};

export default OperatorPengabdian;
