import {Todo} from '../../interfaces/todo';
import * as todos from '../actions/todos.action';

export const todosReducer = (state: Todo[] = [], action) => {
  switch (action.type) {
    case todos.LOADED_DATA:
      return action.payload;

    case todos.ADD_TODO:
      return [
        ...state,
        {
          title: action.payload,
          id: state.length + 1,
          completed: false,
          editing: false
        }
      ];

    case todos.EDIT_TODO:
      state = state.map(item => {
        return item.id === action.payload.id ? {
          ...item,
          editing: true
        } : {
          ...item
        };
      });

      return state;

    case todos.DONE_EDIT_TODO:
      state = state.map(item => {
        return item.id === action.payload.id ? {
          ...item,
          editing: false
        } : {
          ...item
        };
      });

      return state;

    case todos.CANCEL_EDIT_TODO:
      state = state.map(item => {
        return item.id === action.payload.id ? {
          ...item,
          ...item,
          title: action.cache,
          editing: false
        } : {
          ...item
        };
      });

      return state;

    case todos.DELETE_TODO:
      return state.filter(item => item.id !== action.payload);

    case todos.CHECK_ALL_TODOS:
      return state.map(item => {
        item.completed = !item.completed;
        return item;
      });

    case todos.CLEAR_COMPLETED:
      return state.filter(item => !item.completed);

    default:
      return state;
  }
};
