export default function Button3({
  handleClick,
}: {
  handleClick: (
    message: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}) {
  return (
    <>
      <button onClick={(e) => handleClick("Hello", e)}>click!!!!</button>
    </>
  );
}
