import * as React from "react";

import { ITodo } from "../../store/Types";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Modal.css";

interface Props {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSave: (todo: ITodo) => void;
}

const Modal: React.FunctionComponent<Props> = ({ isOpen, onClose, onSave }) => {
  const [todo, setTodo] = React.useState<ITodo>({
    title: "",
    done: false
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type, checked, value, name } = event.target;
    setTodo({ ...todo, [name]: type === "checkbox" ? checked : value });
  };

  return isOpen ? (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add a new todo</h5>
            <Button
              name="close-modal-x"
              type="button"
              className="close"
              onClick={onClose}
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
              onChange={handleOnChange}
            />
            <div className="form-check">
              <Input
                name="done"
                type="checkbox"
                className="form-check-input"
                value=""
                onChange={handleOnChange}
              />
              <label className="form-check-label">Done</label>
            </div>
          </div>
          <div className="modal-footer">
            <Button
              type="button"
              name="save-changes"
              className="btn btn-primary"
              onClick={() => {
                onSave(todo);
              }}
            >
              Save changes
            </Button>
            <Button
              type="button"
              name="close-modal"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
