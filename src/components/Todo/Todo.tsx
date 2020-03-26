import * as React from "react";

import "./Todo.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface Props {
  id: string;
  title: string;
  done: boolean;
  editingMode: boolean;
  handleChange: (id: string) => void;
  handleClick: (id: string) => void;
  handleSaveChanges: (id: string, todoTitle: string) => void;
  handleCancel: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleDelete: (id: string) => void;
}

const Todo: React.FunctionComponent<Props> = ({
  id,
  title,
  done,
  editingMode,
  handleChange,
  handleClick,
  handleSaveChanges,
  handleCancel,
  handleDelete
}) => {
  const [todoTitle, setTodoTitle] = React.useState<string>(title);
  const [deleteButton, setDeleteButton] = React.useState<JSX.Element | null>(
    null
  );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  const onDeleteHandler = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.stopPropagation();
    handleDelete(id);
  };

  const onMouseEnterHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    if (!editingMode) {
      setDeleteButton(
        <img
          src="https://i.ya-webdesign.com/images/edit-delete-icon-png-4.png"
          alt="X"
          className="delete-icon"
          onClick={onDeleteHandler}
        />
      );
    }
  };

  const onMouseLeaveHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setDeleteButton(null);
  };

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    handleSaveChanges(id, todoTitle);
  };

  const onCancelHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTodoTitle(title);
    handleCancel(event);
  };

  const editInput: JSX.Element = (
    <div className="input-group">
      <Input
        name="title"
        type="text"
        value={todoTitle}
        className="form-control"
        handleChange={onChangeHandler}
      />
      <div className="input-group-append">
        <Button
          name="save-button"
          className="btn btn-outline-secondary"
          type="button"
          handleClick={onClickHandler}
        >
          ✓
        </Button>
        <Button
          name="cancel-button"
          className="btn btn-outline-secondary"
          type="button"
          handleClick={onCancelHandler}
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
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div
        className="todo-div"
        onClick={() => {
          handleClick(id);
        }}
      >
        {editingMode ? editInput : title}
      </div>
      <div className="input-group-prepend">
        {deleteButton}
        <div className="input-group-text">
          <Input
            type="checkbox"
            className=""
            checked={done}
            value=""
            name="done"
            handleChange={() => {
              handleChange(id);
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default Todo;
