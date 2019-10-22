import { Action } from '@ngrx/store'
import {Todo} from "../../interfaces/todo";

export const ADD_TODO = '[Todo List] Add Todo';
export const EDIT_TODO = '[Todo Item] Edit';
export const DONE_EDIT_TODO = '[Todo Item] Done Edit';
export const CANCEL_EDIT_TODO = '[Todo Item] Cancel Edit';
export const DELETE_TODO = '[Todo Item] Delete';
export const CHECK_ALL_TODOS = '[Todo List] Check All Todos';
export const CLEAR_COMPLETED = '[Todo List] Clear Completed';
export const FILTER_TODOS = '[Todo List] Filter Todos';

export class AddTodoAction implements Action {
  type = ADD_TODO;

  constructor(public payload: string) {}
}

export class EditTodoAction implements Action{
  type = EDIT_TODO;

  constructor(public payload: Todo) {};
}

export class DoneEditTodoAction implements Action{
  type = DONE_EDIT_TODO;

  constructor(public payload: Todo) {};
}

export class CancelEditTodoAction implements Action{
  type = CANCEL_EDIT_TODO;

  constructor(public payload: Todo) {};
}

export class DeleteTodoAction implements Action{
  type = DELETE_TODO;

  constructor(public payload: number) {};
}

export class CheckAllTodosAction implements Action{
  type = CHECK_ALL_TODOS;

  constructor() {};
}

export class ClearCompleted implements Action{
  type = CLEAR_COMPLETED;

  constructor() {};
}

export class FilterTodos implements Action{
  type = FILTER_TODOS;

  constructor(public payload: string) {};
}
