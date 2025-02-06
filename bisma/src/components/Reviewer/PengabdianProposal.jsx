import React, { useState, useEffect } from "react";
import PenilaianProposalPengabdian from "./PenilaianProposalPengabdian";
import UsulanBelumDiriview from "./PenilaianProposalPengabdian";
import { useLocation, useNavigate } from "react-router-dom";
import PengabdianProposalTab1 from "./PengabdianProposalTab1";
import PengabdianProposalTab2 from "./PengabdianProposalTab2";
import axios from "axios";
import { getToken } from "../../Features/AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;


const steps = [
  { id: 1, label: "Administrasi" },
  { id: 2, label: "Substansi Usulan" },
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <div key={step.id} className="flex-1">
          <div className="relative flex items-center">
            <div
              className={`h-2 flex-1 rounded-full ${
                currentStep >= step.id ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
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
          <div className="text-center mt-2 text-sm">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

const PengabdianProposal = () => {
  const navigate = useNavigate();

   const location = useLocation();
    const [data, setData] = useState();
    const [reviewData, setReviewData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [isUsulanView, setIsUsulanView] = useState(false);

    const id = location.state.id;
    const user = JSON.parse(localStorage.getItem("user"));
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/comunity-service/${id}`,
          getToken()
        );
        console.log(response.data);
        setData({
          ...data,
          ...response.data,
        });
        setReviewData({ ...reviewData, ["comunity_service_id"]: id });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsUsulanView(true); // Pindah ke halaman UsulanBelumDiriview
    }
    setReviewData({ ...reviewData, ["reviewer_id"]: user.id });
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <PengabdianProposalTab1
            data={data}
            review={reviewData}
            setReview={setReviewData}
          />
        );
      case 2:
        return (
          <PengabdianProposalTab2
            review={reviewData}
            setReview={setReviewData}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/comunity-service-reviews`,
        reviewData,
        getToken()
      );
      console.log(response.data);
      navigate(-1);
    } catch (error) {
      setError(error.message);
    }
  };

  if (isUsulanView) {
    return <PenilaianProposalPengabdian />;
  }

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          USULAN PROPOSAL PENGABDIAN
        </h1>
        <div className="container mx-auto">
          <div className="bg-gray-50 shadow-sm rounded-sm p-5">
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
                onClick={currentStep === 2 ? handleSubmit : handleNextStep}
                className={`px-4 py-2 bg-blue-600 text-white rounded`}
              >
                {currentStep === 2 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengabdianProposal;
