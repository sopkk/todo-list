import * as React from "react";

import "./Modal.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { TodoType } from "../../store/Types";

interface Props {
  handleClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleSaveChanges: (todo: TodoType) => void;
}

const Modal: React.FunctionComponent<Props> = ({
  handleClose,
  handleSaveChanges
}) => {
  const [todo, setTodo] = React.useState<TodoType>({
    title: "",
    done: false
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.type === "checkbox"
      ? setTodo({
          ...todo,
          [event.target.name]: event.target.checked
        })
      : setTodo({
          ...todo,
          [event.target.name]: event.target.value
        });
  };

  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add a new todo</h5>
            <Button
              name="close-modal-x"
              type="button"
              className="close"
              handleClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body">
            <Input
              name="title"
              type="text"
              placeholder="title"
              className="form-control"
              value={todo.title}
              handleChange={onChangeHandler}
            />
            <div className="form-check">
              <Input
                name="done"
                type="checkbox"
                className="form-check-input"
                value=""
                handleChange={onChangeHandler}
              />
              <label className="form-check-label">Done</label>
            </div>
          </div>
          <div className="modal-footer">
            <Button
              type="button"
              name="save-changes"
              className="btn btn-primary"
              handleClick={() => {
                handleSaveChanges(todo);
              }}
            >
              Save changes
            </Button>
            <Button
              type="button"
              name="close-modal"
              className="btn btn-secondary"
              handleClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
