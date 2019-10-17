import { Action } from '@ngrx/store'
import {Todo} from "../../interfaces/todo";

export const ADD_TODO = '[Todo List] Add Todo'

export class AddTodoAction implements Action {
  type = ADD_TODO;

  constructor(public payload: Todo) {}
}
