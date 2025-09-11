import { create } from "zustand";
import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountStore = {
  count: number;
  increment: (amount: number, amount2: number) => void;
  decrement: () => void;
  reset: () => void;
};
export const useCountStore = create<CountStore>()(
  devtools(
    subscribeWithSelector(
      persist(
        immer((set) => ({
          count: 0,
          increment: (amount: number, amount2: number) => {
            // await new Promise((resolve) => setTimeout(resolve, 1000));
            set((state) => {
              state.count += amount + amount2;
            });
          },
          decrement: () =>
            set((state) => {
              state.count -= 1;
            }),
          reset: () =>
            set((state) => {
              state.count = 0;
            }),
        })),
        {
          name: "count-storage",
          storage: createJSONStorage(() => sessionStorage), // 세션스토리지
        }
      )
    ),
    {
      // 개발 모드 일때만 redux devtool과 연동
      enabled: import.meta.env.MODE === "development",
    }
  )
);
