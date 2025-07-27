import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:1000",
  withCredentials: true,
});

export default axiosInstance;
