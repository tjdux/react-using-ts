import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CountStore = {
  count: number;
  increment: (amount: number, amount2: number) => void;
  decrement: () => void;
  reset: () => void;
};

export const useCountStore = create<CountStore>()(
  persist(
    (set) => ({
      count: 0,
      increment: (amount: number, amount2: number) =>
        set((state) => ({ count: state.count + amount + amount2 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      // key 값
      name: "count-storage",
      // sessionStorage 저장 (설정 안하면 디폴트값인 localStorage에 저장)
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
