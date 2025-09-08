export default function ChildB() {
  const randomNum = Math.floor(Math.random() * 2) + 1;
  if (randomNum === 1) {
    throw new Error("random number is 1");
  }
  return (
    <>
      <h1>ChildB Component</h1>
    </>
  );
}
