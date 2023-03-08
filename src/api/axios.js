import axios from "axios";
import store from "../store";
const axiosInstance = axios.create({
  baseURL: "https://prod-api.stockants.com/api/",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // if (error.response.status == 401) {
      // store.dispatch("auth/logout");
      // router.push({ name: "CustomerSignupPage" });
    // }
    return Promise.reject(error);
  }
);

//request拦截器
axiosInstance.interceptors.request.use(
  (request) => {
    // const token = store.getters["auth/accessToken"];
    // if (token) {
    //   request.headers["authorization"] = `Bearer ${token}`;
    // }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
