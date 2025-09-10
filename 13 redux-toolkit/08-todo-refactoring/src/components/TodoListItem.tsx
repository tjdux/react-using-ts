import React, { useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import Input from "./html/Input";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import { useDispatch } from "react-redux";
import {
  modifyTodo,
  deleteTodo,
  toggleTodo,
} from "../store/features/todo/todoSlice";

export default React.memo(function TodoListItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();

  const [isModify, setIsModify] = useState(false);
  const [modifyText, setModifyText] = useState("");
  const modifyHandler = () => {
    setIsModify((isModify) => !isModify);
    setModifyText((modifyText) => (modifyText === "" ? todo.text : modifyText));
    if (modifyText.trim() !== "" && todo.text !== modifyText) {
      dispatch(modifyTodo({ id: todo.id, text: modifyText }));
    }
  };
  return (
    <>
      {/* 할 일이 완료되면 .todo__item--complete 추가 */}
      <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
        {!isModify && (
          <Checkbox
            parentClassName="todo__checkbox-group"
            type="checkbox"
            className="todo__checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </Checkbox>
        )}
        {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)  */}
        {isModify && (
          <Input
            type="text"
            className="todo__modify-input"
            value={modifyText}
            onChange={(e) => setModifyText(e.target.value)}
          />
        )}
        <div className="todo__button-group">
          <Button className="todo__action-button" onClick={modifyHandler}>
            <SvgPencil />
          </Button>
          <Button
            className="todo__action-button"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <SvgClose />
          </Button>
        </div>
      </li>
    </>
  );
});
