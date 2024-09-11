import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UsulanBaru from "./pages/UsulanBaru";
import PerbaikanUsulan from "./pages/PerbaikanUsulan";
import LaporanKemajuan from "./pages/LaporanKemajuan";
import LaporanAkhir from "./pages/LaporanAkhir";
import CatatanAkhir from "./pages/CatatanAkhir";
import Luaran from "./pages/Luaran";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/usulanbaru" element={<UsulanBaru/>} />
      <Route path="/perbaikanusulan" element={<PerbaikanUsulan/>} />
      <Route path="/laporankemajuan" element={<LaporanKemajuan/>} />
      <Route path="/laporanakhir" element={<LaporanAkhir/>} />
      <Route path="/catatanakhir" element={<CatatanAkhir/>} />
      <Route path="/luaran" element={<Luaran/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
