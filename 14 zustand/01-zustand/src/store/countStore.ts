import { create } from "zustand";
type CountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// 훅처럼 'use' prefix 붙이는 것이 관례
export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () => set((state) => ({ count: state.count - 1 })),

  reset: () => set({ count: 0 }),
}));
