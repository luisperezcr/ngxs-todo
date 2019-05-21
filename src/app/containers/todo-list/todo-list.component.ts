import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { TodoState } from '../../state/todo.state';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Select(TodoState.getTodos)
  todos$: Observable<Todo>;

  constructor() { }
}
