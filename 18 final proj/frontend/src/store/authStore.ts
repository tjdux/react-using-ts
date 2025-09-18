import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { axiosInstance } from "../api/axios";

interface User {
  id: string;
  kakaoId: string;
  profileImage: string;
  nickname: string;
  email?: string;
}

interface AuthStore {
  isLogin: boolean;
  user: User | null;
  setUserData: (userData: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    immer((set) => ({
      isLogin: false,
      user: null,
      setUserData: (userData) =>
        set((state) => {
          state.isLogin = true;
          state.user = userData;
        }),
      logout: async () => {
        await axiosInstance.post("/auth/logout");
        set((state) => {
          state.isLogin = false;
          state.user = null;
          sessionStorage.removeItem("access_token");
        });
      },
    }))
  )
);
