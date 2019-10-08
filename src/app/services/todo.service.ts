import {Injectable, OnInit} from '@angular/core';
import {Todo} from '../interfaces/todo';
import {TodoListComponent} from '../components/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public filter = 'all';
  public beforeEditCache = '';
  public idForTodo = 1;
  public todoTitle = '';
  public todos = [];

  constructor() {
  }

  addTodo(text): void {
    if (!text) {
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      title: text,
      completed: false,
      editing: false
    });

    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (!todo.title) {
      todo.title = this.beforeEditCache;
    }

    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
    this.idForTodo--;
  }

  remaining(): number {
    return this.todos.filter(item => !item.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(item => item.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(item => !item.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(item => item.completed = (<HTMLInputElement> event.target).checked);
  }

  todosFiltered(filter): Todo[] {
    if (filter === 'all') {
      return this.todos;
    } else if (filter === 'active') {
      return this.todos.filter(item => !item.completed);
    } else if (filter === 'completed') {
      return this.todos.filter(item => item.completed);
    }

    return this.todos;
  }
}
