import { Dispatch } from "redux";
import axios from "axios";

import { Actions } from "./actionTypes";
import { ITodos, ITodo } from "../Types";
import * as constants from "../constants";

const BASE_URL: string = "https://todo-list-b7001.firebaseio.com";

export const getTodos = () => {
  return (dispatch: Dispatch) => {
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

const getTodosSuccess = (payload: ITodos): Actions => ({
  type: constants.GET_TODOS_SUCCESS,
  payload: payload
});

const getTodosFailed = (error: Error): Actions => ({
  type: constants.GET_TODOS_FAILED,
  error: error
});

export const addTodo = (todo: ITodo) => {
  return (dispatch: Dispatch) => {
    axios
      .post(`${BASE_URL}/todos.json`, todo)
      .then(response => {
        dispatch(addTodoSucces(response.data.name, todo));
      })
      .catch((error: Error) => dispatch(addTodoFailed(error)));
  };
};

const addTodoSucces = (id: string, todo: ITodo): Actions => ({
  type: constants.ADD_TODO_SUCCESS,
  payload: { id: id, todo: todo }
});

const addTodoFailed = (error: Error): Actions => ({
  type: constants.ADD_TODO_FAILED,
  error: error
});

export const editTodoTitle = (id: string, updatedTodoTitle: string) => {
  return (dispatch: Dispatch) => {
    axios
      .put(`${BASE_URL}/todos/${id}/title.json`, `"${updatedTodoTitle}"`)
      .then(() => {
        dispatch(editTodoTitleSuccess(id, updatedTodoTitle));
      })
      .catch((error: Error) => {
        dispatch(editTodoTitleFailed(error));
      });
  };
};

const editTodoTitleSuccess = (
  id: string,
  updatedTodoTitle: string
): Actions => ({
  type: constants.EDIT_TODO_TITLE_SUCCESS,
  payload: { id: id, updatedTodoTitle: updatedTodoTitle }
});

const editTodoTitleFailed = (error: Error): Actions => ({
  type: constants.EDIT_TODO_TITLE_FAILED,
  error: error
});

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch) => {
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

const deleteTodoSuccess = (id: string): Actions => ({
  type: constants.DELETE_TODO_SUCCESS,
  payload: { id: id }
});

const deleteTodoFailed = (error: Error): Actions => ({
  type: constants.DELETE_TODO_FAILED,
  error: error
});

export const editCheckedTodo = (id: string, done: boolean) => {
  return (dispatch: Dispatch) => {
    axios
      .put(`${BASE_URL}/todos/${id}/done.json`, done)
      .then(() => {
        dispatch(editCheckedTodoSuccess(id));
      })
      .catch((error: Error) => {
        dispatch(editCheckedTodoFailed(error));
      });
  };
};

const editCheckedTodoSuccess = (id: string): Actions => ({
  type: constants.EDIT_CHECKED_TODO_SUCCESS,
  payload: { id: id }
});

const editCheckedTodoFailed = (error: Error): Actions => ({
  type: constants.EDIT_CHECKED_TODO_FAILED,
  error: error
});
