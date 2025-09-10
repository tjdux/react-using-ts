import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export default function CountOutside() {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <>
      <h1>CountOutside: {count}</h1>
    </>
  );
}
