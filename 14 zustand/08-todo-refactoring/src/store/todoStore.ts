import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  modifyTodo: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    immer((set) => ({
      todos: [],
      addTodo: (text: string) =>
        set((state) => {
          state.todos.push({ id: Date.now(), text, isCompleted: false });
        }),
      toggleTodo: (id: number) =>
        set((state) => {
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) todo.isCompleted = !todo.isCompleted;
        }),
      modifyTodo: (id: number, text: string) =>
        set((state) => {
          const todo = state.todos.find((todo) => todo.id === id);
          if (todo) todo.text = text;
        }),
      deleteTodo: (id: number) =>
        set((state) => {
          state.todos = state.todos.filter((todo) => todo.id !== id);
        }),
    })),
    {
      name: "todo-storage",
    }
  )
);
