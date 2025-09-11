import { create } from "zustand";
type CountStore = {
  count: number;
  increment: (num1: number, num2: number) => void;
  decrement: () => void;
  reset: () => void;
};

export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  increment: async (num1: number, num2: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + num1 + num2 }));
  },
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
