import React from "react";
import ListLaporanKemajuanInternal from "./ListLaporanKemajuanInternal";
import LaporanKemajuanTab1 from "./LaporanKemajuanTab1";
import LaporanKemajuanTab2 from "./LaporanKemajuanTab2";

const steps = [
  { id: 1, label: "Laporran Kemajuan" },
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
              className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-sm border-2 ${
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
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isLaporanKemajuan, setIsLaporanKemajuan] = React.useState(false);

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
        return <LaporanKemajuanTab1 />;
      case 2:
        return <LaporanKemajuanTab2 />;
      default:
        return null;
    }
  };

  if (isLaporanKemajuan) {
    return <ListLaporanKemajuanInternal />;
  }

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          USULAN PROPOSAL PENELITIAN
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
                    Membangun Kemandirian Ekonomi Desa melalui Implementasi
                    Sistem Manajemen Pelaporan Keuangan Terintegrasi di BUMDesa
                    Sinergi Sidowayah
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
              <button
                onClick={handleNextStep}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressLaporanKemajuan;
