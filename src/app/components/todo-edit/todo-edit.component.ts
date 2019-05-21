import { Component, Input, Output, ViewChild, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  @ViewChild('todo') todoRef: ElementRef;

  @Input()
  todo: Todo;

  @Output()
  cancel: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  edit: EventEmitter<{ id: number, title: string }> = new EventEmitter<{ id: number, title: string }>();

  constructor() { }

  ngOnInit() {
    this.todoRef.nativeElement.value = this.todo.title;
  }

  // Emits edit event on input blur
  onBlur() {
    const title = this.todoRef.nativeElement.value;
    if (title) {
      this.edit.emit({ id: this.todo.id, title: title });
      this.todoRef.nativeElement.value = '';
      this.todoRef.nativeElement.blur();
    }
  }

  // Emits edit event on Enter key pressed
  onKeyup(event: KeyboardEvent) {
    const title = this.todoRef.nativeElement.value;
    if (event.key === 'Enter' && title) {
      this.edit.emit({ id: this.todo.id, title: title });
      this.todoRef.nativeElement.value = '';
      this.todoRef.nativeElement.blur();
    }
  }

  // Emit cancel event on cancel button clicked
  onCancel() {
    this.todoRef.nativeElement.value = '';
    this.cancel.emit(true);
  }
}
