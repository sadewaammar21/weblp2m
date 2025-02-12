// src/api.js
import axios from "axios";
import { getToken } from "./AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

//research
export const getResearch = async ({
  pageSize,
  currentPage,
  status,
  year,
  userId,
  prodiId,
}) => {
  try {
    const response = await axios.get(`${apiUrl}/api/research`, {
      ...getToken(),
      params: {
        page_size: pageSize,
        current_page: currentPage,
        status: status,
        year: year,
        user_id: userId,
        prodi_id: prodiId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getResearchDetail = async (id) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/research/${id}`,
      getToken()
    );
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addResearch = async ({
  data,
  isEdit,
  researchId,
  isSubmit,
  newStatus,
}) => {
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
  formData.append("approval_funds", data.approval_funds);
  formData.append("letter_of_intent", data.letter_of_intent);

  if (data.substance) {
    formData.append("substance", data.substance);
  }

  data.members.forEach((member, index) => {
    formData.append(`members[${index}][id]`, member.id);
    formData.append(
      `members[${index}][research_role]`,
      member.pivot.research_roles
    );
    formData.append(`members[${index}][task]`, member.pivot.task);
    formData.append(`members[${index}][status]`, member.pivot.status);
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
    formData.append(`output[${index}][id_type_output]`, output.id_type_output);
    formData.append(`output[${index}][status]`, output.status);
    formData.append(`output[${index}][description]`, output.description);
  });

  data.budget_plan.forEach((budgetPlan, index) => {
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
    formData.append(`budgetPlan[${index}][price_unit]`, budgetPlan.price_unit);
    formData.append(`budgetPlan[${index}][total]`, budgetPlan.total);
  });

  data.supportingDocument &&
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
        `${apiUrl}/api/research/${researchId}`,
        formData,
        getToken()
      );
      if (isSubmit) {
        if (
          response.data.data.members.every(
            (member) =>
              member.pivot.status === "2" || member.pivot.status === "accepted"
          )
        ) {
          const responseStatus = await updateStatus({
            researchId: response.data.data.id,
            newStatus: newStatus,
            note: "diajukan",
          });
          console.log("Response:", responseStatus);
        }
      }
      console.log(response.data);
    } else {
      const response = await axios.post(
        `${apiUrl}/api/research`,
        formData,
        getToken()
      );
      if (isSubmit) {
        if (
          response.data.data.members.every(
            (member) =>
              member.pivot.status === "2" || member.pivot.status === "accepted"
          )
        ) {
          const responseStatus = await updateStatus({
            researchId: response.data.data.id,
            newStatus: newStatus,
            note: "diajukan",
          });
          console.log("Response:", responseStatus);
        }
      }
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteResearch = async (id) => {
  const response = await axios.delete(
    `${apiUrl}/api/research/${id}`,
    getToken()
  );
  return response.data;
};

export const updateStatus = async ({ researchId, newStatus, note }) => {
  try {
    console.log(researchId, newStatus, note);
    const response = await axios.post(
      `${apiUrl}/api/research/${researchId}/status-update`,
      {
        newStatus: newStatus,
        notes: note,
      },
      getToken()
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating status:", error);
    throw error;
  }
};

export const downloadResearchDocument = async (researchId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/research/download/${researchId}`,
      {
        ...getToken(),
        responseType: "blob",
      }
    );
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    const contentDisposition = response.headers["content-disposition"];
    const fileName = contentDisposition
      ? contentDisposition.split("filename=")[1].replace(/"/g, "")
      : "downloaded-file.pdf";

    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    return response;
  } catch (error) {
    console.error("Error download document:", error);
    throw error;
  }
};

export const updateMemberStatus = async ({ researchId, userId, status }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/research/member-status/${researchId}`,
      {
        user_id: userId,
        new_status: status,
      },
      getToken()
    );
    return response.message;
  } catch (error) {
    return error.message;
  }
};

export const addResearchReviewer = async ({ researchId, data }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/research/${researchId}/reviewers`,
      data,
      getToken()
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getResearchByReviewer = async (reviewerId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/reviewer/${reviewerId}/research`,
      getToken()
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const setResearchReportDeadline = async ({ researchId, data }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/research/set-deadline/${researchId}`,
      {
        progress_report_deadline: data.progress_report_deadline,
        final_report_deadline: data.final_report_deadline,
      },
      getToken()
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const setResearchApprovalFunds = async ({
  researchId,
  approval_funds,
}) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/research/set-approval-funds/${researchId}`,
      {
        approval_funds: approval_funds,
      },
      getToken()
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//logbook
export const getLogbooks = async ({ user_id, id, pageSize, currentPage }) => {
  try {
    const response = await axios.get(`${apiUrl}/api/logbook`, {
      ...getToken(),
      params: {
        user_id: user_id,
        id: id,
        page_size: pageSize,
        current_page: currentPage,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDetailLogbook = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/api/logbook/${id}`, getToken());
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addLogbook = async ({
  id,
  dateActivity,
  activityDescription,
  percentage,
  document,
  isEdit,
  logbookId,
}) => {
  try {
    const formData = new FormData();

    if (isEdit) {
      formData.append("_method", "PUT");
    }

    formData.append("type", "research");
    formData.append("id", id);
    formData.append("date_activity", dateActivity);
    formData.append("activity_description", activityDescription);
    formData.append("percentage", percentage);
    if (document) {
      formData.append("logbook_document", document);
    }
    if (isEdit) {
      const response = await axios.post(
        `${apiUrl}/api/logbook/${logbookId}`,
        formData,
        getToken()
      );
      console.log(response);
      return response.data;
    } else {
      const response = await axios.post(
        `${apiUrl}/api/logbook`,
        formData,
        getToken()
      );
      console.log(response);
      return response.data;
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteLogbook = async (id) => {
  try {
    const response = await axios.delete(
      `${apiUrl}/api/logbook/${id}`,
      getToken()
    );
    console.log(response);
  } catch (error) {
    throw error;
  }
};

//progress report
export const addResearchProgressReport = async ({
  researchId,
  data,
  isEdit,
  reportId,
}) => {
  try {
    const formData = new FormData();

    if (isEdit) {
      formData.append("_method", "PUT");
    }

    formData.append("research_id", researchId);
    formData.append("summary", data.summary);
    formData.append("keyword", data.keyword);
    if (data.substance) {
      formData.append("substance", data.substance);
    }
    if (data.partner_contribution) {
      formData.append("partner_contribution", data.partner_contribution);
    }
    if (data.sptb) {
      formData.append("sptb", data.sptb);
    }
    formData.append("no_sk", data.no_sk);
    formData.append("no_contract", data.no_contract);
    formData.append("place_date", data.place_date);
    formData.append("nip", data.nip);
    formData.append("description_1", data.description_1);
    formData.append("realization_1", data.realization_1);
    formData.append("description_2", data.description_2);
    formData.append("realization_2", data.realization_2);
    formData.append("description_3", data.description_3);
    formData.append("realization_3", data.realization_3);
    formData.append("description_4", data.description_4);
    formData.append("realization_4", data.realization_4);
    formData.append("description_5", data.description_5);
    formData.append("realization_5", data.realization_5);
    formData.append("description_6", data.description_6);
    formData.append("realization_6", data.realization_6);
    formData.append("status", data.status);

    data.outputs.forEach((item, index) => {
      formData.append(
        `output_result[${index}][status_article]`,
        item.status_article
      );
      formData.append(
        `output_result[${index}][status_writer]`,
        item.status_writer
      );
      formData.append(
        `output_result[${index}][journal_name]`,
        item.journal_name
      );
      formData.append(`output_result[${index}][issn]`, item.issn);
      formData.append(
        `output_result[${index}][indexing_agency]`,
        item.indexing_agency
      );
      formData.append(`output_result[${index}][journal_url]`, item.journal_url);
      formData.append(
        `output_result[${index}][title_article]`,
        item.title_article
      );
      if (item.manuscript_article) {
        formData.append(
          `output_result[${index}][manuscript_article]`,
          item.manuscript_article
        );
      }
      if (item.proof_submit) {
        formData.append(
          `output_result[${index}][proof_submit]`,
          item.proof_submit
        );
      }
    });

    if (isEdit) {
      const response = await axios.post(
        `${apiUrl}/api/progress-report/${reportId}`,
        formData,
        getToken()
      );
      if (data.status === "submitted") {
        updateStatus({
          researchId: researchId,
          newStatus: 11,
          note: "laporan kemajuan disubmit",
        });
      }
      return response.data;
    } else {
      const response = await axios.post(
        `${apiUrl}/api/progress-report`,
        formData,
        getToken()
      );
      if (data.status === "submitted") {
        updateStatus({
          researchId: researchId,
          newStatus: 11,
          note: "laporan kemajuan disubmit",
        });
      }
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getResearchProgressReport = async (reportId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/progress-report/${reportId}`,
      getToken()
    );
    console.log(response);
    return response.data[0];
  } catch (error) {
    throw error;
  }
};

//research review
export const getReviewByResearch = async (researchId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/research-reviews/${researchId}/research`,
      getToken()
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//research monev review
export const getResearchMonevReview = async (researchId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/monev-research/${researchId}/research`,
      getToken()
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const addMonevResearch = async (monevData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/monev-research`,
      monevData,
      getToken()
    );
    console.log(response.data);
    updateStatus({
      researchId: monevData.research_id,
      newStatus: 12,
      note: "monev telah disubmit",
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

//final report
export const addResearchFinalReport = async ({
  researchId,
  data,
  isEdit,
  reportId,
}) => {
  try {
    const formData = new FormData();

    if (isEdit) {
      formData.append("_method", "PUT");
    }

    formData.append("research_id", researchId);
    formData.append("summary", data.summary);
    formData.append("keyword", data.keyword);
    if (data.substance) {
      formData.append("substance", data.substance);
    }
    if (data.partner_contribution) {
      formData.append("partner_contribution", data.partner_contribution);
    }
    if (data.poster) {
      formData.append("poster", data.poster);
    }
    if (data.video_profile) {
      formData.append("video_profile", data.video_profile);
    }
    if (data.sptb) {
      formData.append("sptb", data.sptb);
    }
    formData.append("no_sk", data.no_sk);
    formData.append("no_contract", data.no_contract);
    formData.append("place_date", data.place_date);
    formData.append("nip", data.nip);
    formData.append("description_1", data.description_1);
    formData.append("realization_1", data.realization_1);
    formData.append("description_2", data.description_2);
    formData.append("realization_2", data.realization_2);
    formData.append("description_3", data.description_3);
    formData.append("realization_3", data.realization_3);
    formData.append("description_4", data.description_4);
    formData.append("realization_4", data.realization_4);
    formData.append("description_5", data.description_5);
    formData.append("realization_5", data.realization_5);
    formData.append("description_6", data.description_6);
    formData.append("realization_6", data.realization_6);
    formData.append("status", data.status);

    data.outputs.forEach((item, index) => {
      formData.append(
        `output_result[${index}][status_article]`,
        item.status_article
      );
      formData.append(
        `output_result[${index}][status_writer]`,
        item.status_writer
      );
      formData.append(
        `output_result[${index}][journal_name]`,
        item.journal_name
      );
      formData.append(`output_result[${index}][issn]`, item.issn);
      formData.append(
        `output_result[${index}][indexing_agency]`,
        item.indexing_agency
      );
      formData.append(`output_result[${index}][journal_url]`, item.journal_url);
      formData.append(
        `output_result[${index}][title_article]`,
        item.title_article
      );
      if (item.manuscript_article) {
        formData.append(
          `output_result[${index}][manuscript_article]`,
          item.manuscript_article
        );
      }
      if (item.proof_submit) {
        formData.append(
          `output_result[${index}][proof_submit]`,
          item.proof_submit
        );
      }
    });

    if (isEdit) {
      const response = await axios.post(
        `${apiUrl}/api/research-final-report/${reportId}`,
        formData,
        getToken()
      );
      if (data.status === "submitted") {
        updateMemberStatus({
          researchId: researchId,
          newStatus: 13,
          note: "selesai cuy",
        });
      }
      return response.data;
    } else {
      const response = await axios.post(
        `${apiUrl}/api/research-final-report`,
        formData,
        getToken()
      );
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getResearchFinalReport = async (reportId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/research-final-report/${reportId}`,
      getToken()
    );
    console.log(response);
    return response.data[0];
  } catch (error) {
    throw error;
  }
};

export const downloadEveryDocument = async ({ filePath }) => {
  try {
    const response = await axios.get(`${apiUrl}/api/download/document`, {
      ...getToken(),
      params: { file_path: filePath },
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    const contentDisposition = response.headers["content-disposition"];
    const fileName = contentDisposition
      ? contentDisposition.split("filename=")[1].replace(/"/g, "")
      : "downloaded-file.pdf";

    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error downloading the document:", error);
    alert("Failed to download the document.");
  }
};

// export default downloadResearchDocument;
