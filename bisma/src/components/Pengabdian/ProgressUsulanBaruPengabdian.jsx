import React, { useEffect, useState } from "react";
import UsulanBaruList from "./UsulanBaruList";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getToken } from "../../Features/AuthSlice";
import IdentitasUsulan from "./UsulanBaru/IdentitasUsulan";
import SubstansiUsulan from "./UsulanBaru/SubstansiUsulan";
import RAB from "./UsulanBaru/RAB";
import DokumenPendukung from "./UsulanBaru/DokumenPendukung";
import KonfirmasiUsulan from "./UsulanBaru/KonfirmasiUsulan";
import Footer from "../Footer";
import { addService } from "../../Features/ServiceSlice";

const apiUrl = process.env.REACT_APP_API_URL;

const steps = [
  { id: 1, label: "Identitas Usulan" },
  { id: 2, label: "Substansi Usulan" },
  { id: 3, label: "RAB" },
  { id: 4, label: "Dokumen Pendukung" },
  { id: 5, label: "Konfirmasi Usulan" },
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex items-center">
      {steps.map((step) => (
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

const ProgressUsulanBaruPengabdian = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({
    title: "",
    category_id: "",
    focus_thematic_id: "",
    focus_rirn_id: "",
    scheme_id: "",
    scope_id: "",
    year: "",
    duration: "",
    cluster_lv1: "",
    cluster_lv2: "",
    cluster_lv3: "",
    leader_name: "",
    leader_task: "",
    status: "",
    approval_funds: "",
    letter_of_intent: "",
    substance_document: [],
    members: [],
    student_services: [],
    output_partner: [{ id_category_output: "" }],
    output_publication: [{ id_category_output: "" }],
    output_media: [{ description: "", id_category_output: "" }],
    output_video: [{ description: "" }],
    partner: [],
    budget_plan_service: [],
    supporting_file: [],
  });

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${apiUrl}/api/comunity-service/${id}`,
          getToken()
        );
        setData((prev) => ({ ...prev, ...response.data }));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (isEdit) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSubmit = e.target.name === "ajukan";
    const newStatus = isSubmit ? 2 : undefined;

    const response = await addService({
      data,
      isEdit,
      serviceId: data.id,
      isSubmit,
      newStatus,
    });

    console.log(response);
    navigate("/pengabdian/usulan");
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <IdentitasUsulan data={data} setData={setData} />;
      case 2:
        return <SubstansiUsulan data={data} setData={setData} />;
      case 3:
        return <RAB data={data} setData={setData} />;
      case 4:
        return <DokumenPendukung data={data} setData={setData} />;
      case 5:
        return <KonfirmasiUsulan data={data} />;
      default:
        return <UsulanBaruList />;
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
        USULAN PENGABDIAN
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
              onClick={handleNextStep}
              disabled={currentStep === steps.length}
              className={`px-4 py-2 bg-blue-600 text-white rounded ${
                currentStep === steps.length ? "hidden" : ""
              }`}
            >
              Next
            </button>
            {currentStep === steps.length && (
              <div>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded mx-5"
                >
                  Submit
                </button>
                <button
                  onClick={handleSubmit}
                  name="ajukan"
                  className={`px-4 py-2 bg-green-600 text-white rounded ${
                    data.members.every(
                      (member) =>
                        member.pivot.status === "2" ||
                        member.pivot.status === "accepted"
                    )
                      ? ""
                      : "hidden"
                  }`}
                >
                  Ajukan
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressUsulanBaruPengabdian;
