import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../../state/todo.state';
import { Todo } from '../../models/todo.interface';
import { RemoveTodo, ToggleTodo, ModifyTodo } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Select(TodoState.getTodos)
  todos$: Observable<Todo>;

  completedTodos: Todo[];
  incompletedTodos: Todo[];

  constructor(private store: Store) { }

  ngOnInit() {
    this.todos$.subscribe((todos: any) => {
      this.completedTodos = [];
      this.incompletedTodos = [];
      todos.forEach((todo: Todo) => {
        if (todo.completed) {
          this.completedTodos.push(todo);
        } else {
          this.incompletedTodos.push(todo);
        }
      });
    });
  }

  /**
   * Dispatchs action to delete a todo
   *
   * @param id - the id of the todo
   */
  onDelete(id: number) {
    this.store.dispatch(new RemoveTodo(id));
  }

  /**
   * Receives the toggle event emitted and dispatchs action to toggle todo (completed/incompleted)
   *
   * @param payload - todo data from event emitted
   */
  onToggle(payload: { id: number, completed: boolean }) {
    this.store.dispatch(new ToggleTodo({ id: payload.id, completed: payload.completed }));
  }

  /**
   * Receives the edit event emitted and dispatches action to edit todo with new title
   *
   * @param payload - todo data from event emitted
   */
  onEdit(payload: { id: number, title: string }) {
    this.store.dispatch(new ModifyTodo({ id: payload.id, title: payload.title }));
  }
}
