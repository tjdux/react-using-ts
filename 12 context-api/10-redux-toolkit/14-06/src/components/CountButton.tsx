import { useDispatch } from "react-redux";
import {
  decrement,
  incrementAsync,
  reset,
} from "../store/features/counter/counterSlice";
import { AppDispatch } from "../store/store";

export default function CountButton() {
  console.log("CountButton");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(incrementAsync(10))}>증가</button>
    </>
  );
}
