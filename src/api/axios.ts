import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL || "http://localhost:1000",
  withCredentials: true,
});

export default axiosInstance;
