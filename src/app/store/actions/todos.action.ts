import { Action } from '@ngrx/store'
import {Todo} from "../../interfaces/todo";

export const ADD_TODO = '[Todo List] Add Todo';
export const SUCCESS_ADD_TODO = '[Todo List] Success Add Todo';
export const EDIT_TODO = '[Todo Item] Edit';
export const DONE_EDIT_TODO = '[Todo Item] Done Edit';
export const SUCCESS_EDIT_TODO = '[Todo Item] Success Edit';
export const CANCEL_EDIT_TODO = '[Todo Item] Cancel Edit';
export const DELETE_TODO = '[Todo Item] Delete';
export const SUCCESS_DELETE_TODO = '[Todo Item] Success Delete';
export const CHECK_ALL_TODOS = '[Todo List] Check All Todos';
export const CLEAR_COMPLETED = '[Todo List] Clear Completed';
export const GET_DATA = '[Todo List] Get Data';
export const LOADED_DATA = '[Todo List] Loaded Data';

export class GetDataAction implements Action {
  type = GET_DATA;

  constructor() {}
}

export class LoadedDataAction implements Action {
  type = LOADED_DATA;

  constructor(public payload: Todo[]) {}
}

export class AddTodoAction implements Action {
  type = ADD_TODO;

  constructor(public payload: string) {}
}

export class SuccessAddTodoAction implements Action {
  type = SUCCESS_ADD_TODO;

  constructor(public payload: Todo[]) {}
}

export class EditTodoAction implements Action {
  type = EDIT_TODO;

  constructor(public payload: Todo) {}
}

export class DoneEditTodoAction implements Action {
  type = DONE_EDIT_TODO;

  constructor(public payload: Todo) {}
}

export class SuccessEditTodoAction implements Action {
  type = SUCCESS_EDIT_TODO;

  constructor() {}
}

export class CancelEditTodoAction implements Action {
  type = CANCEL_EDIT_TODO;

  constructor(public payload: Todo, public cache: string) {}
}

export class DeleteTodoAction implements Action {
  type = DELETE_TODO;

  constructor(public payload: number) {}
}

export class SuccessDeleteTodoAction implements Action {
  type = SUCCESS_DELETE_TODO;

  constructor() {}
}

export class CheckAllTodosAction implements Action {
  type = CHECK_ALL_TODOS;

  constructor() {}
}

export class ClearCompleted implements Action {
  type = CLEAR_COMPLETED;

  constructor() {}
}
