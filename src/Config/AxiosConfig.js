import axios from "axios";

export const baseURL = "https://api.saarkansas.org";

const AxiosConfigadmin1 = axios.create({
  baseURL: baseURL,
});
const token = localStorage.getItem("token");
AxiosConfigadmin1.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

export default AxiosConfigadmin1;
