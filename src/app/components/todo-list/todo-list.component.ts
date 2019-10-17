import { Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../interfaces/todo';
import {select, Store} from '@ngrx/store';
import {addNewTodo} from '../../store/actions/todos.action';
import {Observable} from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public filter = 'all';
  todoTitle = '';
  test$: Observable<Todo>;
  private todos = this.store;

  constructor(private store: Store<Todo>) {
    this.test$ = store.pipe(select('test'));
  }

  ngOnInit() {
  }

  addTodo(): void {
    this.store.dispatch({ type: 'ADD_TODO' });
    this.todoTitle = '';
  }

  // editTodo(todo: Todo): void {
  //   this.todoService.editTodo(todo);
  // }
  //
  // doneEdit(todo: Todo): void {
  //   this.todoService.doneEdit(todo);
  // }
  //
  // cancelEdit(todo: Todo): void {
  //   this.todoService.cancelEdit(todo);
  // }
  //
  // deleteTodo(id: number): void {
  //   this.todoService.deleteTodo(id);
  // }
  //
  // remaining(): number {
  //   return this.todoService.remaining();
  // }
  //
  // atLeastOneCompleted(): boolean {
  //   return this.todoService.atLeastOneCompleted();
  // }
  //
  // clearCompleted(): void {
  //   this.todoService.clearCompleted();
  // }
  //
  // checkAllTodos(): void {
  //   this.todoService.checkAllTodos();
  // }
  //
  // todosFiltered(): Todo[] {
  //   return this.todoService.todosFiltered(this.filter);
  // }
}
