## `useTransition`

- 상태 업데이트를 낮은 우선순위의 트랜지션 (transition)으로 처리
  - 트랜지션
    - 코드를 낮은 우선순위로 처리한다는 의미
    - 리액트가 더 중요한 작업이 끝나고 여유가 있을 때 처리함
- 리액트 19부터는 비동기 함수도 처리할 수 있도록 기능이 확장
- `const [isPending, startTransition] = useTransition()`
  - `isPending`: 실행중인 트랜지션이 있으면 true, 없으면 false
  - `startTransition`: 코드를 트랜지션으로 실행할 수 있게 해주는 함수
    <br/>

## `useActionState`

- 폼(form)의 액션 결과를 기반으로 상태를 업데이트할 수 있도록 도와줌
- 진행상태까지 함께 관리할 때 유용
- `const [state, formAction, isPending] = useActionState(fn, initialState)`
  - `useActionState(fn, initialState)`
    - `fn`: 액션이 발생했을 때 실행할 함수 (비동기 함수도 가능)
    - `initialState`: 초기값
  - `state`: 현재 상태값
  - `formAction`: 폼 액션 함수 (action 속성에 활용)
  - `isPending`: 액션 처리 중 여부 (true/false)
    <br/>

## form action

```jsx
<form action={async () => {}}>...</form>
```

- 리액트 19부터 action 속성에 일반 함수 (비동기) 할당 가능
- 단순한 작업을 빠르게 처리하고 싶을 때 적합
- 진행상태까지는 관리 불가
  <br/>

## `useFormStatus`

- 상위 폼(form)에 대한 상태 정보를 가져올 수 있는 리액트 훅
- `const {pending, data, method, action} = useFormState()`
  - `pending`: 액션이 처리 중인지 여부
  - `data`: 폼 데이터 (formData) 객체 참조
  - `method`: 현재 폼에서 사용하는 전송 방식 (`GET`/`POST`)
  - `action`: action 속성에 할당된 함수 참조
    <br/>

## 낙관적 업데이트 (`useOptimistic`)

- 낙관적 업데이트: 서버의 응답을 기다리지 않고 먼저 UI를 업데이트 하는 기법
- 주의: 서버에서 요청이 실패했을 때 UI를 롤백해야함
- `useOptimistic`

  - 낙관적 업데이트를 쉽게 구현할 수 있도록 설계된 훅
  - 서버 요청 실패 시 자동으로 UI 롤백

  ```jsx
  import { useOptimistic } from "react";

  function AppContainer() {
    const [optimisticState, addOptimistic] = useOptimistic(
      state,
      //updateFn
      (currentState, optimisticValue) => {
        // merge and return new state
        // with optimistic value
      }
    );
  }
  ```

  <br/>

## `use`

- `Promise` 객체를 동기 함수처럼 사용할 수 있게 해주는 기능
- 반드시 `Suspense` 컴포넌트와 함께 사용
  - `Suspense`: 컴포넌트에서 비동기 처리가 완료될 때까지 대기하게 하는 동안 fallback 속성에 지정된 UI를 표시하는 역할

```jsx
import { Suspense } from "react";
import ChildComponent from "./components/ChildComponent";

export default function App(){
  return(
    <>
    // fallback 속성으로 로딩 UI 지정
      <Suspense fallback={...}>
        <ChildComponent promise={...}>
      </Suspense>
    </>
  )
}
```

```jsx
export default function ChildComponent({
  promise,
}: {
  promise: Promise<unknown>;
}){
  const data = use(promise);
  return (...)
}
```

<br/>

## tip

- 로딩이 0.5초보다 적으면 로딩 화면을 안 보여주는 것이 더 좋은 ui일 수 있음
- `use`, `Suspense`, `Error Boundary`는 무한 스크롤 구현 불가능: 정적인 데이터 fetch에 적합
