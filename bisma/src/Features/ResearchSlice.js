// src/api.js
import axios from "axios";
import { getToken } from "./AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

export const getResearch = async ({
  pageSize,
  currentPage,
  status,
  year,
  userId,
}) => {
  try {
    const response = await axios.get(`${apiUrl}/api/research`, getToken(), {
      params: {
        page_size: pageSize,
        current_page: currentPage,
        status: status,
        year: year,
        user_id: userId,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addResearch = async ({ data }) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/research`,
      {
        title: data.title,
        tkt_current: data.tkt_current,
        tkt_final: data.tkt_final,
        scheme_id: data.scheme_id,
        scope_id: data.scope_id,
        category_id: data.category_id,
        focus_id: data.focus_id,
        theme_id: data.theme_id,
        topic_id: data.topic_id,
        cluster_lv1: data.cluster_lv1,
        cluster_lv2: data.cluster_lv2,
        cluster_lv3: data.cluster_lv3,
        priority_id: data.priority_id,
        year: data.year,
        duration: data.duration,
        leader_name: data.leader_name,
        leader_task: data.leader_task,
        substance_id: data.substance_id,
        status: 1,
      },
      getToken()
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
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

export const downloadDocument = async (researchId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/api/research/download/${researchId}`
    );
    return response;
  } catch (error) {
    console.error("Error download document:", error);
    throw error;
  }
};
