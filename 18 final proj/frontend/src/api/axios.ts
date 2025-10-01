import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true, //http only cookie
});

// 요청을 보내기 전에 실행할 코드
axiosInstance.interceptors.request.use(
  (config) => {
    // sessionStorage에 access token이 저장되어 있다면 매번 요청을 보낼 때 마다 authorization에 token 값을 포함시켜서 요청
    const token = sessionStorage.getItem("access_token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let retry = false;
// 응답에 대한 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // access token 재발급
    if (error.response && error.response.status === 401 && !retry) {
      retry = true;
      try {
        // refresh token으로 새로운 access token 재발급
        const res = await axiosInstance.post("/auth/refresh");
        if (!res.data.accessToken) throw new Error("Access token is missing");
        retry = false;
        sessionStorage.setItem("access_token", res.data.accessToken);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // access token 재발급 실패
        sessionStorage.removeItem("access_token");
        await axiosInstance.post("/auth/logout");
        return Promise.reject(refreshError);
      }
    }
  }
);
