import { createContext } from "react";

type CounterContextType = {
  count: number;
};
type CounterContextActionType = React.ActionDispatch<
  [
    action: {
      type: string;
    }
  ]
>;
export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterContextAction =
  createContext<CounterContextActionType | null>(null);
