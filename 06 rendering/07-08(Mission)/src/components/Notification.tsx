export default function Notification({
  showNotification,
  onButtonClick,
}: {
  showNotification: boolean;
  onButtonClick: () => void;
}) {
  return (
    <>
      <h1>{showNotification && "📢 새로운 알림이 도착했습니다!"}</h1>
      <button onClick={onButtonClick}>
        {showNotification && "알림 닫기"}
        {!showNotification && "알림 보기"}
      </button>
    </>
  );
}
