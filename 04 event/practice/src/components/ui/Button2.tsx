export default function Button2() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(message);
    console.log(event);
  };

  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("handleClick2");
    console.log(e);
  };

  return (
    <>
      <button onClick={(event) => handleClick("click!", event)}>클릭</button>
      <button onClick={handleClick2}>click 2</button>
      {/* 명시적으로 (event) => handleClick2로 바꾼 다음 event 객체의 타입 추론 결과를 확인하여 붙여넣기 */}
    </>
  );
}
