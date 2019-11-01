import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from "rxjs";
import {Action} from '@ngrx/store';

import * as actions from '../actions/todos.action';
import {LoadedDataAction, SuccessAddTodoAction, SuccessDeleteTodoAction, SuccessEditTodoAction} from '../actions/todos.action';
import {map, switchMap} from 'rxjs/operators';
import {TodoService} from '../../services/todo.service';
import {AddTodoAction} from '../actions/todos.action';
import {DoneEditTodoAction} from '../actions/todos.action';
import {DeleteTodoAction} from '../actions/todos.action';

@Injectable()
export class TodosEffects {
  @Effect()
  getData$: Observable<Action> = this.actions$.pipe(
    ofType(actions.GET_DATA),
    switchMap(() => {
      return this.todoService
        .getData()
        .pipe(map(data => {
          return new LoadedDataAction(data);
        }));
    })
  );

  @Effect()
  addTodo$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ADD_TODO),
    switchMap((action: AddTodoAction) => {
      return this.todoService
        .addTodo(action.payload)
        .pipe(map(data => {
          return new SuccessAddTodoAction(data);
        }));
    })
  );

  @Effect()
  doneEdit$: Observable<Action> = this.actions$.pipe(
    ofType(actions.DONE_EDIT_TODO),
    switchMap((action: DoneEditTodoAction) => {
      return this.todoService
        .doneEdit(action.payload)
        .pipe(map(() => {
        return new SuccessEditTodoAction();
      }));
    })
  );

  @Effect()
  deleteTodo$: Observable<Action> = this.actions$.pipe(
    ofType(actions.DELETE_TODO),
    switchMap((action: DeleteTodoAction) => {
      return this.todoService
        .deleteTodo(action.payload)
        .pipe(map(() => {
          return new SuccessDeleteTodoAction();
        }));
    })
  );

  constructor(
    private todoService: TodoService,
    private actions$: Actions
  ) {}
}
