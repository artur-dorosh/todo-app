import { Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../interfaces/todo';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public filter = 'all';
  todoTitle = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  addTodo(): void {
    this.todoService.addTodo(this.todoTitle);
    this.todoTitle = '';
  }

  editTodo(todo: Todo): void {
    this.todoService.editTodo(todo);
  }

  doneEdit(todo: Todo): void {
    this.todoService.doneEdit(todo);
  }

  cancelEdit(todo: Todo): void {
    this.todoService.cancelEdit(todo);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  remaining(): number {
    return this.todoService.remaining();
  }

  atLeastOneCompleted(): boolean {
    return this.todoService.atLeastOneCompleted();
  }

  clearCompleted(): void {
    this.todoService.clearCompleted();
  }

  checkAllTodos(): void {
    this.todoService.checkAllTodos();
  }

  todosFiltered(): Todo[] {
    return this.todoService.todosFiltered(this.filter);
  }
}
