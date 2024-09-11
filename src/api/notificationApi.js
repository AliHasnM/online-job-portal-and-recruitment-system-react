// src/api/notificationApi.js
import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/notifications";

export const fetchNotifications = async () => {
  return axios.get(`${API_URL}`);
};
