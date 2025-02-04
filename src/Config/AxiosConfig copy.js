import axios from "axios";

export const baseURL = "http://localhost:8000";

const AxiosConfigadmin = axios.create({
  baseURL: baseURL,
});
const token = localStorage.getItem("token");
AxiosConfigadmin.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/x-www-form-urlencoded",
      // authorization: `Bearer ${token}`,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

export default AxiosConfigadmin;
