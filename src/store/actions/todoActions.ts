import { Dispatch } from "redux";
import axios from "axios";

import * as actionTypes from "./actionTypes";
import { TodosType, TodoType } from "../Types";

const BASE_URL: string = "https://todo-list-b7001.firebaseio.com";

export const getTodos = () => {
  return (dispatch: Dispatch) => {
    dispatch(getTodosStart());
    axios
      .get(`${BASE_URL}/todos.json`)
      .then(response => {
        dispatch(getTodosSuccess(response.data));
      })
      .catch((error: Error) => {
        dispatch(getTodosFailed(error));
      });
  };
};

const getTodosStart = (): actionTypes.TodoActionTypes => ({
  type: actionTypes.GET_TODOS_START
});

const getTodosSuccess = (payload: TodosType): actionTypes.TodoActionTypes => ({
  type: actionTypes.GET_TODOS_SUCCESS,
  payload: payload
});

const getTodosFailed = (error: Error): actionTypes.TodoActionTypes => ({
  type: actionTypes.GET_TODOS_FAILED,
  error: error
});

export const addTodo = (todo: TodoType) => {
  return (dispatch: Dispatch) => {
    dispatch(addTodoStart());
    axios
      .post(`${BASE_URL}/todos.json`, todo)
      .then(response => {
        dispatch(addTodoSucces(response.data, todo));
      })
      .catch((error: Error) => dispatch(addTodoFailed(error)));
  };
};

const addTodoStart = (): actionTypes.TodoActionTypes => ({
  type: actionTypes.ADD_TODO_START
});

const addTodoSucces = (
  id: string,
  todo: TodoType
): actionTypes.TodoActionTypes => ({
  type: actionTypes.ADD_TODO_SUCCESS,
  payload: { id: id, todo: todo }
});

const addTodoFailed = (error: Error): actionTypes.TodoActionTypes => ({
  type: actionTypes.ADD_TODO_FAILED,
  error: error
});

export const editTodoTitle = (id: string, updatedTodoTitle: string) => {
  return (dispatch: Dispatch) => {
    dispatch(editTodoTitleStart());
    axios
      .patch(`${BASE_URL}/todos/${id}.json`, { title: updatedTodoTitle })
      .then(() => {
        dispatch(editTodoTitleSuccess(id, updatedTodoTitle));
      })
      .catch((error: Error) => {
        dispatch(editTodoTitleFailed(error));
      });
  };
};

const editTodoTitleStart = (): actionTypes.TodoActionTypes => ({
  type: actionTypes.EDIT_CHECKED_TODO_START
});

const editTodoTitleSuccess = (
  id: string,
  updatedTodoTitle: string
): actionTypes.TodoActionTypes => ({
  type: actionTypes.EDIT_TODO_TITLE_SUCCESS,
  payload: { id: id, updatedTodoTitle: updatedTodoTitle }
});

const editTodoTitleFailed = (error: Error): actionTypes.TodoActionTypes => ({
  type: actionTypes.EDIT_TODO_TITLE_FAILED,
  error: error
});

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(deleteTodoStart());
    axios
      .delete(`${BASE_URL}/todos/${id}.json`)
      .then(() => {
        dispatch(deleteTodoSuccess(id));
      })
      .catch((error: Error) => {
        dispatch(deleteTodoFailed(error));
      });
  };
};

const deleteTodoStart = (): actionTypes.TodoActionTypes => ({
  type: actionTypes.DELETE_TODO_START
});

const deleteTodoSuccess = (id: string): actionTypes.TodoActionTypes => ({
  type: actionTypes.DELETE_TODO_SUCCESS,
  payload: { id: id }
});

const deleteTodoFailed = (error: Error): actionTypes.TodoActionTypes => ({
  type: actionTypes.DELETE_TODO_FAILED,
  error: error
});

export const editCheckedTodo = (id: string, done: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch(editCheckedTodoStart());
    axios
      .patch(`${BASE_URL}/todos/${id}.json`, { done: done })
      .then(() => {
        dispatch(editCheckedTodoSuccess(id));
      })
      .catch((error: Error) => {
        dispatch(editCheckedTodoFailed(error));
      });
  };
};

const editCheckedTodoStart = (): actionTypes.TodoActionTypes => ({
  type: actionTypes.EDIT_CHECKED_TODO_START
});

const editCheckedTodoSuccess = (id: string): actionTypes.TodoActionTypes => ({
  type: actionTypes.EDIT_CHECKED_TODO_SUCCESS,
  payload: { id: id }
});

const editCheckedTodoFailed = (error: Error): actionTypes.TodoActionTypes => ({
  type: actionTypes.EDIT_CHECKED_TODO_FAILED,
  error: error
});
