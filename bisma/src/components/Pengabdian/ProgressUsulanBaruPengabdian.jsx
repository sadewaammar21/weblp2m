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
      {steps.map((step, index) => (
        <div key={step.id} className="flex-1">
          <div className="relative flex items-center">
            {/* Progress line */}
            <div
              className={`h-2 flex-1 rounded-full ${currentStep >= step.id ? "bg-blue-600" : "bg-gray-300"}`}
            />

            {/* Step circle */}
            <div
              className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-sm border-2 ${currentStep >= step.id ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-black"}`}
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

const ProgressUsulanBaruPengabdian = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const isEdit = Boolean(id);

  //progress bar
  const [currentStep, setCurrentStep] = React.useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
    console.log(data);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  //data management
  const [data, setData] = useState({
    title: "",
    tkt_current: "",
    tkt_final: "",
    members: [],
    students: [],
    output: [],
    budgetPlan: [],
    supportingDocument: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${apiUrl}/api/research/${id}`,
        getToken()
      );
      console.log(response.data);
      setData({
        ...data,
        ...response.data,
      });
    };
    if (isEdit) fetchData();
    console.log(data);
  }, [id]);

  useEffect(() => {
    console.log(data);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const formData = new FormData();

    if (isEdit) {
      formData.append("_method", "PUT");
    }

    formData.append("title", data.title);
    formData.append("tkt_current", data.tkt_current);
    formData.append("tkt_final", data.tkt_final);
    formData.append("scheme_id", data.scheme_id);
    formData.append("scope_id", data.scope_id);
    formData.append("category_id", data.category_id);
    formData.append("focus_id", data.focus_id);
    formData.append("theme_id", data.theme_id);
    formData.append("topic_id", data.topic_id);
    formData.append("cluster_lv1", data.cluster_lv1);
    formData.append("cluster_lv2", data.cluster_lv2);
    formData.append("cluster_lv3", data.cluster_lv3);
    formData.append("priority_id", data.priority_id);
    formData.append("year", data.year);
    formData.append("duration", data.duration);
    formData.append("leader_name", data.leader_name);
    formData.append("leader_task", data.leader_task);
    formData.append("substance_id", data.substance_id);
    formData.append("status", 1);

    if (data.substance) {
      formData.append("substance", data.substance);
    }

    data.members.forEach((member, index) => {
      formData.append(`members[${index}][id]`, member.id);
      formData.append(`members[${index}][research_role]`, member.research_role);
      formData.append(`members[${index}][task]`, member.task);
      formData.append(`members[${index}][status]`, member.status);
    });

    data.students.forEach((student, index) => {
      formData.append(`students[${index}][name]`, student.name);
      formData.append(`students[${index}][nim]`, student.nim);
      formData.append(`students[${index}][address]`, student.address);
      formData.append(`students[${index}][email]`, student.email);
      formData.append(`students[${index}][phone]`, student.phone);
      formData.append(`students[${index}][prodi]`, student.prodi);
      formData.append(`students[${index}][role]`, student.role);
      formData.append(`students[${index}][task]`, student.task);
    });

    data.output.forEach((output, index) => {
      formData.append(`output[${index}][year]`, output.year);
      formData.append(
        `output[${index}][id_category_output]`,
        output.id_category_output
      );
      formData.append(
        `output[${index}][id_type_output]`,
        output.id_type_output
      );
      formData.append(`output[${index}][status]`, output.status);
      formData.append(`output[${index}][description]`, output.description);
    });

    data.budgetPlan.forEach((budgetPlan, index) => {
      formData.append(`budgetPlan[${index}][year]`, budgetPlan.year);
      formData.append(
        `budgetPlan[${index}][id_group_budget]`,
        budgetPlan.id_group_budget
      );
      formData.append(
        `budgetPlan[${index}][id_component_budget]`,
        budgetPlan.id_component_budget
      );
      formData.append(`budgetPlan[${index}][item]`, budgetPlan.item);
      formData.append(`budgetPlan[${index}][unit]`, budgetPlan.unit);
      formData.append(`budgetPlan[${index}][volume]`, budgetPlan.volume);
      formData.append(
        `budgetPlan[${index}][price_unit]`,
        budgetPlan.price_unit
      );
      formData.append(`budgetPlan[${index}][total]`, budgetPlan.total);
    });

    data.supportingDocument.forEach((supportingDocument, index) => {
      formData.append(
        `supportingDocument[${index}][partner_name]`,
        supportingDocument.partner_name
      );
      formData.append(
        `supportingDocument[${index}][email]`,
        supportingDocument.email
      );
      formData.append(
        `supportingDocument[${index}][institution]`,
        supportingDocument.institution
      );
      formData.append(
        `supportingDocument[${index}][country_code]`,
        supportingDocument.country_code
      );
      formData.append(
        `supportingDocument[${index}][institution_address]`,
        supportingDocument.institution_address
      );
      formData.append(
        `supportingDocument[${index}][funding_contribution1]`,
        supportingDocument.funding_contribution1
      );
      formData.append(
        `supportingDocument[${index}][funding_contribution2]`,
        supportingDocument.funding_contribution2
      );
      if (supportingDocument.document) {
        formData.append(
          `supportingDocument[${index}][document]`,
          supportingDocument.document
        );
      }
    });

    try {
      if (isEdit) {
        const response = await axios.post(
          `${apiUrl}/api/research/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log(response.data);
      } else {
        const response = await axios.post(`${apiUrl}/api/research`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
      }
      navigate("/usulanbaru");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  //element page
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
      <div>
        <h1 className="text-xl font-bold text-violet-800 mx-5 my-5">
          USULAN PENELITIAN
        </h1>
        <div className="container mx-auto">
          <div className="bg-gray-50 shadow-sm  rounded-sm  p-5 ">
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
                className={`px-4 py-2 bg-blue-600 text-white rounded ${currentStep === steps.length ? "hidden" : ""}`}
              >
                Next
              </button>
              <button
                onClick={handleSubmit}
                disabled={currentStep < steps.length}
                className={`px-4 py-2 bg-blue-600 text-white rounded ${currentStep === steps.length ? "" : "hidden"}`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressUsulanBaruPengabdian;
