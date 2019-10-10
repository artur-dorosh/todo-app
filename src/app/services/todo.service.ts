import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public beforeEditCache = '';
  public idForTodo = 1;
  private todos = [];

  constructor() {
  }

  get data() {
    return this.todos;
  }

  addTodo(text): Todo[] {
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
    return this.todos;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    const result = {...todo};
    result.editing = true;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === result.id) {
        this.todos[i] = result;
      }
    }
  }

  doneEdit(todo: Todo): void {
    if (!todo.title) {
      todo.title = this.beforeEditCache;
    }
    const result = {...todo};
    result.editing = false;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === result.id) {
        this.todos[i] = result;
      }
    }
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    const result = {...todo};
    result.editing = false;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === result.id) {
        this.todos[i] = result;
      }
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
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
