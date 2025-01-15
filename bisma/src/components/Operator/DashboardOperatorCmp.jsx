import React, { useEffect, useRef, useState } from "react";
import UsulanBaruOPT from "./UsulanBaruOPT";
import OperatorDashbordPenelitian from "./OperatorDashbordPenelitian";
import OperatorDashboardPengabdian from "./OperatorDashboardPengabdian";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashboardOperatorCmp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("penelitian");

  const handleDropdownEnter = (dropdownId) => {
    setDropdown(dropdownId);
  };

  // Fungsi untuk sub-dropdown
  const handleSubDropdownEnter = () => {
    setSubDropdown(true);
  };

  const handleSubDropdownLeave = () => {
    setSubDropdown(false);
  };

  // Menangani klik di luar dropdown untuk menutup dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown();
        setSubDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div className=" min-h-screen p-5">
      <h1 className="text-lg text-neutral-500 font-semibold my-5">
        063040 - UNIVERSITAS TIGA SERANGKAI
        <br />
        KELOMPOK PT MADYA
      </h1>
      <h1 className="text-lg text-neutral-500 font-semibold my-5">
        PROFIL LEMABAGA PENELITIAN/PENGABDIAN KEPADA MASYARAKAT
      </h1>
      <div>
        <div className="flex justify-end border-b  max-w-6xl">
          <div>
            <button
              className={`px-4 py-2 rounded-md border border-1 border-violet-800 ${
                activeTab === "penelitian"
                  ? "bg-violet-800 text-white"
                  : "bg-white text-violet-800"
              }`}
              onClick={() => setActiveTab("penelitian")}
            >
              Penelitian
            </button>
            <button
              className={`px-4 py-2 rounded-md border border-1 border-violet-800 ${
                activeTab === "pengabdian"
                  ? "bg-violet-800 text-white"
                  : "bg-white text-violet-800"
              }`}
              onClick={() => setActiveTab("pengabdian")}
            >
              Pengabdian
            </button>
          </div>
        </div>
        <div className="bg-white max-w-6xl mx-auto shadow-md rounded-md">
          {/* Header dan Tombol Tab */}

          {/* Render Komponen Berdasarkan Tab Aktif */}
          {activeTab === "penelitian" && <OperatorDashbordPenelitian />}
          {activeTab === "pengabdian" && <OperatorDashboardPengabdian />}
        </div>
        <div className="mx-5 my-5"></div>
      </div>
    </div>
  );
};

export default DashboardOperatorCmp;
