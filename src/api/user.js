import axiosInstance from "./axios";

export const getDashboardData = (params) => {
  return axiosInstance({
    url: "my_dashboard/v1/stock/market_cap_based_roi",
    method: "get",
    params: {
      user_id: 616,
      period: "1Y",
    },
  });
};
