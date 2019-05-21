import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.interface';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../../state/todo.state';
import { RemoveTodo, ToggleTodo, ModifyTodo } from '../../actions/todo.actions';
import { Observable } from 'rxjs';

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

  onDelete(id: number) {
    this.store.dispatch(new RemoveTodo(id));
  }

  onToggle(data: { id: number, completed: boolean }) {
    this.store.dispatch(new ToggleTodo({ id: data.id, completed: data.completed }));
  }

  onEdit(payload: { id: number, title: string }) {
    console.log('asdasd');
    this.store.dispatch(new ModifyTodo({ id: payload.id, title: payload.title }));
  }
}
