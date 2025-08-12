## 이벤트

- 이벤트: 사용자와의 상호작용으로 인해 발생하는 일련의 사건
- `<JSX Element 이벤트속성="이벤트핸들러">`
- JSX에서는 이벤트 속성을 camelCase로 작성!
  <br/>

## 이벤트 객체

- 이벤트와 관련된 다양한 정보를 포함하고 있는 객체
- 이벤트가 발생한 요소, 마우스 좌표, 키보드 입력 값,...
  <br/>

## 합성 이벤트 (Synthetic Event)

- 리액트 전용 이벤트 객체
- 원본 DOM 이벤트 객체를 감싸 (래핑) 최적화한 이벤트 객체
- 브라우저마다 다른 이벤트를 효율적으로 관리 가능
- 원본 DOM 이벤트인 `nativeEvent` 제공

```jsx
export default function Button2() {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <>
      <button onClick={handleClick}>클릭</button>
    </>
  );
}
```

```jsx
export default function Button2() {
  const handleClick = (message: string, event) => {
    console.log(message);
    console.log(event);
  };
  return (
    <>
      <button onClick={(event) => handleClick("click!", event)}>클릭</button>
    </>
  );
}
```

- ⚠️ 리액트 이벤트 객체를 명시적으로 넘겨주는 것과 암묵적으로 활용하는 것을 구별!
- 매개변수가 없는 경우 암묵적으로 전달되지만, 매개변수가 있는 경우 명시적으로 전달해야 함
  <br/>

## 이벤트 전파

- DOM에서 이벤트가 발생했을 때, 이벤트가 전달되는 과정
- 캡처링 ➡️ 타켓 ➡️ 버블링
- 리액트, 자바스크립트의 기본 이벤트 전파 방식은 버블링
- `event.stopPropagation()`으로 이벤트 버블링 막을 수 있음
- 캡처링: `onClickCapture`로 `Capture` 붙이기
