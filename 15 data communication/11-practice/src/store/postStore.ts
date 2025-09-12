import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface PostStore {
  currentPage: number;
  limit: number;
  search: string;
  getTotalPages: () => number;
  setCurrentPage: (page: number) => void;
  setLimit: (amount: number) => void;
  setSearch: (text: string) => void;
}

export const usePostStore = create<PostStore>()(
  immer((set, get) => ({
    currentPage: 1,
    limit: 10,
    search: "",
    getTotalPages: () => Math.ceil(100 / get().limit),
    setCurrentPage: (page: number) =>
      set((state) => {
        state.currentPage = page;
      }),
    setLimit: (amount: number) => {
      set((state) => {
        state.limit = amount;
      });
    },
    setSearch: (text: string) => {
      set((state) => {
        state.search = text;
      });
    },
  }))
);
