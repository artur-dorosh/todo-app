import { Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public filter = 'all';

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
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
}
