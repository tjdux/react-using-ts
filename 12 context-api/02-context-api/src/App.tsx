import { createContext, useState } from "react";
import Count from "./components/Count";
import CountOutside from "./components/CountOutside";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterContext = createContext<CounterContextType | null>(null);

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <CounterContext value={{ count, increment, decrement, reset }}>
        <Count />
        <CountOutside />
      </CounterContext>
    </>
  );
}
