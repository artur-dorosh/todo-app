import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() traxa = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTraxa() {
    this.traxa.emit(this.todos);
  }

}
