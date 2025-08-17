## `useState`

- 상태 (state): 시간이 지남에 따라 변할 수 있는 데이터
- `const [state, setState] = useState<Type>(initialState)`

  - 값이 변경되면 화면에 즉시 반영됨 (리랜더링)
  - 초기 값과 변경될 값의 타입이 같을 경우 generic 부분 생략 가능 (타입 추론)
  - 다를 경우

    ```jsx
    import { useState } from "react";

    const [state, setState] = (useState < number) | (string > 0);
    const handleSetToTen = () => {
      setState("10");
    };
    ```

- 리액트 훅 (hook): 함수형 컴포넌트에서 상태 관리와 생명 주기 기능 및 부가적인 기능을 활용할 수 있게 도와주는 새로운 기능
- 현재 값을 참조하는지 안 하는지에 따라 직접 업데이트와 함수형 업데이트 방식 사용

  - 직접 업데이트: `setState(state)`
  - 함수형 업데이트: `setState((state) => state)`

- 벤치 업데이트: 성능 최적화를 위해 모든 변경 사항을 모아 한 번에 리랜더링
  <br/>

## 리액트 훅 규칙

- `use`로 시작
- 컴포넌트 함수의 최상위에서만 호출되어야 함
  <br/>

## `useReducer`

- `const [state, dispatch] = useReducer<Type>(reducer, initialState)`
