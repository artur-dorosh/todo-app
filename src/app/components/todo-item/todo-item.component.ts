import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() doneEdit = new EventEmitter<Todo>();
  @Output() cancelEdit = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  toEditTodo(value) {
    this.editTodo.emit(value);
  }

  toConfirmEdit(value) {
    this.doneEdit.emit(value);
  }

  toCancelEdit(value) {
    this.cancelEdit.emit(value);
  }

  toDeleteTodo(id) {
    this.deleteTodo.emit(id);
  }
}
