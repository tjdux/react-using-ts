import { useId } from "react";

export default function Checkbox() {
  const uuid = useId();

  return (
    <div>
      <input type="checkbox" id={uuid} />
      <label htmlFor={uuid}>사과</label>
    </div>
  );
}
