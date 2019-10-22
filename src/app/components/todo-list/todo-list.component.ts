import { Component } from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {select, Store} from '@ngrx/store';
import {from, Observable} from 'rxjs';
import * as fromRoot from "../../store/reducers";
import {
  AddTodoAction,
  CancelEditTodoAction, CheckAllTodosAction, ClearCompleted, DeleteTodoAction,
  DoneEditTodoAction,
  EditTodoAction
} from "../../store/actions/todos.action";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public filter = 'all';
  todoTitle = '';
  public todos$: Observable<Todo[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.todos$ = store.select(fromRoot.getTodosState);
  }

  addTodo(): void {
    this.store.dispatch(new AddTodoAction(this.todoTitle));
    this.todoTitle = '';
  }

  editTodo(todo: Todo): void {
    this.store.dispatch(new EditTodoAction(todo));
  }

  doneEdit(todo: Todo): void {
    this.store.dispatch(new DoneEditTodoAction(todo));
  }

  cancelEdit(todo: Todo): void {
    this.store.dispatch(new CancelEditTodoAction(todo));
  }

  deleteTodo(id: number): void {
    this.store.dispatch(new DeleteTodoAction(id));
  }

  remaining(todos: Todo[]): number {
    return todos.filter(item => !item.completed).length;
  }

  atLeastOneCompleted(todos: Todo[]): boolean {
    return todos.filter(item => item.completed).length > 0;
  }

  clearCompleted(): void {
    this.store.dispatch(new ClearCompleted);
  }

  checkAllTodos(): void {
    this.store.dispatch(new CheckAllTodosAction());
  }

  todosFiltered(todos: Todo[]): Todo[] {
    if (this.filter === 'all') {
      return todos;
    } else if (this.filter === 'active') {
      return todos.filter(item => !item.completed);
    } else if (this.filter === 'completed') {
      return todos.filter(item => item.completed);
    }

    return todos;
  }
}
