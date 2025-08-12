export default function Button() {
  const handleClick = (value: string) => alert(value);
  const alertClick = () => alert("🐬");

  return (
    <>
      {/* 매개변수가 있다면 */}
      <button onClick={() => handleClick("Hello")}>click!</button>
      {/* 매개변수가 없다면 */}
      <button onClick={alertClick}>click!!</button>
      {/* 비추천👎 */}
      <button onDoubleClick={() => alert("hi!")}>double click!</button>
    </>
  );
}
