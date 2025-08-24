export default function LoginStatus({
  isLoggedIn,
  onButtonClick,
}: {
  isLoggedIn: boolean;
  onButtonClick: () => void;
}) {
  if (isLoggedIn) {
    return (
      <>
        <h1>환영합니다, 사용자! 🥳</h1>
        <button onClick={onButtonClick}>로그아웃</button>
      </>
    );
  }

  return (
    <>
      <h1>로그인이 필요합니다.</h1>
      <button onClick={onButtonClick}>로그인</button>
    </>
  );
}
