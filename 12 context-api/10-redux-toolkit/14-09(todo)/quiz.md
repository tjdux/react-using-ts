# (미션) TodoApp – Redux Toolkit으로 상태 전역화하기

## 📝 개요

이 미션에서는 **Redux Toolkit**을 활용하여, `useState`로 구성된 기존 Todo 앱을 **전역 상태 관리 구조**로 리팩토링합니다.
앱은 `할 일 등록`, `수정`, `삭제`, `완료` 기능을 갖춘 Todo 기능을 포함하며, **컴포넌트 간 props 전달 없이 Redux store를 통해 상태와 액션을 공유**하는 구조로 개선합니다.

## 🧩 컴포넌트 주요 구조

- `TodoEditor`: 할 일을 입력하고 추가하는 입력 폼
- `TodoList`: 할 일 목록 전체 출력
- `TodoListItem`: 개별 할 일을 출력, 완료/수정/삭제 기능 포함

현재 각 컴포넌트는 props로 상태와 함수를 전달받고 있으며, 이 구조를 **Redux store 기반으로 리팩토링**합니다.

---

## ✅ 요구사항

### 1. 초기 코드 제공

- `useState` 방식으로 구현된 TodoApp 코드가 제공됩니다.
- 기능은 완성되어 있으며, 각 컴포넌트로 상태와 핸들러 함수가 props로 전달됩니다.

### 2. Redux Toolkit으로 리팩토링

- `createSlice`, `configureStore`를 활용하여 전역 상태를 구성합니다.
- `useSelector`, `useDispatch`로 상태를 조회하고, 액션을 호출합니다.

---

## 🎯 기능 요약

- ✅ **할 일 추가**: 텍스트 입력 후 등록 시 리스트에 추가됨 (`addTodo`)
- 📝 **할 일 수정**: 기존 내용을 수정 가능 (`modifyTodo`)
- ❌ **할 일 삭제**: 삭제 버튼 클릭 시 해당 항목 제거 (`deleteTodo`)
- ✔️ **할 일 완료**: 체크박스 클릭 시 완료 상태 토글 (`toggleTodo`)

---

## 💡 힌트

- `redux/toolkit`의 `createSlice()`를 사용하면 불변성 관리를 따로 하지 않아도 됩니다 (Immer 내장).
- 전역 상태는 `todos` 하나의 slice로 충분합니다.
- `Provider`는 `main.tsx`의 최상단에 `<Provider store={store}>`로 래핑합니다.
- 필요한 곳에서 `useSelector`, `useDispatch`를 사용해 상태를 조회하거나 변경합니다.

---

## 🏁 리팩토링 목표

1. **Redux Toolkit 기본 흐름 이해**

   - `slice`, `store`, `Provider`, `dispatch`, `selector`의 구성 방식 익히기

2. **props drilling 제거 경험**

   - 여러 컴포넌트를 거쳐 전달하던 상태/함수를 Redux를 통해 직접 접근

3. **UI와 상태 관리 분리**

   - UI 로직과 상태 변경 로직을 각각 분리하여 유지보수성과 테스트 용이성 확보

---
