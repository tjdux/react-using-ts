import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo/todoSlice";

const loadFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("todos");
    if (saved) {
      return {
        todo: {
          todos: JSON.parse(saved),
        },
      };
    }
  } catch {
    console.error("로컬 스토리지 로드 실패");
  }
};

export const store = configureStore({
  reducer: { todo: todoSlice },
  // store의 초기값 등록
  preloadedState: loadFromLocalStorage(),
});

const saveToLocalStorage = (currentTodos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(currentTodos));
};

let previousTodos = store.getState().todo.todos;
// 상태가 변경될 때마다 특정 로직 실행
store.subscribe(() => {
  const currentTodos = store.getState().todo.todos;
  if (previousTodos !== currentTodos) {
    previousTodos = currentTodos;
    saveToLocalStorage(currentTodos);
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
