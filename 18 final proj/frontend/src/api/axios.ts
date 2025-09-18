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
