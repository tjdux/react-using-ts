type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
}
