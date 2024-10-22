import React from 'react';
import SubtansiUsulan from './SubtansiUsulan';
import IdentitasUsulan from './IdentitasUsulan';
import RencanaAnggranBi from './RencanaAnggranBi';
import DokumenPendukung from './DokumenPendukung';
import KonfirmasiUsulan from './KonfirmasiUsulan';
import UsulanBaruList from './UsulanBaruList';

const steps = [
    { id: 1, label: "Identitas Usulan" },
    { id: 2, label: "Substansi Usulan" },
    { id: 3, label: "RAB" },
    { id: 4, label: "Dokumen Pendukung" },
    { id: 5, label: "Konfirmasi Usulan" }
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

const ProgressBarUsulan = () => {
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
                return <IdentitasUsulan/>;
            case 2:
                return <SubtansiUsulan/>;
            case 3:
                return <RencanaAnggranBi/>;
            case 4:
                return <DokumenPendukung/>;
            case 5:
                return <KonfirmasiUsulan/>;
            default:
                return <UsulanBaruList/>
        }
    }

  return (
    <div>
    <div>
        <h1 className='text-xl font-bold text-violet-800 mx-5 my-5'>USULAN PENELITIAN</h1>
    <div className="container mx-auto">
    <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 ">
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

export default ProgressBarUsulan