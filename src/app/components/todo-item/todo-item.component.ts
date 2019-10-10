import { Component, OnInit } from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  todoTitle = '';
  filter: string;

  constructor(private todoService: TodoService, private todoListComponent: TodoListComponent) { }

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

  todosFiltered(): Todo[] {
    this.filter = this.todoListComponent.filter;
    return this.todoService.todosFiltered(this.filter);
  }
}
