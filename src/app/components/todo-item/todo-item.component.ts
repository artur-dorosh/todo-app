import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: Todo;
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() doneEdit = new EventEmitter<Todo>();
  @Output() cancelEdit = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();

  toEditTodo(value: Todo): void {
    this.editTodo.emit(value);
  }

  toConfirmEdit(value: Todo): void {
    this.doneEdit.emit(value);
  }

  toCancelEdit(value: Todo): void {
    this.cancelEdit.emit(value);
  }

  toDeleteTodo(id: number): void {
    this.deleteTodo.emit(id);
  }
}
