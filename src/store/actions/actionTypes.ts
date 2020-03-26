import { TodosType, TodoType } from "../Types";

export const GET_TODOS_START = "GET_TODOS_START";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILED = "ADD_TODO_FAILED";

export const EDIT_TODO_TITLE_START = "EDIT_TODO_TITLE_START";
export const EDIT_TODO_TITLE_SUCCESS = "EDIT_TODO_TITLE_SUCCESS";
export const EDIT_TODO_TITLE_FAILED = "EDIT_TODO_TITLE_FAILED";

export const EDIT_CHECKED_TODO_START = "EDIT_CHECKED_TODO_START";
export const EDIT_CHECKED_TODO_SUCCESS = "EDIT_CHECKED_TODO_SUCCESS";
export const EDIT_CHECKED_TODO_FAILED = "EDIT_CHECKED_TODO_FAILED";

export const DELETE_TODO_START = "DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

export type TodoActionTypes =
  | getTodosStart
  | getTodosSuccess
  | getTodosFailed
  | addTodoStart
  | addTodoSuccess
  | addTodoFailed
  | editTodoStart
  | editTodoSuccess
  | editTodoFailed
  | deleteTodoStart
  | deleteTodoSuccess
  | deleteTodoFailed
  | editCheckedTodoStart
  | editCheckedTodoSuccess
  | editCheckedTodoFailed;

export interface getTodosStart {
  type: typeof GET_TODOS_START;
}

export interface getTodosSuccess {
  type: typeof GET_TODOS_SUCCESS;
  payload: TodosType;
}

export interface getTodosFailed {
  type: typeof GET_TODOS_FAILED;
  error: Error;
}

export interface addTodoStart {
  type: typeof ADD_TODO_START;
}

export interface addTodoSuccess {
  type: typeof ADD_TODO_SUCCESS;
  payload: { id: string; todo: TodoType };
}

export interface addTodoFailed {
  type: typeof ADD_TODO_FAILED;
  error: Error;
}

export interface editTodoStart {
  type: typeof EDIT_TODO_TITLE_START;
}

export interface editTodoSuccess {
  type: typeof EDIT_TODO_TITLE_SUCCESS;
  payload: { id: string; updatedTodoTitle: string };
}

export interface editTodoFailed {
  type: typeof EDIT_TODO_TITLE_FAILED;
  error: Error;
}

export interface deleteTodoStart {
  type: typeof DELETE_TODO_START;
}

export interface deleteTodoSuccess {
  type: typeof DELETE_TODO_SUCCESS;
  payload: { id: string };
}

export interface deleteTodoFailed {
  type: typeof DELETE_TODO_FAILED;
  error: Error;
}

export interface editCheckedTodoStart {
  type: typeof EDIT_CHECKED_TODO_START;
}

export interface editCheckedTodoSuccess {
  type: typeof EDIT_CHECKED_TODO_SUCCESS;
  payload: { id: string };
}

export interface editCheckedTodoFailed {
  type: typeof EDIT_CHECKED_TODO_FAILED;
  error: Error;
}
