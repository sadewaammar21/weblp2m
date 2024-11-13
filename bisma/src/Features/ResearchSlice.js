// src/api.js
import axios from "axios";
import { getToken } from "./AuthSlice";
import { FaNotEqual } from "react-icons/fa";

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
