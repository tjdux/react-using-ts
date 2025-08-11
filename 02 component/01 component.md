## 컴포넌트

- UI를 구성하는 독립적이고 재사용 가능한 작은 단위
- 여러 개의 컴포넌트가 결합하면서 하나의 화면을 완성
- JSX 반환

### 종류

#### 클래스 컴포넌트

- 복잡한 문법, 낮은 가독성

```jsx
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <h1>App Component</h1>
      </>
    );
  }
}
```

#### 함수형 컴포넌트

- 함수형 컴포넌트만 사용하는 것이 일반적
- 함수 선언문, 함수 표현식, 화살표 함수 어떤 함수 표현을 사용해도 무방

```jsx
export default function App() {
  return (
    <>
      <h1>App Component</h1>
    </>
  );
}
```

### 컴포넌트의 조건

- 함수로 작성
- return으로 JSX 요소나 `null` 반환 (⚠️ `undefined` 반환 불가!)
- ⚠️ 같은 부모를 가지고 있어야 형제 컴포넌트! 같은 레벨이지만 다른 부모를 가지고 있다면 형제 컴포넌트가 아님
  <br/>

## React.Fragment

- jsx: 두 개의 루트 요소 반환 불가 ➡️ group을 꼭 지어야 함
- `<div></div>`로 그룹지었을 때 문제점: 단순하게 하나의 루트 요소만을 반환하기 위해 사용한 `<div></div>` 태그가 화면에 랜더링 되어버림
- `<React.Fragment></React.Fragment>` (`<></>`)
  - 하나의 루트 요소를 반환하기 위해 그룹화할 때 사용
  - 랜더링되지 않음

```jsx
<React.Fragment>
  <h1>App Component</h1>
  <h1>App Component</h1>
</React.Fragment>

// 동일!
<>
  <h1>App Component</h1>
  <h1>App Component</h1>
</>
```

<br/>

## 컴포넌트 트리

- 컴포넌트들이 계층적으로 구성된 구조
- 리액트는 컴포넌트 트리를 기반으로 웹 브라우저의 요소를 랜더링
- 하나의 루트 컴포넌트 (`App` 컴포넌트)가 반드시 존재해야하며 이를 중심으로 여러 컴포넌트가 연결됨
- 새로운 컴포넌트가 랜더링되려면 루트 컴포넌트와 반드시 연결되어야 함
- 부모 - 자식 관계가 연결되면서 트리 형태의 구조가 완성
  <br/>

## 루트 컴포넌트

- 보통 `App` 컴포넌트가 루트 컴포넌트
- `<StrictMode></StrictMode>`: wrapper component (랜더링하지 않음)
- `main` 컴포넌트에는 `App` 컴포넌트만 있는 것이 바람직
- **루트 컴포넌트는 `main` 컴포넌트에서 render 함수의 매개변수로 전달되는 단일 컴포넌트!**
