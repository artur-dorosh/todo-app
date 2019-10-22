import {Injectable} from "@angular/core";
import {Effect, ofType} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";

import * as add from "../actions/todos.action"
import {AddTodoAction} from "../actions/todos.action";
import {map, switchMap} from "rxjs/operators";

@Injectable()
export class TodosEffect {

}
