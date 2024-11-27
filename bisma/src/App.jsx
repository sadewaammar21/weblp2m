import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardKaprKepl from "./pages/DashboardKaprKepl";
import DashboardOperator from "./pages/DashboardOperator";
import DashboardReviewer from "./pages/DashboardReviewer";
import UsulanBaru from "./pages/UsulanBaru";
import PerbaikanUsulan from "./pages/PerbaikanUsulan";
import LaporanKemajuan from "./pages/LaporanKemajuan";
import LaporanAkhir from "./pages/LaporanAkhir";
import CatatanAkhir from "./pages/CatatanAkhir";
import Luaran from "./pages/Luaran";
import UsulanBaruPenelitian from "./pages/UsulanBaruPenelitian";
import PerbaikanUsulanPeneitian from "./pages/PerbaikanUsulanPeneitian";
import { getMe } from "./Features/AuthSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-operator" element={<DashboardOperator />} />
        <Route path="/dashboard-reviewer" element={<DashboardReviewer />} />
        <Route path="/dashboard-kaprodi-dan-kepala" element={<DashboardKaprKepl />} />
        <Route path="/usulanbaru" element={<UsulanBaru />} />
        <Route path="/perbaikanusulan" element={<PerbaikanUsulan />} />
        <Route path="/laporankemajuan" element={<LaporanKemajuan />} />
        <Route path="/laporanakhir" element={<LaporanAkhir />} />
        <Route path="/catatanakhir" element={<CatatanAkhir />} />
        <Route path="/luaran" element={<Luaran />} />
        <Route path="/usulan-baru-penelitian" element={<UsulanBaruPenelitian />} />
        <Route path="/perbaikan-usulan-penelitian" element={<PerbaikanUsulanPeneitian />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
