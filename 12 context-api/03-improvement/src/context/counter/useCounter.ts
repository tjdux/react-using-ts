import { CounterContext } from "./CounterContext";
import { useContext } from "react";

export default function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter는 CounterProvider 안에서만 사용 가능");
  }

  return context;
}
