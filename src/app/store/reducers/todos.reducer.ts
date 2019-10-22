import {Todo} from '../../interfaces/todo';
import * as todos from '../actions/todos.action';

let counter = 1;
let cache = '';

export const todosReducer = (state: Todo[] = [], action) => {
  switch (action.type) {
    case todos.ADD_TODO:
      if (!action.payload) {
        return state;
      }

      return [
        ...state,
        {
          title: action.payload,
          id: counter++,
          completed: false,
          editing: false
        }
      ];

    case todos.EDIT_TODO:
      cache = action.payload.title;
      state = state.map(item => {
        if (item.id === action.payload.id) {
           return {
             ...item,
             editing: true
           };
        }
        return {
          ...item
        };
      });

      return state;

    case todos.DONE_EDIT_TODO:
      if (!action.payload.title) {
        state = state.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: cache,
              editing: false
            };
          }
          return {
            ...item
          };
        });

        return state;
      }

      state = state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            editing: false
          };
        }
        return {
          ...item
        };
      });

      return state;

    case todos.CANCEL_EDIT_TODO:
      state = state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: cache,
            editing: false
          };
        }
        return {
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
