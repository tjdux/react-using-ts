import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../store/features/counter/counterSlice";

export default function CountButton() {
  console.log("CountButton");
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <button onClick={() => dispatch(increment())}>증가</button>
    </>
  );
}
