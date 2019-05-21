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

  @Output()
  edit: EventEmitter<{ id: number, title: string }> = new EventEmitter<{ id: number, title: string }>();

  isEditing = false;

  constructor() { }

  onDelete() {
    this.delete.emit(this.todo.id);
  }

  onEditToggle() {
    this.isEditing = true;
  }

  onChange() {
    this.toggle.emit({ id: this.todo.id, completed: !this.todo.completed });
  }

  onCancel() {
    this.isEditing = false;
  }

  onEdit(payload: { id: number, title: string }) {
    this.edit.emit({ id: payload.id, title: payload.title });
    this.isEditing = false;
  }
}
