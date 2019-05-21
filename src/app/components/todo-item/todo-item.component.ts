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

  @Output()
  toggle: EventEmitter<{ id: number, completed: boolean }> = new EventEmitter<{ id: number, completed: boolean }>();

  constructor() { }

  onDelete() {
    this.delete.emit(this.todo.id);
  }

  onChange() {
    this.toggle.emit({ id: this.todo.id, completed: !this.todo.completed });
  }
}
