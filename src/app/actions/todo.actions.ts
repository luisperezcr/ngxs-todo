import { Todo } from '../models/todo.interface';

export class AddTodo {
  static readonly type = '[TODO] Add';

  constructor(public payload: Todo) {}
}

export class RemoveTodo {
  static readonly type = '[TODO] Remove';

  constructor(public payload: number) {}
}

export class ModifyTodo {
  static readonly type = '[TODO] Modify';

  constructor(public payload: { id: number, title: string }) {}
}

export class ToggleTodo {
  static readonly type = '[TODO] Toggle';

  constructor(public payload: { id: number, completed: boolean }) {}
}
