// src/api/jobPostingApi.js
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/jobposting";

export const fetchJobs = async (query = "") => {
  return axios.get(`${API_URL}?${query}`);
};

export const fetchJobDetails = async (jobId) => {
  return axios.get(`${API_URL}/${jobId}`);
};
