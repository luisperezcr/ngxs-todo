import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo } from '../../actions/todo.actions';
import { Todo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  @ViewChild('todo') todo: ElementRef;

  constructor(private store: Store) { }

  // Add new todo on input blur
  onBlur() {
    const title = this.todo.nativeElement.value;
    if (title) {
      const newTodo: Todo = {
        id: +new Date(),
        title: title,
        completed: false,
        editing: false
      };
      this.store.dispatch(new AddTodo(newTodo)).toPromise().then(() => {
        this.todo.nativeElement.value = '';
      });
    }
  }

  // Add new todo on Enter key pressed
  onKey(event: KeyboardEvent) {
    const title = this.todo.nativeElement.value;
    if (event.key === 'Enter' && title) {
      const newTodo: Todo = {
        id: +new Date(),
        title: title,
        completed: false,
        editing: false
      };
      this.store.dispatch(new AddTodo(newTodo)).toPromise().then(() => {
        this.todo.nativeElement.value = '';
        this.todo.nativeElement.blur();
      });
    }
  }
}
