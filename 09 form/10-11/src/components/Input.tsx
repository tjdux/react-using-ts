import { forwardRef } from "react";

export default forwardRef<HTMLInputElement, { type: string }>(function Input(
  { type },
  ref
) {
  return (
    <>
      <input type={type} ref={ref} />
    </>
  );
});
