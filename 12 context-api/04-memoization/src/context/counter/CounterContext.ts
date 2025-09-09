import { createContext } from "react";

type CounterContextType = {
  count: number;
};

type CounterContextActionType = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterContextAction =
  createContext<CounterContextActionType | null>(null);
