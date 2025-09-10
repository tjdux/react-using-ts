import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function CountDisplay() {
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
