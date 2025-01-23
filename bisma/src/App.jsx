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
import UsulanBelumDitinjauKepalaLPPMPage from "./pages/UsulanBelumDitinjauKepalaLPPMPage";
import UsulanDisetujuiKepalaLPPMPage from "./pages/UsulanDisetujuiKepalaLPPMPage";
import UsulanDitolakKepalaLPPMPage from "./pages/UsulanDitolakKepalaLPPMPage";
import ListMonevPenelitianPage from "./pages/ListMonevPenelitianPage";
import ReviewMonevPenelitianPage from "./pages/ReviewMonevPenelitianPage";
import ProgressUsulanBaruPengabdianPage from "./pages/ProgressUsulanBaruPengabdianPage";
import ListLaporanAkhirPengabdianPage from "./pages/ListLaporanAkhirPengabdianPage";
import ProgresLaporanAkhirIntPage from "./pages/ProgresLaporanAkhirIntPage";
import ListCatatanHarianPage from "./pages/ListCatatanHarianPage";
import ViewCatatanHarianPengabdianPage from "./pages/ViewCatatanHarianPengabdianPage";
import MonevPengabdianListPage from "./pages/MonevPengabdianListPage";
import MonevPengabdianReviewerPage from "./pages/MonevPengabdianReviewerPage";
import PenilaianProposalPengabdianPage from "./pages/PenilaianProposalPengabdianPage";
import ProposalPengabdianPage from "./pages/ProposalPengabdianPage";
import UsulanRegulerPengabdianPage from "./pages/UsulanRegulerPengabdianPage";
import UsulanDraftPengabdianOPTPage from "./pages/UsulanDraftPengabdianOPTPage";
import UsulanDikirimPengabdianOPTPage from "./pages/UsulanDikirimPengabdianOPTPage";
import UsulanDisetujuiPengabdianOptPage from "./pages/UsulanDisetujuiPengabdianOptPage";
import UsulanDitolakOPTPage from "./pages/UsulanDitolakOPTPage";
import UsulanDitolakPengabdianOptPage from "./pages/UsulanDitolakPengabdianOptPage";
import HasilReviewPengabdianOptPage from "./pages/HasilReviewPengabdianOptPage";
import UsulanBelumDitinjauOptPengabdianPage from "./pages/UsulanBelumDitinjauOptPengabdianPage";
import PerbaikanUsulanPengabdianOptPage from "./pages/PerbaikanUsulanPengabdianOptPage";
import PeriodeKegiatanListPengabdianOptPage from "./pages/PeriodeKegiatanListPengabdianOptPage";
import PeriodeKegiatanPengabdianOptPage from "./pages/PeriodeKegiatanPengabdianOptPage";
import PerKegLaporanKemajuanPengabdianOptPage from "./pages/PerKegLaporanKemajuanPengabdianOptPage";
import PerKegLaporanAkhirPengabdianOptPage from "./pages/PerKegLaporanAkhirPengabdianOptPage";
import PeriodeKegiatanPenelitianPage from "./pages/PeriodeKegiatanPenelitianPage";
import PeriodeKegiatanListPenelitianOPTPage from "./pages/PeriodeKegiatanListPenelitianOPTPage";
import PerKegLaporanKemajuanPenelitianPage from "./pages/PerKegLaporanKemajuanPenelitianPage";
import PerKegLaporanAkhirPenelitianPage from "./pages/PerKegLaporanAkhirPenelitianPage";
import ResetPasswordListPage from "./pages/ResetPasswordListPage";
import ProfileUserListPage from "./pages/ProfileUserListPage";
import EditProfileUserPage from "./pages/EditProfileUserPage";
import DashboardKaprodiPage from "./pages/DashboardKaprodiPage";
import UserEditDosenPage from "./pages/UserEditDosenPage";
import UsulanBelumDitinjauKprPage from "./pages/UsulanBelumDitinjauKprPage";
import UsulanDisetujuiKprPage from "./pages/UsulanDisetujuiKprPage";
import UsulanDitolakKprPage from "./pages/UsulanDitolakKprPage";
import DashboardKeplLppmPage from "./pages/DashboardKeplLppmPage";

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
        <Route
          path="/dashboard-kepala-lppm"
          element={<DashboardKeplLppmPage />}
        />
        <Route
          path="/dashboard-kaprodi-dan-kepala"
          element={<DashboardKaprKepl />}
        />
        {/* kaprodi */}
        <Route
          path="/kaprodi/usulan-belum-ditinjau"
          element={<UsulanBelumDitinjauKprPage />}
        />
        <Route
          path="/kaprodi/usulan-disetujui"
          element={<UsulanDisetujuiKprPage />}
        />
        <Route
          path="/kaprodi/usulan-ditolak"
          element={<UsulanDitolakKprPage />}
        />

        <Route path="/dashboard-kaprodi" element={<DashboardKaprodiPage />} />
        {/* user */}
        <Route path="/dosen/edit-user" element={<UserEditDosenPage />} />
        {/* Dosen Penelitian*/}
        <Route path="/penelitian/usulan" element={<UsulanBaru />} />
        <Route
          path="/penelitian/detail/:id"
          element={<DetailPenelitianPage />}
        />
        <Route
          path="/penelitian/usulan/baru"
          element={<UsulanBaruPenelitian />}
        />
        <Route
          path="/penelitian/usulan/edit/:id"
          element={<UsulanBaruPenelitian />}
        />
        <Route path="/penelitian/perbaikan" element={<PerbaikanUsulan />} />
        <Route
          path="/penelitian/perbaikan/:id"
          element={<PerbaikanUsulanPeneitian />}
        />
        <Route
          path="/penelitian/catatan-harian"
          element={<CatatanHarianPenelitianPage />}
        />
        <Route
          path="/penelitian/catatan-harian/:id"
          element={<ViewCatatanHarianPage />}
        />
        <Route
          path="/penelitian/laporan-kemajuan"
          element={<LaporanKemajuanPage />}
        />
        <Route
          path="/penelitian/laporan-kemajuan/baru"
          element={<LaporanKemajuanPnltnPage />}
        />
        <Route
          path="/penelitian/laporan-kemajuan/edit"
          element={<LaporanKemajuanPnltnPage />}
        />
        <Route
          path="/penelitian/laporan-akhir"
          element={<LaporanAkhirPage />}
        />
        <Route
          path="/penelitian/laporan-akhir/baru"
          element={<LaporanAkhirPnltPage />}
        />
        <Route
          path="/penelitian/laporan-akhir/edit"
          element={<LaporanAkhirPnltPage />}
        />

        {/* Dosen Pengabdian*/}
        <Route
          path="/pengabdian/usulan"
          element={<ListUsulanBaruPengabdianPage />}
        />
        <Route
          path="/pengabdian/usulan/baru"
          element={<ProgressUsulanBaruPengabdianPage />}
        />
        <Route
          path="/pengabdian/usulan/edit/:id"
          element={<ProgressUsulanBaruPengabdianPage />}
        />
        <Route path="/detail-pengabdian" element={<DetailPengabdianPage />} />
        <Route
          path="/pengabdian/perbaikan"
          element={<PerbaikanUsulanListPage />}
        />
        <Route
          path="/pengabdian/perbaikan/:id"
          element={<ProgresPerUsPegabdianPage />}
        />
        <Route
          path="/pengabdian/laporan-kemajuan"
          element={<ListLaporanKemajuanInternalPage />}
        />
        <Route
          path="/pengabdian/laporan-kemajuan/baru"
          element={<LaporanKemajuanPengabdianPage />}
        />
        <Route
          path="/pengabdian/laporan-akhir"
          element={<ListLaporanAkhirPengabdianPage />}
        />
        <Route
          path="/pengabdian/laporan-akhir/baru"
          element={<ProgresLaporanAkhirIntPage />}
        />
        <Route
          path="/pengabdian/catatan-harian"
          element={<ListCatatanHarianPage />}
        />
        <Route
          path="/pengabdian/catatan-harian/:id"
          element={<ViewCatatanHarianPengabdianPage />}
        />
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
          path="/monitoring-usulan-reguler-usulan-dikirim"
          element={<UsulanDikirimOPTPage />}
        />
        <Route
          path="/monitoring-usulan-reguler-usulan-ditolak"
          element={<UsulanDitolakOPTPage />}
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
          path="/monitoring/pengabdian/usulan-pengabdian"
          element={<PerbaikanUsulanPengabdianOptPage />}
        />
        <Route
          path="/monitoring/penelitian/periode-kegiatan"
          element={<PeriodeKegiatanPenelitianPage />}
        />
        <Route
          path="/monitoring/penelitian/periode-kegiatan/list"
          element={<PeriodeKegiatanListPenelitianOPTPage />}
        />
        <Route
          path="/monitoring/penelitian/periode-kegiatan/laporan-kemajuan"
          element={<PerKegLaporanKemajuanPenelitianPage />}
        />
        <Route
          path="/monitoring/penelitian/periode-kegiatan/laporan-akhir"
          element={<PerKegLaporanAkhirPenelitianPage />}
        />
        {/* operator  pengabdian */}
        <Route
          path="/monitoring/pengabdian/usulan-reguler"
          element={<UsulanRegulerPengabdianPage />}
        />
        <Route
          path="/monitoring/pengabdian/usulan-draft"
          element={<UsulanDraftPengabdianOPTPage />}
        />
        <Route
          path="/monitoring/pengabdian/usulan-dikirm"
          element={<UsulanDikirimPengabdianOPTPage />}
        />
        <Route
          path="/monitoring/pengabdian/usulan-disetujui"
          element={<UsulanDisetujuiPengabdianOptPage />}
        />
        <Route
          path="/monitoring/pengabdian/usulan-dikirim"
          element={<UsulanDikirimPengabdianOPTPage />}
        />
        <Route
          path="/monitoring/pengabdian/usulan-ditolak"
          element={<UsulanDitolakPengabdianOptPage />}
        />
        <Route
          path="/monitoring/pengabdian/hasil-review"
          element={<HasilReviewPengabdianOptPage />}
        />
        <Route
          path="/monitoring/pengabdian/belum-ditinjau-review"
          element={<UsulanBelumDitinjauOptPengabdianPage />}
        />
        <Route
          path="/monitoring/pengabdian/perbaikan-usulan"
          element={<PerbaikanUsulan />}
        />
        <Route
          path="/monitoring-perbaikan-usulan-penelitian"
          element={<MonitoringUsulanPenelitianPage />}
        />
        <Route
          path="/monitoring/pengabdian"
          element={<MonitoringUsulanPengabdianPage />}
        />
        <Route
          path="/monitoring/pengabdian/periode-kegiatan"
          element={<PeriodeKegiatanPengabdianOptPage />}
        />
        <Route
          path="/monitoring/pengabdian/periode-kegiatan/list"
          element={<PeriodeKegiatanListPengabdianOptPage />}
        />
        <Route
          path="/monitoring/pengabdian/periode-kegiatan/laporan-kemajuan"
          element={<PerKegLaporanKemajuanPengabdianOptPage />}
        />
        <Route
          path="/monitoring/pengabdian/periode-kegiatan/laporan-akhir"
          element={<PerKegLaporanAkhirPengabdianOptPage />}
        />
        {/* penugasan reviewer */}
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
        <Route
          path="/review/penilaian-proposal-pengabdian"
          element={<PenilaianProposalPengabdianPage />}
        />
        <Route
          path="/review/penilaian-proposal-pengabdian/view"
          element={<ProposalPengabdianPage />}
        />
        {/* data pendukung */}
        <Route
          path="/monitoring/data-pendukung/edit-profil-lembaga"
          element={<DataPendukungPage />}
        />
        <Route
          path="/monitoring/data-pendukung/reset-password-user"
          element={<ResetPasswordListPage />}
        />
        <Route
          path="/monitoring/data-pendukung/profil-user-list"
          element={<ProfileUserListPage />}
        />
        <Route
          path="/monitoring/data-pendukung/edit-profil-user"
          element={<EditProfileUserPage />}
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
        <Route path="/pengabdian/monev" element={<MonevPengabdianListPage />} />
        <Route
          path="/pengabdian/monev/reviewer"
          element={<MonevPengabdianReviewerPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
