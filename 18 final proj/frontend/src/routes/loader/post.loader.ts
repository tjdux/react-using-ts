import { axiosInstance } from "../../api/axios";

// 메인 페이지 데이터
export const fetchOverview = async () => {
  try {
    const { data } = await axiosInstance.get("/posts/overview");
    return data;
  } catch (e) {
    console.error(e);
  }
};
