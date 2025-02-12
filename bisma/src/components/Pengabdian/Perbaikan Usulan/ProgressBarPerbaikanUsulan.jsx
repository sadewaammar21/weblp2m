import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PerbaikanSubstansi from "./PerbaikanSubstansi";
import PerbaikanRancanganAnggaranBi from "./PerbaikanRancanganAnggaranBi";
import ListPerUsPengabdian from "./ListPerUsPengabdian";
import PerbaikanSuratKesanggupan from "./PerbaikanSuratKesanggupan";
import KonfirmasiPerUslPengabdian from "./KonfirmasiPerUslPengabdian";
import { getServiceDetail, addService } from "../../../Features/ServiceSlice";

const steps = [
  { id: 1, label: "Substansi" },
  { id: 2, label: "RAB" },
  { id: 3, label: "Surat Kesanggupan" },
  { id: 4, label: "Konfirmasi" },
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <div key={step.id} className="flex-1">
          <div className="relative flex items-center">
            {/* Progress line */}
            <div
              className={`h-2 flex-1 rounded-full ${currentStep >= step.id ? "bg-blue-600" : "bg-gray-300"}`}
            />

            {/* Step circle */}
            <div
              className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-sm border-2 ${currentStep >= step.id ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-black"}`}
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

const ProgressBarPerbaikanUsulan = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const fetchServiceDetail = async () => {
    const response = await getServiceDetail(id);
    setService({
      ...response.data,
      cluster_lv1: response.data.cluster_lv1.id,
      cluster_lv2: response.data.cluster_lv2.id,
      cluster_lv3: response.data.cluster_lv3.id,
    });
    console.log(service);
  };
  useEffect(() => {
    fetchServiceDetail();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.name === "ajukan") {
      const response = await addService({
        data: service,
        isEdit: true,
        serviceId: service.id,
        isSubmit: true,
        newStatus: 10,
      });
      console.log(response);
      navigate(-1);
    } else {
      const response = await addService({
        data: service,
        isEdit: true,
        serviceId: service.id,
        isSubmit: false,
        newStatus: 7,
      });
      console.log(response);
      navigate(-1);
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <PerbaikanSubstansi service={service} setService={setService} />;
      case 2:
        return (
          <PerbaikanRancanganAnggaranBi
            service={service}
            setService={setService}
          />
        );
      case 3:
        return (
          <PerbaikanSuratKesanggupan
            service={service}
            setService={setService}
          />
        );
      case 4:
        return (
          <KonfirmasiPerUslPengabdian
            service={service}
            setService={setService}
          />
        );
      default:
        return (
          <ListPerUsPengabdian service={service} setService={setService} />
        );
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          PERBAIKAN USULAN PENGABDIAN
        </h1>
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
                  {service.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Penelitian Fundamental - Reguler Penelitian Kompetitif
                  Nasional - Reguler | Thn Usulan 2024 | Thn. Pelaksanaan 2024
                </p>
              </div>
            </div>
            <ProgressBar currentStep={currentStep} />
            <div className="mt-6">{renderStepContent(currentStep)}</div>

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
                disabled={currentStep === steps.length}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Next
              </button>
              <div
                className={`${currentStep === steps.length ? "" : "hidden"}`}
              >
                <button
                  onClick={(e) => handleSubmit(e)}
                  disabled={currentStep < steps.length}
                  className={`px-4 py-2 bg-blue-600 text-white rounded mx-5 ${currentStep === steps.length ? "" : "hidden"}`}
                >
                  Submit
                </button>
                <button
                  onClick={(e) => handleSubmit(e)}
                  name="ajukan"
                  disabled={currentStep < steps.length}
                  className={`px-4 py-2 bg-green-600 text-white rounded  ${currentStep === steps.length ? "" : "hidden"}`}
                >
                  Ajukan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarPerbaikanUsulan;
