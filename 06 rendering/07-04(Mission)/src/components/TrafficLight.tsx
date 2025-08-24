export default function TrafficLight({
  light,
  onButtonClick,
}: {
  light: string;
  onButtonClick: () => void;
}) {
  let message = "";
  switch (light) {
    case "red":
      message = "멈추세요! 🔴";
      break;
    case "yellow":
      message = "주의하세요! 🟡";
      break;
    case "green":
      message = "지나가세요! 🟢";
      break;
  }

  return (
    <>
      {/* ⚠️ jsx에서는 표현식만 사용 가능! switch는 문이므로 사용 불가 */}
      <h1>{message}</h1>
      <button onClick={onButtonClick}>Change</button>
    </>
  );
}
