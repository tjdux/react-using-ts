import { create } from "zustand";
import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";

type CountStore = {
  count: number;
  increment: (amount: number, amount2: number) => void;
  decrement: () => void;
  reset: () => void;
};

export const useCountStore = create<CountStore>()(
  subscribeWithSelector(
    persist(
      (set) => ({
        count: 0,
        increment: (amount: number, amount2: number) => {
          // await new Promise((resolve) => setTimeout(resolve, 1000));
          set((state) => ({ count: state.count + amount + amount2 }));
        },
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: "count-storage",
        storage: createJSONStorage(() => sessionStorage), // 세션스토리지
      }
    )
  )
);
