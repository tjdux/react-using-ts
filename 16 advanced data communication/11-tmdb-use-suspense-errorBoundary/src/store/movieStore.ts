import { create } from "zustand";

type MovieStore = {
  page: number;
  setPage: (page: number) => void;
};

const useMovieStore = create<MovieStore>()((set) => ({
  page: 1,
  setPage: (page: number) => set({ page }),
}));

export default useMovieStore;
