export default function Button4({
  message,
  children,
  handler,
}: {
  message: string;
  children: React.ReactNode;
  handler: (msg: string) => void;
}) {
  return (
    <>
      <button onClick={() => handler(message)}>{children}</button>
    </>
  );
}
