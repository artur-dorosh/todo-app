import {Todo} from "../../interfaces/todo";
import * as fromAdd from "./todos.reducer";

export interface State {
  todos: Todo[],
  cache: string
}

export const reducers = {
  todos: fromAdd.todosReducer
};

export const getTodosState = (state: State) => state.todos;
