import * as constants from "../constants";
import { ITodos } from "../Types";
import { Actions } from "../actions/actionTypes";

export interface State {
  todos: ITodos;
}

const initialState: State = {
  todos: {}
};

const todoReducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case constants.GET_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case constants.GET_TODOS_FAILED:
      return state;
    case constants.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: action.payload.todo
        }
      };
    case constants.ADD_TODO_FAILED:
      return state;
    case constants.EDIT_TODO_TITLE_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: {
            ...state.todos[action.payload.id],
            title: action.payload.updatedTodoTitle
          }
        }
      };
    case constants.DELETE_TODO_SUCCESS:
      const updatedTodos = { ...state.todos };
      delete updatedTodos[action.payload.id];
      return {
        ...state,
        todos: updatedTodos
      };
    case constants.EDIT_CHECKED_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: {
            ...state.todos[action.payload.id],
            done: !state.todos[action.payload.id].done
          }
        }
      };
    default:
      return state;
  }
};

export default todoReducer;
