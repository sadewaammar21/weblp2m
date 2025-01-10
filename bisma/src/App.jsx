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
import LaporanKemajuanPage from "./pages/LaporanKemajuanPage";
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
//pengabdian
import UsulanBaruPengabdianPage from "./pages/ListUsulanBaruPengabdianPage";
// operator
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
import LaporanKemajuanPnltnPage from "./pages/LaporanKemajuanPnltnPage";
import LaporanAkhirPage from "./pages/LaporanAkhirPage";
import LaporanAkhirPnltPage from "./pages/LaporanAkhirPnltPage";
import ListUsulanBaruPengabdianPage from "./pages/ListUsulanBaruPengabdianPage";
import ProgressUSBPengadianPage from "./pages/ProgressUSBPengadianPage";
import DetailPenelitianPage from "./pages/DetailPenelitianPage";
import PerbaikanUsulanListPage from "./pages/PerbaikanUsulanListPage";
import ProgresPerUsPegabdianPage from "./pages/ProgresPerUsPegabdianPage";
import DetailPengabdianPage from "./pages/DetailPengabdianPage";
import ListLaporanKemajuanInternalPage from "./pages/ListLaporanKemajuanInternalPage";
import LaporanKemajuanPengabdianPage from "./pages/LaporanKemajuanPengabdianPage";
import DashboardKepalaLPPMPage from "./pages/DashboardKepalaLPPMPage";
import UsulanBelumDitinjauKepalaLPPMPage from "./pages/UsulanBelumDitinjauKepalaLPPMPage";
import UsulanDisetujuiKepalaLPPMPage from "./pages/UsulanDisetujuiKepalaLPPMPage";
import UsulanDitolakKepalaLPPMPage from "./pages/UsulanDitolakKepalaLPPMPage";
import ListMonevPenelitianPage from "./pages/ListMonevPenelitianPage";
import ReviewMonevPenelitianPage from "./pages/ReviewMonevPenelitianPage";

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
        <Route path="/detail-penelitian" element={<DetailPenelitianPage />} />
        <Route path="/dashboard-operator" element={<DashboardOperator />} />
        <Route path="/dashboard-reviewer" element={<DashboardReviewer />} />
        <Route
          path="/dashboard-kaprodi-dan-kepala"
          element={<DashboardKaprKepl />}
        />
        <Route
          path="/dashboard-kepala-lppm"
          element={<DashboardKepalaLPPMPage />}
        />
        {/* Dosen */}
        <Route path="/usulanbaru" element={<UsulanBaru />} />
        <Route path="/perbaikanusulan" element={<PerbaikanUsulan />} />
        <Route path="/laporankemajuan" element={<LaporanKemajuanPage />} />
        <Route path="/laporanakhir" element={<LaporanAkhirPage />} />
        <Route path="/catatanakhir" element={<CatatanAkhir />} />
        <Route path="/luaran" element={<Luaran />} />
        <Route
          path="/usulan-baru-penelitian"
          element={<UsulanBaruPenelitian />}
        />
        <Route
          path="/usulan-penelitian-edit/:id"
          element={<UsulanBaruPenelitian />}
        />
        <Route
          path="/perbaikan-usulan-penelitian"
          element={<PerbaikanUsulanPeneitian />}
        />
        <Route
          path="/catatan-harian"
          element={<CatatanHarianPenelitianPage />}
        />
        <Route
          path="/catatan-harian-view"
          element={<ViewCatatanHarianPage />}
        />
        <Route
          path="/laporan-kemajuan-progres"
          element={<LaporanKemajuanPnltnPage />}
        />

        <Route
          path="/laporan-akhir-progres"
          element={<LaporanAkhirPnltPage />}
        />

        <Route
          path="/list-usulan-baru-pengabdian"
          element={<ListUsulanBaruPengabdianPage />}
        />
        <Route path="/detail-pengabdian" element={<DetailPengabdianPage />} />
        <Route
          path="/tambah-usulan-baru-pengabdian"
          element={<ProgressUSBPengadianPage />}
        />

        <Route
          path="/list-perbaikan-usulan-pengabdian"
          element={<PerbaikanUsulanListPage />}
        />
        <Route
          path="/perbaikan-usulan-pengabdian"
          element={<ProgresPerUsPegabdianPage />}
        />
        <Route
          path="/list-laporan-kemajuan-pengabdian"
          element={<ListLaporanKemajuanInternalPage />}
        />
        <Route
          path="/laporan-kemajuan-pengabdian"
          element={<LaporanKemajuanPengabdianPage />}
        />
        {/* Dosen */}

        {/* Operator */}
        <Route
          path="/monitoring-usulan-reguler"
          element={<UsulanRegulerPage />}
        />
        <Route
          path="/monitoring-usulan-reguler-usulan-draft"
          element={<UsulanDraftOPTPage />}
        />
        <Route
          path="/monitoring-usulan-reguler-usulan-dikirm"
          element={<UsulanDikirimOPTPage />}
        />
        <Route
          path="/monitoring-usulan-reguler-usulan-disetujui"
          element={<UsulanDisetujuiOPTPage />}
        />
        <Route
          path="/monitoring-usulan-reguler-usulan-ditolak"
          element={<UsulanDikirimOPTPage />}
        />
        <Route
          path="/monitoring-usulan-reguler-hasil-review"
          element={<HasilReviewPage />}
        />
        <Route
          path="/monitoring-usulan-reguler-belum-ditinjau-review"
          element={<UsulanBelumDitinjauOPTPage />}
        />
        <Route
          path="/monitoring-perbaikan-usulan"
          element={<PerbaikanUsulanOPTPage />}
        />
        <Route
          path="/monitoring-perbaikan-usulan-penelitian"
          element={<MonitoringUsulanPenelitianPage />}
        />
        <Route
          path="/monitoring-perbaikan-usulan-pengabdian"
          element={<MonitoringUsulanPengabdianPage />}
        />
        <Route
          path="/monitoring-data-pendukung"
          element={<DataPendukungPage />}
        />
        <Route
          path="/monitoring-pengelola-review"
          element={<PengelolaReviewPage />}
        />
        <Route
          path="/monitoring-pengelola-review-sbr1"
          element={<SBRPelakasanaanPage1 />}
        />
        <Route
          path="/monitoring-pengelola-review-sbr2"
          element={<SBRPelakasanaanPage2 />}
        />
        <Route
          path="/monitoring-pengelola-review-internal"
          element={<ReviewerInternalPage />}
        />
        <Route
          path="/monitoring-pengelola-review-eksternal"
          element={<ReviewerEksternalPage />}
        />
        {/* Reviewer */}
        <Route
          path="/review-penilaian-proposal"
          element={<PenilaianProposalPage />}
        />
        <Route
          path="/review-penelitian-proposal"
          element={<PenelitianProposalPage />}
        />
        <Route
          path="/review-usulan-sudah-dinilai-penelitian"
          element={<UsulanSudahDinilaiRvwPage />}
        />
        {/* kepla LPPM */}
        <Route
          path="/kepala-lppm-usulan-belum-ditinjau"
          element={<UsulanBelumDitinjauKepalaLPPMPage />}
        />
        <Route
          path="/kepala-lppm-usulan-disetujui"
          element={<UsulanDisetujuiKepalaLPPMPage />}
        />
        <Route
          path="/kepala-lppm-usulan-ditolak"
          element={<UsulanDitolakKepalaLPPMPage />}
        />
        <Route
          path="/list-monev-penelitian"
          element={<ListMonevPenelitianPage />}
        />
        <Route
          path="/review-monev-penelitian"
          element={<ReviewMonevPenelitianPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
