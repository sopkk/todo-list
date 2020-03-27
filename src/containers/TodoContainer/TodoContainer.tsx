import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as todoActions from "../../store/actions/todoActions";
import { State } from "../../store/reducers/todoReducer";
import Button from "../../components/Button/Button";
import Todos from "../../components/Todos/Todos";
import Modal from "../../components/Modal/Modal";
import { ITodo } from "../../store/Types";
import "./TodoContainer.css";

export const ADD_TODO = "Add a todo";

const TodoContainer: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(todoActions.getTodos());
  }, [dispatch]);

  const todos = useSelector((state: State) => state.todos);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  const handleOnClick = () => {
    setIsOpen(true);
  };

  const handleOnAdd = (todo: ITodo) => {
    dispatch(todoActions.addTodo(todo));
    handleOnClose();
  };

  const handleOnChange = (id: string) => () => {
    dispatch(todoActions.editCheckedTodo(id, !todos[id].done));
  };

  const handleOnSave = (id: string, todoTitle: string) => {
    dispatch(todoActions.editTodoTitle(id, todoTitle));
  };

  const handleOnDelete = (id: string) => {
    dispatch(todoActions.deleteTodo(id));
  };

  return (
    <div className="todo-container">
      <Button
        type="button"
        name=""
        className="btn btn-info"
        onClick={handleOnClick}
      >
        Add a todo
      </Button>
      <Todos
        todos={todos}
        onChange={handleOnChange}
        onSave={handleOnSave}
        onDelete={handleOnDelete}
      />
      <Modal onSave={handleOnAdd} onClose={handleOnClose} isOpen={isOpen} />
    </div>
  );
};

export default TodoContainer;
