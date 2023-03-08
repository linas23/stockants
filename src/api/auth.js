import axiosInstance from "./axios";

export const authLogin = (data) => {
  return axiosInstance({
    url: "/auth/v1/sign_in",
    method: "POST",
    data,
  });
};

export const authLogout = () => {
  return axiosInstance({
    url: "/auth/logout",
    method: "POST",
  });
};

export const getAuthUserData = () => {
  return axiosInstance({
    url: "/auth/user",
    method: "GET",
  });
};
