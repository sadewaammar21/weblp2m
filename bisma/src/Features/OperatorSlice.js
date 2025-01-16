import axios from "axios";
import { getToken } from "./AuthSlice";

const apiUrl = process.env.REACT_APP_API_URL;

//activity periods
export const getAllPeriods = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/periods`, getToken());
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewPeriod = async ({ data, isEdit, id }) => {
  try {
    if (isEdit) {
      const response = await axios.put(
        `${apiUrl}/api/periods/${id}`,
        data,
        getToken()
      );
      console.log(response.data);
      return response.data;
    } else {
      const response = await axios.post(
        `${apiUrl}/api/periods`,
        data,
        getToken()
      );
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deletePeriod = async (id) => {
  try {
    const response = await axios.delete(
      `${apiUrl}/api/periods/${id}`,
      getToken()
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//deadline laporan
export const setResearchProgressReportDeadline = async ({
  data,
  researchId,
}) => {
  try {
    const response = await axios.put(
      `${apiUrl}/api/research/set-deadline/${researchId}`,
      data,
      getToken()
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
