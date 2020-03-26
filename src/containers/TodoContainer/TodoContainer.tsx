import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./TodoContainer.css";
import { TodoType } from "../../store/Types";
import Modal from "../../components/Modal/Modal";
import Todos from "../../components/Todos/Todos";
import Button from "../../components/Button/Button";
import { State } from "../../store/reducers/todoReducer";
import * as todoActions from "../../store/actions/todoActions";

export const ADD_TODO = "Add a todo";

const TodoContainer: React.FunctionComponent = () => {
  const [modal, setModal] = React.useState<JSX.Element | null>(null);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(todoActions.getTodos());
  }, [dispatch]);

  const todos = useSelector((state: State) => state.todos);

  const handleClose = () => {
    setModal(null);
  };

  const handleClick = () => {
    setModal(
      <Modal handleSaveChanges={handleAddNewTodo} handleClose={handleClose} />
    );
  };

  const handleAddNewTodo = (todo: TodoType) => {
    dispatch(todoActions.addTodo(todo));
    handleClose();
  };

  const handleTodoDoneChange = (id: string) => {
    dispatch(todoActions.editCheckedTodo(id, !todos[id].done));
  };

  const handleSaveChanges = (id: string, todoTitle: string) => {
    dispatch(todoActions.editTodoTitle(id, todoTitle));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(todoActions.deleteTodo(id));
  };

  return (
    <div className="todo-container">
      <Button
        type="button"
        name=""
        className="btn btn-info"
        handleClick={handleClick}
      >
        Add a todo
      </Button>
      <Todos
        todos={todos}
        handleCheckboxChange={handleTodoDoneChange}
        handleSaveChanges={handleSaveChanges}
        handleDelete={handleDeleteTodo}
      />
      {modal}
    </div>
  );
};

export default TodoContainer;
