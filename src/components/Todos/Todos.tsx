import * as React from "react";

import { ITodos } from "../../store/Types";
import Todo from "../Todo/Todo";
import "./Todos.css";

const EDITING_MODE_FALSE: string = "-1";

interface Props {
  todos: ITodos;
  onChange: (id: string) => () => void;
  onSave: (id: string, todoTitle: string) => void;
  onDelete: (id: string) => void;
}

const Todos: React.FunctionComponent<Props> = ({
  todos,
  onChange,
  onSave,
  onDelete
}) => {
  const [editedTodo, setEditedTodo] = React.useState<string>(
    EDITING_MODE_FALSE
  );

  const handleOnClick = (id: string) => () => {
    setEditedTodo(id);
  };

  const handleOnCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setEditedTodo(EDITING_MODE_FALSE);
  };

  const handleOnSave = (id: string, todoTitle: string) => {
    setEditedTodo(EDITING_MODE_FALSE);
    onSave(id, todoTitle);
  };

  const todoList = todos
    ? Object.keys(todos).map((key: string) => (
        <Todo
          key={key}
          id={key}
          title={todos[key].title}
          isDone={todos[key].done}
          onChange={onChange}
          isEditMode={key === editedTodo}
          onClick={handleOnClick}
          onSave={handleOnSave}
          onCancel={handleOnCancel}
          onDelete={onDelete}
        />
      ))
    : "Add your first todo!";

  return <ul className="list-group">{todoList}</ul>;
};

export default Todos;
