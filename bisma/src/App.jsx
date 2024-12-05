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
import HasilReviewPage from "./pages/HasilReviewPage";
import UsulanDikirimOPTPage from "./pages/UsulanDikirimOPTPage";
import UsulanDisetujuiOPTPage from "./pages/UsulanDisetujuiOPTPage";
import UsulanDraftOPTPage from "./pages/UsulanDraftOPTPage";
import { getMe } from "./Features/AuthSlice";
import UsulanBelumDitinjauOPTPage from "./pages/UsulanBelumDitinjauOPTPage";
import UsulanRegulerPage from "./pages/UsulanRegulerPage";
import PerbaikanUsulanOPTPage from "./pages/PerbaikanUsulanOPTPage";
import MonitoringUsulanPenelitianPage from "./pages/MonitoringUsulanPenelitianPage";
import MonitoringUsulanPengabdianPage from "./pages/MonitoringUsulanPengabdianPage";
import DataPendukungPage from "./pages/DataPendukungPage";
import PengelolaReviewPage from "./pages/PengelolaReviewPage";
import SBRPelakasanaanPage1 from "./pages/SBRPelakasanaanPage1";
import SBRPelakasanaanPage2 from "./pages/SBRPelakasanaanPage2";
import ReviewerInternalPage from "./pages/ReviewerInternalPage";
import ReviewerEksternalPage from "./pages/ReviewerEksternalPage";
import UsulanBelumDiriviewPage from "./pages/PenilaianProposalPage";
import PenelitianProposalPage from "./pages/PenelitianProposalPage";
import UsulanSudahDinilaiRvwPage from "./pages/UsulanSudahDinilaiRvwPage";
import PenilaianProposalPage from "./pages/PenilaianProposalPage";
import CatatanHarianPenelitianPage from "./pages/CatatanHarianPenelitianPage";
import ViewCatatanHarianPage from "./pages/ViewCatatanHarianPage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-operator" element={<DashboardOperator />} />
        <Route path="/dashboard-reviewer" element={<DashboardReviewer />} />
        <Route path="/dashboard-kaprodi-dan-kepala" element={<DashboardKaprKepl />} />
        {/* Dosen */}
        <Route path="/usulanbaru" element={<UsulanBaru />} />
        <Route path="/perbaikanusulan" element={<PerbaikanUsulan />} />
        <Route path="/laporankemajuan" element={<LaporanKemajuan />} />
        <Route path="/laporanakhir" element={<LaporanAkhir />} />
        <Route path="/catatanakhir" element={<CatatanAkhir />} />
        <Route path="/luaran" element={<Luaran />} />
        <Route path="/usulan-baru-penelitian" element={<UsulanBaruPenelitian />} />
        <Route path="/usulan-penelitian-edit/:id" element={<UsulanBaruPenelitian />} />
        <Route path="/perbaikan-usulan-penelitian" element={<PerbaikanUsulanPeneitian />} />
        <Route path="/catatan-harian" element={<CatatanHarianPenelitianPage />} />
        <Route path="/catatan-harian-view" element={<ViewCatatanHarianPage />} />
        {/* Operator */}
        <Route path="/monitoring-usulan-reguler" element={<UsulanRegulerPage />} />
        <Route path="/monitoring-usulan-reguler-usulan-draft" element={<UsulanDraftOPTPage />} />
        <Route path="/monitoring-usulan-reguler-usulan-dikirm" element={<UsulanDikirimOPTPage />} />
        <Route path="/monitoring-usulan-reguler-usulan-disetujui" element={<UsulanDisetujuiOPTPage />} />
        <Route path="/monitoring-usulan-reguler-usulan-ditolak" element={<UsulanDikirimOPTPage />} />
        <Route path="/monitoring-usulan-reguler-hasil-review" element={<HasilReviewPage />} />
        <Route path="/monitoring-usulan-reguler-belum-ditinjau-review" element={<UsulanBelumDitinjauOPTPage />} />
        <Route path="/monitoring-perbaikan-usulan" element={<PerbaikanUsulanOPTPage />} />
        <Route path="/monitoring-perbaikan-usulan-penelitian" element={<MonitoringUsulanPenelitianPage />} />
        <Route path="/monitoring-perbaikan-usulan-pengabdian" element={<MonitoringUsulanPengabdianPage />} />
        <Route path="/monitoring-data-pendukung" element={<DataPendukungPage />} />
        <Route path="/monitoring-pengelola-review" element={<PengelolaReviewPage />} />
        <Route path="/monitoring-pengelola-review-sbr1" element={<SBRPelakasanaanPage1 />} />
        <Route path="/monitoring-pengelola-review-sbr2" element={<SBRPelakasanaanPage2 />} />
        <Route path="/monitoring-pengelola-review-internal" element={<ReviewerInternalPage />} />
        <Route path="/monitoring-pengelola-review-eksternal" element={<ReviewerEksternalPage />} />
        {/* Reviewer */}
        <Route path="/review-penilaian-proposal" element={<PenilaianProposalPage />} />
        <Route path="/review-penelitian-proposal" element={<PenelitianProposalPage />} />
        <Route path="/review-usulan-sudah-dinilai-penelitian" element={<UsulanSudahDinilaiRvwPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;