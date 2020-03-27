import { ITodos, ITodo } from "../Types";
import * as constants from "../constants";

export type Actions =
  | getTodosSuccess
  | getTodosFailed
  | addTodoSuccess
  | addTodoFailed
  | editTodoSuccess
  | editTodoFailed
  | deleteTodoSuccess
  | deleteTodoFailed
  | editCheckedTodoSuccess
  | editCheckedTodoFailed;

export interface getTodosSuccess {
  type: typeof constants.GET_TODOS_SUCCESS;
  payload: ITodos;
}

export interface getTodosFailed {
  type: typeof constants.GET_TODOS_FAILED;
  error: Error;
}

export interface addTodoSuccess {
  type: typeof constants.ADD_TODO_SUCCESS;
  payload: { id: string; todo: ITodo };
}

export interface addTodoFailed {
  type: typeof constants.ADD_TODO_FAILED;
  error: Error;
}

export interface editTodoSuccess {
  type: typeof constants.EDIT_TODO_TITLE_SUCCESS;
  payload: { id: string; updatedTodoTitle: string };
}

export interface editTodoFailed {
  type: typeof constants.EDIT_TODO_TITLE_FAILED;
  error: Error;
}

export interface deleteTodoSuccess {
  type: typeof constants.DELETE_TODO_SUCCESS;
  payload: { id: string };
}

export interface deleteTodoFailed {
  type: typeof constants.DELETE_TODO_FAILED;
  error: Error;
}

export interface editCheckedTodoSuccess {
  type: typeof constants.EDIT_CHECKED_TODO_SUCCESS;
  payload: { id: string };
}

export interface editCheckedTodoFailed {
  type: typeof constants.EDIT_CHECKED_TODO_FAILED;
  error: Error;
}
