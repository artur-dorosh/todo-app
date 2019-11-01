import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AddTodoAction, DeleteTodoAction, DoneEditTodoAction} from '../store/actions/todos.action';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'http://localhost:4200/todos';

  constructor(private http: HttpClient) {}

  getData(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(payload): Observable<Todo[]> {
    const body = {
      title: payload,
      completed: false,
      editing: false
    };
    return this.http.post<Todo[]>(this.url, body);
  }

  doneEdit(payload): Observable<void> {
      return this.http.put<void>(`${this.url}/${payload.id}`, {
        ...payload,
        editing: false});
  }

  deleteTodo(payload): Observable<void> {
    return this.http.delete<void>(`${this.url}/${payload}`);
  }
}
