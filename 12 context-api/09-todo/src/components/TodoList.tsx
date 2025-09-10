import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import { useTodo } from "../context/todo/useTodo";

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때  */}
        {todos.length === 0 && <TodoListEmpty />}
        {/* 할 일 목록이 있을 때 */}
        {todos.map((todo, index) => (
          <TodoListItem key={index} todo={todo} />
        ))}
      </ul>
    </>
  );
}
