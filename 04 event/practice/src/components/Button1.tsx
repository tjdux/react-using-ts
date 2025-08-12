export default function Button1({
  handleClick,
  message,
  children,
}: {
  handleClick: (msg: string) => void;
  message: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}
