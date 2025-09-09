import { useContext } from "react";
import { CounterContext, CounterContextAction } from "./CounterContext";

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter는 CounterProvider 안에서만 사용가능합니다.");
  }
  return context;
}

export function useCounterAction() {
  const context = useContext(CounterContextAction);
  if (!context) {
    throw new Error("useCounter는 CounterProvider 안에서만 사용가능합니다.");
  }
  return context;
}
