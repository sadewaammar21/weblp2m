import React from 'react';
import SubstansiPerbUsulan from './SubstansiPerbUsulan';
import RABPerbUsulan from './RABPerbUsulan';
import SuratKesanggupan from './SuratKesanggupan';
import KonfirmasiPerbUsulan from './KonfirmasiPerbUsulan';
import PerbaikanUsulanList from './PerbaikanUsulanList';

const steps = [
    { id: 1, label: "Substansi" },
    { id: 2, label: "RAB" },
    { id: 3, label: "Surat Kesanggupan" },
    { id: 4, label: "Konfirmasi" }
  ];

  const ProgressBar = ({ currentStep }) => {
    return (
        <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1">
            <div className="relative flex items-center">
              {/* Progress line */}
              <div className={`h-2 flex-1 rounded-full ${currentStep >= step.id ? 'bg-blue-600' : 'bg-gray-300'}`} />
              
              {/* Step circle */}
              <div className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-sm border-2 ${currentStep >= step.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300 text-black'}`}>
                {step.id}
              </div>
            </div>
            {/* Step label */}
            <div className="text-center mt-2 text-sm">
              {step.label}
            </div>
          </div>
        ))}
      </div>
      
    );
  };

const ProgressBarPerbUsulan = () => {
    const [currentStep, setCurrentStep] = React.useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

    const renderStepContent = (step) =>{

        switch (step) {
            case 1:
                return <SubstansiPerbUsulan/>;
            case 2:
                return <RABPerbUsulan/>;
            case 3:
                return <SuratKesanggupan/>;
            case 4:
                return <KonfirmasiPerbUsulan/>;
            default:
                return <PerbaikanUsulanList/>
        }
    }

  return (
    <div>
    <div>
        <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>PERBAIKAN USULAN PENELITIAN</h1>
    <div className="container mx-auto">
       
    <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 ">
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
        <h2 className="text-lg font-bold text-gray-800">
          Pengembangan Aplikasi Gamifikasi Pembelajaran Bahasa Inggris Berbasis
          Digital Visual Literacy dan Keterampilan 5C untuk Siswa Sekolah Dasar
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Penelitian Fundamental - Reguler Penelitian Kompetitif Nasional -
          Reguler | Thn Usulan 2024 | Thn. Pelaksanaan 2024
        </p>
      </div>
    </div>
      <ProgressBar currentStep={currentStep} />
      <div className="mt-6">
        {renderStepContent(currentStep)}
      </div>
      
      <div className="flex justify-between my-10">
        <button onClick={handlePrevStep} disabled={currentStep === 1} className="px-4 py-2 bg-gray-500 text-white rounded">
          Previous
        </button>
        <button onClick={handleNextStep} disabled={currentStep === steps.length} className="px-4 py-2 bg-blue-600 text-white rounded">
          Next
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ProgressBarPerbUsulan