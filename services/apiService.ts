import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
});

const api = {
  get: <T>(url: string) => axiosInstance.get<T>(url),
};

export default api;
