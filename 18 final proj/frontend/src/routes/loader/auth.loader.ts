import { redirect } from "react-router";
import { axiosInstance } from "../../api/axios";
import { useAuthStore } from "../../store/authStore";

// 새로고침 했을 때 유저 정보 가져오기
export const fetchUserData = async () => {
  try {
    const user = useAuthStore.getState().user;
    const accessToken = sessionStorage.getItem("access_token");
    // 새로고침을 했을 때 zustand에는 정보가 없고 accessToken은 있음
    if (!user && accessToken) {
      const { data } = await axiosInstance.get("/auth/me");
      const setUserData = useAuthStore.getState().setUserData;
      setUserData(data);
    }
  } catch (e) {
    console.error(e);
  }
};

// 로그인이 안 된 사용자라면 로그인 페이지로 이동
export const requireAuth = () => {
  const token = sessionStorage.getItem("access_token");
  // access token이 없으면 로그인이 안 된 사용자
  if (!token) {
    return redirect("/auth/login");
  }
};

// 로그인된 사용자라면 메인 페이지로 이동
export const redirectIfAuth = () => {
  const token = sessionStorage.getItem("access_token");
  // access token이 있으면 로그인이 된 사용자
  if (token) {
    return redirect("/");
  }
};
