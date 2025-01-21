import axios from "axios";
import { getToken } from "./AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

//community-service
export const getService = async ({
  pageSize,
  currentPage,
  status,
  year,
  userId,
  prodiId,
}) => {
  try {
    const response = await axios.get(`${apiUrl}/api/comunity-service`, {
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

export const getServiceDetail = async (id) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/comunity-service/${id}`,
      getToken()
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addService = async ({
  data,
  isEdit,
  serviceId,
  isSubmit,
  newStatus,
}) => {
  const formData = new FormData();

  if (isEdit) {
    formData.append("_method", "PUT");
  }

  formData.append("title", data.title);
  formData.append("category_id", data.category_id);
  if (data.focus_thematic_id) {
    formData.append("focus_thematic_id", data.focus_thematic_id);
  }
  if (data.focus_rirn_id) {
    formData.append("focus_rirn_id", data.focus_rirn_id);
  }

  formData.append("scheme_id", data.scheme_id);
  formData.append("scope_id", data.scope_id);
  formData.append("year", data.year);
  formData.append("duration", data.duration);
  formData.append("cluster_lv1", data.cluster_lv1);
  formData.append("cluster_lv2", data.cluster_lv2);
  formData.append("cluster_lv3", data.cluster_lv3);
  formData.append("leader_name", data.leader_name);
  formData.append("leader_task", data.leader_task);
  formData.append("status", 1);
  // formData.append("approval_funds", data.approval_funds);
  // formData.append("letter_of_intent", data.letter_of_intent);

  if (data.substance_document) {
    formData.append("substance_document", data.substance_document);
  }

  data.output_partner.forEach((partner, index) => {
    formData.append(`outputPartner[${index}][year]`, partner.year);
    formData.append(
      `outputPartner[${index}][id_category_output]`,
      partner.id_category_output
    );
    formData.append(
      `outputPartner[${index}][id_type_output]`,
      partner.id_type_output
    );
    formData.append(`outputPartner[${index}][status]`, partner.status);
    formData.append(
      `outputPartner[${index}][description]`,
      partner.description
    );
  });

  data.output_publication.forEach((publication, index) => {
    formData.append(
      `outputPublication[${index}][id_category_output]`,
      publication.id_category_output
    );
    formData.append(
      `outputPublication[${index}][id_type_output]`,
      publication.id_type_output
    );
    formData.append(`outputPublication[${index}][status]`, publication.status);
    formData.append(
      `outputPublication[${index}][description]`,
      publication.description
    );
  });

  data.output_media.forEach((media, index) => {
    formData.append(
      `outputMedia[${index}][id_category_output]`,
      media.id_category_output
    );
    formData.append(
      `outputMedia[${index}][id_type_output]`,
      media.id_type_output
    );
    formData.append(`outputMedia[${index}][status]`, media.status);
    formData.append(`outputMedia[${index}][description]`, media.description);
  });

  data.output_video.forEach((video, index) => {
    formData.append(
      `outputVideo[${index}][id_category_output]`,
      video.id_category_output
    );
    formData.append(
      `outputVideo[${index}][id_type_output]`,
      video.id_type_output
    );
    formData.append(`outputVideo[${index}][status]`, video.status);
    formData.append(`outputVideo[${index}][description]`, video.description);
  });

  data.budget_plan_service.forEach((budgetPlanService, index) => {
    formData.append(
      `budgetPlanService[${index}][year]`,
      budgetPlanService.year
    );
    formData.append(
      `budgetPlanService[${index}][id_group_budget]`,
      budgetPlanService.id_group_budget
    );
    formData.append(
      `budgetPlanService[${index}][id_component_budget]`,
      budgetPlanService.id_component_budget
    );
    formData.append(
      `budgetPlanService[${index}][item]`,
      budgetPlanService.item
    );
    formData.append(
      `budgetPlanService[${index}][unit]`,
      budgetPlanService.unit
    );
    formData.append(
      `budgetPlanService[${index}][volume]`,
      budgetPlanService.volume
    );
    formData.append(
      `budgetPlanService[${index}][price_unit]`,
      budgetPlanService.price_unit
    );
    formData.append(
      `budgetPlanService[${index}][total]`,
      budgetPlanService.total
    );
  });

  data.partner.forEach((partner, index) => {
    formData.append(`partner[${index}][name]`, partner.name);
    formData.append(`partner[${index}][province]`, partner.province);
    formData.append(`partner[${index}][leader_name]`, partner.leader_name);
    formData.append(`partner[${index}][group_id]`, partner.group_id);
    formData.append(`partner[${index}][city]`, partner.city);
    formData.append(
      `partner[${index}][partner_type_id]`,
      partner.partner_type_id
    );
    formData.append(`partner[${index}][email]`, partner.email);
    formData.append(
      `partner[${index}][funding_contribution]`,
      partner.funding_contribution
    );
    if (partner.document) {
      formData.append(`partner[${index}][document]`, partner.document);
    }
  });

  data.supporting_file.forEach((file, index) => {
    formData.append(`supportingFile[${index}][type_id]`, file.type_id);
    if (file.document) {
      formData.append(`supportingFile[${index}][document]`, file.document);
    }
  });

  data.members.forEach((member, index) => {
    formData.append(`members[${index}][id]`, member.id);
    formData.append(`members[${index}][task]`, member.pivot.task);
  });

  data.student_services.forEach((studentService, index) => {
    formData.append(`studentServices[${index}][name]`, studentService.name);
    formData.append(`studentServices[${index}][nim]`, studentService.nim);
    formData.append(
      `studentServices[${index}][address]`,
      studentService.address
    );
    formData.append(`studentServices[${index}][email]`, studentService.email);
    formData.append(`studentServices[${index}][phone]`, studentService.phone);
    formData.append(`studentServices[${index}][prodi]`, studentService.prodi);
    formData.append(`studentServices[${index}][role]`, studentService.role);
    formData.append(`studentServices[${index}][task]`, studentService.task);
  });

  try {
    if (isEdit) {
      const response = await axios.post(
        `${apiUrl}/api/comunity-service/${serviceId}`,
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
            serviceId: response.data.data.id,
            newStatus: newStatus,
            note: "diajukan",
          });
          console.log("Response:", responseStatus);
        }
      }
      console.log(response.data);
    } else {
      const response = await axios.post(
        `${apiUrl}/api/comunity-service`,
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
            serviceId: response.data.data.id,
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
    return error;
  }
};

export const deleteService = async (id) => {
  const response = await axios.delete(
    `${apiUrl}/api/comunity-service/${id}`,
    getToken()
  );
  return response.data;
};

export const updateStatus = async ({ serviceId, newStatus, note }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/comunity-service/${serviceId}/status-update`,
      {
        newStatus: newStatus,
        notes: note,
      },
      getToken()
    );

    return response.data;
  } catch (error) {
    console.error("Error updating status:", error);
    throw error;
  }
};

export const downloadServiceDocument = async (serviceId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/comunity-service/download/${serviceId}`,
      getToken()
    );
    return response;
  } catch (error) {
    console.error("Error download document:", error);
    throw error;
  }
};

export const updateMemberStatus = async ({ serviceId, userId, status }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/comunity-service/member-status/${serviceId}`,
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

export const addServiceReviewer = async ({ serviceId, data }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/comunity-service/${serviceId}/reviewers`,
      data,
      getToken()
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getServiceByReviewer = async (reviewerId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/reviewer/${reviewerId}/comunity-service`,
      getToken()
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const setServiceReportDeadline = async ({ serviceId, data }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/comunity-service/set-deadline/${serviceId}`,
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

export const setServiceApprovalFunds = async ({
  serviceId,
  approval_funds,
}) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/comunity-service/set-approval-funds/${serviceId}`,
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

//service review
export const addServiceReview = async (reviewData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/comunity-service-reviews`,
      reviewData,
      getToken()
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getReviewByService = async (serviceId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/comunity-service-reviews/${serviceId}/comunity-service`,
      getToken()
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//service logbook
export const getServiceLogbooks = async ({
  user_id,
  id,
  pageSize,
  currentPage,
}) => {
  //on progress
  try {
    const response = await axios.get(`${apiUrl}/api/logbook-service`, {
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

export const getDetailServiceLogbook = async (id) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/logbook-service/${id}`,
      getToken()
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addServiceLogbook = async ({ id, data, isEdit, logbookId }) => {
  const formData = new FormData();

  if (isEdit) {
    formData.append("_method", "PUT");
  }

  formData.append("comunity_service_id", id);
  formData.append("date_activity", data.date_activity);
  formData.append("group_budget", data.group_budget);
  formData.append("nominal", data.nominal);
  formData.append("file_number", data.file_number);
  formData.append("activity_description", data.activity_description);
  formData.append("percentage", data.percentage);
  if (data.document) {
    formData.append("document", data.document);
  }
  try {
    if (isEdit) {
      const response = await axios.post(
        `${apiUrl}/api/logbook-service/${logbookId}`,
        formData,
        getToken()
      );
      console.log(response);
    } else {
      const response = await axios.post(
        `${apiUrl}/api/logbook-service`,
        formData,
        getToken()
      );
      console.log(response);
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteServiceLogbook = async (id) => {
  try {
    const response = await axios.delete(
      `${apiUrl}/api/logbook-service/${id}`,
      getToken()
    );
    console.log(response);
  } catch (error) {
    throw error;
  }
};

//service progress report
export const getServiceProgressReport = async (reportId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/service-progress-report/${reportId}`,
      getToken()
    );
    console.log(response);
    return response.data[0];
  } catch (error) {
    throw error;
  }
};

export const addServiceProgressReport = async ({
  serviceId,
  data,
  isEdit,
  reportId,
}) => {
  try {
    const formData = new FormData();

    if (isEdit) {
      formData.append("_method", "PUT");
    }

    formData.append("comunity_service_id", serviceId);
    formData.append("summary", data.summary);
    formData.append("keyword", data.keyword);
    if (data.substance) {
      formData.append("substance", data.substance);
    }
    if (data.partner_contribution) {
      formData.append("partner_contribution", data.partner_contribution);
    }
    if (data.budget_use) {
      formData.append("budget_use", data.budget_use);
    }

    data.output_progress_report1s.forEach((item, index) => {
      formData.append(
        `output_progress_report1s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report1s[${index}][recognized_sks]`,
        item.recognized_sks
      );
      formData.append(
        `output_progress_report1s[${index}][recognized_courses]`,
        item.recognized_courses
      );
      formData.append(
        `output_progress_report1s[${index}][proof_recognition]`,
        item.proof_recognition
      );
    });
    data.output_progress_report2s.forEach((item, index) => {
      formData.append(
        `output_progress_report2s[${index}][status]`,
        item.status
      );
      if (item.poster_documents) {
        formData.append(
          `output_progress_report2s[${index}][poster_documents]`,
          item.poster_documents
        );
      }
    });
    data.output_progress_report3s.forEach((item, index) => {
      formData.append(
        `output_progress_report3s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report3s[${index}][url_video]`,
        item.url_video
      );
    });
    data.output_progress_report4s.forEach((item, index) => {
      formData.append(
        `output_progress_report4s[${index}][status_article]`,
        item.status_article
      );
      formData.append(
        `output_progress_report4s[${index}][status_writer]`,
        item.status_writer
      );
      formData.append(
        `output_progress_report4s[${index}][journal_name]`,
        item.journal_name
      );
      formData.append(
        `output_progress_report4s[${index}][issn_essn]`,
        item.issn_essn
      );
      formData.append(
        `output_progress_report4s[${index}][indexing_agency]`,
        item.indexing_agency
      );
      formData.append(
        `output_progress_report4s[${index}][journal_url]`,
        item.journal_url
      );
      formData.append(
        `output_progress_report4s[${index}][title_article]`,
        item.title_article
      );
      if (item.manuscript_article) {
        formData.append(
          `output_progress_report4s[${index}][manuscript_article]`,
          item.manuscript_article
        );
      }
      if (item.proof_submit) {
        formData.append(
          `output_progress_report4s[${index}][proof_submit]`,
          item.proof_submit
        );
      }
    });
    data.output_progress_report5s.forEach((item, index) => {
      formData.append(
        `output_progress_report5s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report5s[${index}][type_media]`,
        item.type_media
      );
      formData.append(`output_progress_report5s[${index}][title]`, item.title);
      formData.append(`output_progress_report5s[${index}][name]`, item.name);
      if (item.proof_support) {
        formData.append(
          `output_progress_report5s[${index}][proof_support]`,
          item.proof_support
        );
      }
    });
    data.output_progress_report6s.forEach((item, index) => {
      formData.append(
        `output_progress_report6s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report6s[${index}][improvement_description]`,
        item.improvement_description
      );
      if (item.proof_improvement) {
        formData.append(
          `output_progress_report6s[${index}][proof_improvement]`,
          item.proof_improvement
        );
      }
    });
    data.output_progress_report7s.forEach((item, index) => {
      formData.append(
        `output_progress_report7s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report7s[${index}][improvement_description]`,
        item.improvement_description
      );
      if (item.proof_improvement) {
        formData.append(
          `output_progress_report7s[${index}][proof_improvement]`,
          item.proof_improvement
        );
      }
    });
    data.output_progress_report8s.forEach((item, index) => {
      if (item.presentation) {
        formData.append(
          `output_progress_report8s[${index}][presentation]`,
          item.presentation
        );
      }
    });
    data.output_progress_report9s.forEach((item, index) => {
      formData.append(
        `output_progress_report9s[${index}][result_description]`,
        item.result_description
      );
      if (item.result_plans) {
        formData.append(
          `output_progress_report9s[${index}][result_plans]`,
          item.result_plans
        );
      }
    });
    data.output_progress_report10s.forEach((item, index) => {
      formData.append(`output_progress_report10s[${index}][type]`, item.type);
      formData.append(
        `output_progress_report10s[${index}][description]`,
        item.description
      );
      formData.append(`output_progress_report10s[${index}][url]`, item.url);
      if (item.document) {
        formData.append(
          `output_progress_report10s[${index}][document]`,
          item.document
        );
      }
    });

    if (isEdit) {
      const response = await axios.post(
        `${apiUrl}/api/service-progress-report/${reportId}`,
        formData,
        getToken()
      );
      return response.data;
    } else {
      const response = await axios.post(
        `${apiUrl}/api/service-progress-report`,
        formData,
        getToken()
      );
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

//service monev review
export const getServiceMonevReview = async (serviceId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/monev-comunity-service/${serviceId}/comunity-service`,
      getToken()
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const addMonevService = async (monevData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/monev-comunity-service`,
      monevData,
      getToken()
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

//service final report
export const getServiceFinalReport = async (reportId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/service-final-report/${reportId}`,
      getToken()
    );
    console.log(response);
    return response.data[0];
  } catch (error) {
    throw error;
  }
};

export const addServiceFinalReport = async ({
  serviceId,
  data,
  isEdit,
  reportId,
}) => {
  try {
    const formData = new FormData();

    if (isEdit) {
      formData.append("_method", "PUT");
    }

    formData.append("comunity_service_id", serviceId);
    formData.append("summary", data.summary);
    formData.append("keyword", data.keyword);
    if (data.substance) {
      formData.append("substance", data.substance);
    }
    if (data.partner_contribution) {
      formData.append("partner_contribution", data.partner_contribution);
    }
    if (data.budget_use) {
      formData.append("budget_use", data.budget_use);
    }
    formData.append("target_partners", data.target_partners);
    formData.append(
      "productive_economic_society",
      data.productive_economic_society
    );
    formData.append(
      "nonproductive_economic_society",
      data.nonproductive_economic_society
    );
    formData.append("number_of_partners", data.number_of_partners);
    formData.append("partner_education", data.partner_education);
    formData.append("problem_areas", data.problem_areas);
    formData.append("distance_partners", data.distance_partners);
    formData.append("male_proposing_team", data.male_proposing_team);
    formData.append("female_proposing_team", data.female_proposing_team);
    formData.append("male_partners_team", data.male_partners_team);
    formData.append("female_partners_team", data.female_partners_team);
    formData.append("total_students", data.total_students);
    formData.append("male_student", data.male_student);
    formData.append("female_student", data.female_student);
    formData.append(
      "implementation_activities",
      data.implementation_activities
    );
    formData.append("implementation_time", data.implementation_time);
    formData.append("program_sustainability", data.program_sustainability);
    formData.append(
      "production_capacity_before_program",
      data.production_capacity_before_program
    );
    formData.append(
      "production_capacity_after_program",
      data.production_capacity_after_program
    );
    formData.append("turnover_before_program", data.turnover_before_program);
    formData.append("turnover_after_program", data.turnover_after_program);
    formData.append("funding_sources", data.funding_sources);
    formData.append("funding_amount", data.funding_amount);
    formData.append("partner_role", data.partner_role);
    formData.append("partner_role_active", data.partner_role_active);
    formData.append("partner_role_passive", data.partner_role_passive);
    formData.append("government_local_role", data.government_local_role);
    formData.append("funding_contribution", data.funding_contribution);

    data.output_progress_report1s.forEach((item, index) => {
      formData.append(
        `output_progress_report1s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report1s[${index}][recognized_sks]`,
        item.recognized_sks
      );
      formData.append(
        `output_progress_report1s[${index}][recognized_courses]`,
        item.recognized_courses
      );
      formData.append(
        `output_progress_report1s[${index}][proof_recognition]`,
        item.proof_recognition
      );
    });
    data.output_progress_report2s.forEach((item, index) => {
      formData.append(
        `output_progress_report2s[${index}][status]`,
        item.status
      );
      if (item.poster_documents) {
        formData.append(
          `output_progress_report2s[${index}][poster_documents]`,
          item.poster_documents
        );
      }
    });
    data.output_progress_report3s.forEach((item, index) => {
      formData.append(
        `output_progress_report3s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report3s[${index}][url_video]`,
        item.url_video
      );
    });
    data.output_progress_report4s.forEach((item, index) => {
      formData.append(
        `output_progress_report4s[${index}][status_article]`,
        item.status_article
      );
      formData.append(
        `output_progress_report4s[${index}][status_writer]`,
        item.status_writer
      );
      formData.append(
        `output_progress_report4s[${index}][journal_name]`,
        item.journal_name
      );
      formData.append(
        `output_progress_report4s[${index}][issn_essn]`,
        item.issn_essn
      );
      formData.append(
        `output_progress_report4s[${index}][indexing_agency]`,
        item.indexing_agency
      );
      formData.append(
        `output_progress_report4s[${index}][journal_url]`,
        item.journal_url
      );
      formData.append(
        `output_progress_report4s[${index}][title_article]`,
        item.title_article
      );
      if (item.manuscript_article) {
        formData.append(
          `output_progress_report4s[${index}][manuscript_article]`,
          item.manuscript_article
        );
      }
      if (item.proof_submit) {
        formData.append(
          `output_progress_report4s[${index}][proof_submit]`,
          item.proof_submit
        );
      }
    });
    data.output_progress_report5s.forEach((item, index) => {
      formData.append(
        `output_progress_report5s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report5s[${index}][type_media]`,
        item.type_media
      );
      formData.append(`output_progress_report5s[${index}][title]`, item.title);
      formData.append(`output_progress_report5s[${index}][name]`, item.name);
      if (item.proof_support) {
        formData.append(
          `output_progress_report5s[${index}][proof_support]`,
          item.proof_support
        );
      }
    });
    data.output_progress_report6s.forEach((item, index) => {
      formData.append(
        `output_progress_report6s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report6s[${index}][improvement_description]`,
        item.improvement_description
      );
      if (item.proof_improvement) {
        formData.append(
          `output_progress_report6s[${index}][proof_improvement]`,
          item.proof_improvement
        );
      }
    });
    data.output_progress_report7s.forEach((item, index) => {
      formData.append(
        `output_progress_report7s[${index}][status]`,
        item.status
      );
      formData.append(
        `output_progress_report7s[${index}][improvement_description]`,
        item.improvement_description
      );
      if (item.proof_improvement) {
        formData.append(
          `output_progress_report7s[${index}][proof_improvement]`,
          item.proof_improvement
        );
      }
    });
    data.output_progress_report8s.forEach((item, index) => {
      if (item.presentation) {
        formData.append(
          `output_progress_report8s[${index}][presentation]`,
          item.presentation
        );
      }
    });
    data.output_progress_report9s.forEach((item, index) => {
      formData.append(
        `output_progress_report9s[${index}][result_description]`,
        item.result_description
      );
      if (item.result_plans) {
        formData.append(
          `output_progress_report9s[${index}][result_plans]`,
          item.result_plans
        );
      }
    });
    data.output_progress_report10s.forEach((item, index) => {
      formData.append(`output_progress_report10s[${index}][type]`, item.type);
      formData.append(
        `output_progress_report10s[${index}][description]`,
        item.description
      );
      formData.append(`output_progress_report10s[${index}][url]`, item.url);
      if (item.document) {
        formData.append(
          `output_progress_report10s[${index}][document]`,
          item.document
        );
      }
    });

    if (isEdit) {
      const response = await axios.post(
        `${apiUrl}/api/service-final-report/${reportId}`,
        formData,
        getToken()
      );
      return response.data;
    } else {
      const response = await axios.post(
        `${apiUrl}/api/service-final-report`,
        formData,
        getToken()
      );
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
