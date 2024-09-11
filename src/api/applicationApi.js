// src/api/applicationApi.js
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/applications";

export const fetchApplicationStatus = async () => {
  return axios.get(`${API_URL}/status`);
};
