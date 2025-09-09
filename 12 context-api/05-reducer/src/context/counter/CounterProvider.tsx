import { useReducer } from "react";
import { CounterContext, CounterContextAction } from "./CounterContext";
import counterReducer from "../../reducer/counterReducer";

export default function CounterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, countDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <CounterContextAction value={countDispatch}>
        <CounterContext value={{ count }}>{children}</CounterContext>
      </CounterContextAction>
    </>
  );
}
