import * as React from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Todo.css";

interface Props {
  id: string;
  title: string;
  isDone: boolean;
  isEditMode: boolean;
  onChange: (id: string) => () => void;
  onClick: (id: string) => () => void;
  onSave: (id: string, todoTitle: string) => void;
  onCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDelete: (id: string) => void;
}

const Todo: React.FunctionComponent<Props> = ({
  id,
  title,
  isDone,
  isEditMode,
  onChange,
  onClick,
  onSave,
  onCancel,
  onDelete
}) => {
  const [todoTitle, setTodoTitle] = React.useState<string>(title);
  const [hoveredTodo, setHoveredTodo] = React.useState<string>("-1");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  const handleOnDelete = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onDelete(id);
  };

  const deleteButton = (
    <img
      src="https://i.ya-webdesign.com/images/edit-delete-icon-png-4.png"
      alt="X"
      className="delete-icon"
      onClick={handleOnDelete}
    />
  );
  const handleOnMouseEnter = (id: string) => () => {
    setHoveredTodo(id);
  };

  const handleOnMouseLeave = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setHoveredTodo("-1");
  };

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onSave(id, todoTitle);
  };

  const handleOnCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTodoTitle(title);
    onCancel(event);
  };

  const editInput: JSX.Element = (
    <div className="input-group">
      <Input
        name="title"
        type="text"
        value={todoTitle}
        className="form-control"
        onChange={handleOnChange}
      />
      <div className="input-group-append">
        <Button
          name="save-button"
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleOnClick}
        >
          ✓
        </Button>
        <Button
          name="cancel-button"
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleOnCancel}
        >
          &times;
        </Button>
      </div>
    </div>
  );
  return (
    <li
      key={id}
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      onMouseEnter={handleOnMouseEnter(id)}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className="todo-div" onClick={onClick(id)}>
        {isEditMode ? editInput : title}
      </div>
      <div className="input-group-prepend">
        {!isEditMode && hoveredTodo === id && deleteButton}
        <div className="input-group-text">
          <Input
            type="checkbox"
            className=""
            checked={isDone}
            value=""
            name="done"
            onChange={onChange(id)}
          />
        </div>
      </div>
    </li>
  );
};

export default Todo;
