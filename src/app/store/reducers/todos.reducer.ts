import { ActionReducer, Action } from '@ngrx/store';
import {Todo} from '../../interfaces/todo';
import * as add from '../actions/todos.action';

export const todosReducer = (state: Todo[] = [], action: add.AddTodoAction) => {
  switch (action.type) {
    case add.ADD_TODO:
      return [
        ...state,
        {
          title: 'title' + 1,
          id: 1,
          completed: false,
          editing: false
        }
      ];
    default:
      return state;
  }
};
