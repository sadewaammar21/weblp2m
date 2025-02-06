import React, { useState, useEffect } from "react";
import ListLaporanKemajuanInternal from "./ListLaporanKemajuanInternal";
import LaporanKemajuanTab1 from "./LaporanKemajuanTab1";
import LaporanKemajuanTab2 from "./LaporanKemajuanTab2";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addServiceProgressReport,
  getServiceDetail,
  getServiceProgressReport,
} from "../../../Features/ServiceSlice";
import { toast, ToastContainer } from "react-toastify";

const steps = [
  { id: 1, label: "Laporan Kemajuan" },
  { id: 2, label: "Pengunaan Anggaran" },
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <div key={step.id} className="flex-1">
          <div className="relative flex items-center">
            {/* Progress line */}
            <div
              className={`h-2 flex-1 rounded-full ${
                currentStep >= step.id ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
            {/* Step circle */}
            <div
              className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-sm border-2 ${
                currentStep >= step.id
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
            >
              {step.id}
            </div>
          </div>
          {/* Step label */}
          <div className="text-center mt-2 text-sm">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

const ProgressLaporanKemajuan = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLaporanKemajuan, setIsLaporanKemajuan] = useState(false);
  const [loading, setLoading] = useState(true);

  //data laporan kemajuan
  const location = useLocation();
  const { id, reportId } = location.state || {};
  const [report, setReport] = useState({});

  //data pengabdian
  const [service, setService] = useState({});

  // const fetchService = async () => {
  //   try {
  //     const response = await getServiceDetail(id);
  //     setService(response);
  //     console.log(service);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const fetchService = async () => {
    try {
      const response = await getServiceDetail(id);
      if (response && response.id) {
        setService(response);
        console.log("Service ID:", response.id);
      } else {
        console.log("Tidak ada service id");
      }
    } catch (error) {
      console.error("Error fetching service:", error);
      console.log("Tidak ada service id");
    }
  };

  const fetchReport = async () => {
    try {
      if (reportId) {
        const response = await getServiceProgressReport(reportId);
        setReport(response);
        console.log(report);
      } else {
        setReport({
          comunity_service_id: service.id,
          summary: "",
          keyword: "",
          substance: "",
          partner_contribution: "",
          budget_use: "",
          output_progress_report1s: [],
          output_progress_report2s: [],
          output_progress_report3s: [],
          output_progress_report4s: [],
          output_progress_report5s: [],
          output_progress_report6s: [],
          output_progress_report7s: [],
          output_progress_report8s: [],
          output_progress_report9s: [],
          output_progress_report10s: [],
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (reportId) {
      console.log("Report ID tersedia:", reportId);
    } else {
      console.log("Tidak ada report id");
    }
  }, [reportId]);

  useEffect(() => {
    fetchService();
    if (reportId) {
      fetchReport();
    }
  }, [reportId]);

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsLaporanKemajuan(true); // Pindah ke halaman UsulanBelumDiriview
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <LaporanKemajuanTab1
            service={service}
            data={report}
            setData={setReport}
          />
        );
      case 2:
        return (
          <LaporanKemajuanTab2
            service={service}
            data={report}
            setData={setReport}
          />
        );
      default:
        return <ListLaporanKemajuanInternal />;
    }
  };

  // if (isLaporanKemajuan) {
  //   return <ListLaporanKemajuanInternal />;
  // }

  // const handleSubmit = async (status) => {
  //   try {
  //     if (reportId) {
  //       setReport({ ...report, status: status });
  //       // console.log(report)
  //       const response = await addServiceProgressReport({
  //         serviceId: service.id,
  //         data: report,
  //         isEdit: true,
  //         reportId: report.id,
  //       });
  //       console.log(report);
  //       console.log(response);

  //       console.log("Response:", response);

  //       if (response?.data?.message) {
  //         toast.success(
  //           response.data.message || "Laporan Kemajuan telah disimpan."
  //         );
  //         await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay agar toast muncul sebelum navigasi
  //       }

  //       navigate(-1);
  //     } else {
  //       setReport({ ...report, status: status });
  //       // console.log(report)
  //       const response = await addServiceProgressReport({
  //         serviceId: service.id,
  //         data: report,
  //         isEdit: false,
  //       });
  //       console.log(response);
  //       console.log(report);

  //       if (response?.data?.message) {
  //         toast.success(
  //           response.data.message || "Laporan Kemajuan telah disimpan."
  //         );
  //         await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay agar toast muncul sebelum navigasi
  //       }
  //       navigate(-1);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);

  //     // Ambil pesan error dari response jika ada
  //     const errorMessage = error?.message || "Terjadi kesalahan!";
  //     toast.error(errorMessage);
  //   }
  // };
  const handleSubmit = async (status) => {
    try {
      // Perbarui status di state terlebih dahulu
      const updatedReport = { ...report, status };
      setReport(updatedReport);

      let response;

      if (reportId) {
        // Mode Edit
        response = await addServiceProgressReport({
          serviceId: service.id,
          data: updatedReport,
          isEdit: true,
          reportId: report.id,
        });
      } else {
        // Mode Tambah Baru
        response = await addServiceProgressReport({
          serviceId: service.id,
          data: updatedReport,
          isEdit: false,
        });
      }

      console.log("Response dari server:", response);

      // Cek apakah response memiliki message
      if (response.message) {
        // Navigasi ke halaman laporan kemajuan dengan pesan sukses
        navigate("/pengabdian/laporan-kemajuan", {
          state: {
            toastMessage:
              response.message || "Laporan Kemajuan telah disimpan.",
            toastType: "success",
          },
        });
      } else {
        throw new Error("Response tidak memiliki pesan.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan laporan:", error);

      // Ambil pesan error jika ada, atau gunakan pesan default
      const errorMessage = error.response?.message || "Terjadi kesalahan!";

      toast.error(errorMessage);
    }
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          LAPORAN KEMAJUAN PENGABDIAN
        </h1>
        <div className="container mx-auto">
          <div className="bg-gray-50 shadow-sm rounded-sm p-5">
            <ProgressBar currentStep={currentStep} />
            <div>
              <div className="bg-bluef-50 my-5 p-4 rounded-md shadow-sm flex items-center space-x-4">
                {/* Icon */}
                <div className="text-blue-600">
                  <img
                    src="/assets/icon_filesubs.svg"
                    alt="Action Icon"
                    className="py-2 w-10 h-auto z-10"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex justify-end mx-1">
                    <span className="bg-black text-white text-xs font-medium py-1 px-2 rounded">
                      Belum Unggah
                    </span>
                    <span className="bg-bluef-500 text-white text-xs font-medium py-1 px-2 rounded mx-1">
                      Tgl.Update:12 September 2024
                    </span>
                  </div>
                  <p className="text-md font-semibold font-sans text-black my-1">
                    Penelitian | Tahun Pelaksanaan 2024
                  </p>
                  <h2 className="text-lg font-bold text-gray-800">
                    {service.title}
                  </h2>

                  <div className="flex mx-1 my-2">
                    <span className="bg-cyan-500 text-white text-xs font-medium py-1 px-2 rounded">
                      Penelitian Fundamental–Reguler
                    </span>
                    <span className="bg-oranges-500 text-white text-xs font-medium py-1 px-2 rounded mx-1">
                      Tahun Pelaksanaan 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              {/* Kontainer dengan overflow scroll */}
              <div className="max-h-96 overflow-y-auto p-4 border rounded">
                {renderStepContent(currentStep)}
              </div>
            </div>

            <div className="flex justify-between my-10">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Previous
              </button>
              <div>
                <button
                  onClick={handleNextStep}
                  className={`px-4 py-2 bg-blue-600 text-white rounded ${currentStep === 2 ? "hidden" : ""}`}
                >
                  Next
                </button>
                <button
                  onClick={() => handleSubmit(1)}
                  className={`px-4 py-2 bg-blue-600 text-white rounded ${currentStep === 2 ? "" : "hidden"}`}
                >
                  Simpan
                </button>
                <button
                  onClick={() => handleSubmit(2)}
                  className={`px-4 py-2 bg-green-600 text-white rounded ${currentStep === 2 ? "" : "hidden"}`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProgressLaporanKemajuan;
