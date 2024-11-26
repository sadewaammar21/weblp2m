import React, {useState} from 'react'
import OperatorPenelitian from './OperatorPenelitian';
import OperatorPengabdian from './OperatorPengabdian';

const DashboardOperatorCmp = () => {
    const [activeTab, setActiveTab] = useState("penelitian");
  return (
    <div className=" min-h-screen p-5">
        <h1 className="text-lg font-semibold">
            PROFIL LEMBAGA PENELITIAN/PENGABDIAN KEPADA MASYARAKAT
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
        {activeTab === "penelitian" && <OperatorPenelitian />}
        {activeTab === "pengabdian" && <OperatorPengabdian />}
      </div>
      </div>
    </div>
  );
};

export default DashboardOperatorCmp