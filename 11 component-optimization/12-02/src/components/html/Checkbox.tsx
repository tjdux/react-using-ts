type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: "checkbox";
  parentClassName: string;
};
import { useId } from "react";

export default function Checkbox(props: CheckboxProps) {
  const { parentClassName, children, ...rest } = props;
  const uuid = useId();

  return (
    <>
      <div className={parentClassName}>
        <input {...rest} id={uuid} />
        <label htmlFor={uuid}>{children}</label>
      </div>
    </>
  );
}
