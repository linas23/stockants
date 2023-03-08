import axiosInstance from "./axios";

export const authLogin = (data) => {
  return axiosInstance({
    url: "/auth/v1/sign_in",
    method: "POST",
    data,
  });
};


