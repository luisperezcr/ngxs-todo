import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input()
  todo: Todo;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onDelete() {
    this.delete.emit(this.todo.id);
  }
}
