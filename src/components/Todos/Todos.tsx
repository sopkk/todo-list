import * as React from "react";

import "./Todos.css";
import Todo from "../Todo/Todo";
import { TodosType } from "../../store/Types";

const EDITING_MODE_FALSE: string = "-1";

interface Props {
  todos: TodosType;
  handleCheckboxChange: (id: string) => void;
  handleSaveChanges: (id: string, todoTitle: string) => void;
  handleDelete: (id: string) => void;
}

const Todos: React.FunctionComponent<Props> = ({
  todos,
  handleCheckboxChange,
  handleSaveChanges,
  handleDelete
}) => {
  const [editedTodo, setEditedTodo] = React.useState<string>(
    EDITING_MODE_FALSE
  );

  const onClickedHandler = (id: string) => {
    setEditedTodo(id);
  };

  const onCancelHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setEditedTodo(EDITING_MODE_FALSE);
  };

  const onSaveChangesHandler = (id: string, todoTitle: string) => {
    setEditedTodo(EDITING_MODE_FALSE);
    handleSaveChanges(id, todoTitle);
  };

  const todoList = todos
    ? Object.keys(todos).map((key: keyof typeof todos) => (
        <Todo
          key={key.toString()}
          id={key.toString()}
          title={todos[key].title}
          done={todos[key].done}
          handleChange={handleCheckboxChange}
          editingMode={key === editedTodo}
          handleClick={onClickedHandler}
          handleSaveChanges={(id: string, todoTitle: string) =>
            onSaveChangesHandler(id, todoTitle)
          }
          handleCancel={onCancelHandler}
          handleDelete={handleDelete}
        />
      ))
    : "Add your first todo!";

  return <ul className="list-group">{todoList}</ul>;
};

export default Todos;
