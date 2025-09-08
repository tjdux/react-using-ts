import { useEffect, useRef, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(false);

  // 컴포넌트가 생성될 때만 (마운트 될 때만) 호출
  useEffect(() => {
    console.log("Count Component 마운트");
  }, []);

  // 컴포넌트가 삭제될 때만 (언마운트 될 때만) 호출
  useEffect(() => {
    return () => {
      console.log("Count Component 언마운트");
    };
  }, []);

  // 컴포넌트의 상태가 변경되었을 때 + 마운트 될 때 (마운트 + 업데이트) 호출
  useEffect(() => {
    console.log(`count 증가: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log("Count Component 마운트 + 업데이트");
  });

  // 컴포넌트가 업데이트 될 때만
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      console.log("Count Component 업데이트");
    }
  });

  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
