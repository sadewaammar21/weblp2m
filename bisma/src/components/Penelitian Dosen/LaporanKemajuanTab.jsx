import React from "react";
import { useState, useEffect } from "react";
import LaporanKemajuanTab1 from "./LaporanKemajuanTab1";
import LaporanKemajuanTab2 from "./LaporanKemajuanTab2";
import LaporanKemajuan from "./LaporanKemajuan";
import {
  addResearchProgressReport,
  getResearch,
  getResearchDetail,
  getResearchProgressReport,
} from "../../Features/ResearchSlice";
import { useLocation, useNavigate } from "react-router-dom";

const steps = [
  { id: 1, label: "Laporan Kemajuan" },
  { id: 2, label: "SPTB" },
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

const LaporanKemajuanTab = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLaporanKemajuan, setIsLaporanKemajuan] = useState(false);
  const [loading, setLoading] = useState(true);

  //data penelitian
  const [research, setResearch] = useState({});

  //data laporan kemajuan
  const location = useLocation();
  const { id, reportId } = location.state || {};
  const [report, setReport] = useState({});

  const fetchResearch = async () => {
    const response = await getResearchDetail(id);
    setResearch(response.data);
    console.log(research);
  };
  const fetchReport = async () => {
    try {
      if (reportId) {
        setLoading(true);
        const response = await getResearchProgressReport(reportId);
        setReport(response);
        console.log(report);
      } else {
        setReport({ summary: "", keyword: "", outputs: [] });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResearch();
    if (reportId) {
      fetchReport();
    }
  }, [reportId]);

  //handle next step
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
            research={research}
            data={report}
            setData={setReport}
          />
        );
      case 2:
        return (
          <LaporanKemajuanTab2
            research={research}
            data={report}
            setData={setReport}
          />
        );
      default:
        return null;
    }
  };

  if (isLaporanKemajuan) {
    return <LaporanKemajuan />;
  }

  const handleSubmit = async (status) => {
    if (reportId) {
      setReport({ ...report, status: status });
      // console.log(report)
      const response = await addResearchProgressReport({
        researchId: research.id,
        data: report,
        isEdit: true,
        reportId: report.id,
      });
      console.log(response);
      navigate(-1);
    } else {
      setReport({ ...report, status: status });
      // console.log(report)
      const response = await addResearchProgressReport({
        researchId: research.id,
        data: report,
        isEdit: false,
      });
      console.log(response);
      navigate(-1);
    }
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          USULAN PROPOSAL PENELITIAN
        </h1>
        <div className="container mx-auto">
          <div className="bg-gray-50 shadow-sm rounded-sm p-5">
            <ProgressBar currentStep={currentStep} />
            <div className="mt-6">
              {/* Kontainer dengan overflow scroll */}
              <div className=" p-4 border rounded">
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
    </div>
  );
};

export default LaporanKemajuanTab;
