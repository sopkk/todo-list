import * as actionTypes from "../actions/actionTypes";
import { TodosType } from "../Types";

export interface State {
  todos: TodosType;
}

const initialState: State = {
  todos: {}
};

const todoReducer = (
  state = initialState,
  action: actionTypes.TodoActionTypes
): State => {
  switch (action.type) {
    case actionTypes.GET_TODOS_START:
      return state;
    case actionTypes.GET_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case actionTypes.GET_TODOS_FAILED:
      return state;
    case actionTypes.ADD_TODO_START:
      return state;
    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.payload.id]: action.payload.todo
        }
      };
    case actionTypes.ADD_TODO_FAILED:
      return state;
    case actionTypes.EDIT_TODO_TITLE_SUCCESS:
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
    case actionTypes.DELETE_TODO_SUCCESS:
      const updatedTodos = { ...state.todos };
      delete updatedTodos[action.payload.id];
      return {
        ...state,
        todos: updatedTodos
      };
    case actionTypes.EDIT_CHECKED_TODO_SUCCESS:
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
