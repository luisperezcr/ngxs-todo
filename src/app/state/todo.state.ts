import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from '../models/todo.interface';
import { AddTodo, RemoveTodo, ModifyTodo, ToggleTodo } from '../actions/todo.actions';

export class TodoStateModel {
  todos: Todo[];
}

const initialState: Todo[] = [
  {
    title: 'Create an awesome todo app',
    id: 1,
    completed: true,
    editing: false
  },
  {
    title: 'Drink coffee',
    id: 2,
    completed: true,
    editing: false
  },
  {
    title: 'Sleep (?)',
    id: 3,
    completed: false,
    editing: false
  }
];

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: initialState
  }
})
export class TodoState {
  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  add({ getState, patchState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
    const state = getState();
    patchState({
      todos: [...state.todos, payload]
    });
  }

  @Action(RemoveTodo)
  remove({ getState, patchState }: StateContext<TodoStateModel>, { payload }: RemoveTodo) {
    patchState({
      todos: getState().todos.filter(todo => todo.id !== payload)
    });
  }

  @Action(ModifyTodo)
  modify({ getState, patchState }: StateContext<TodoStateModel>, { payload }: ModifyTodo) {
    const state = getState();
    state.todos.map((todo) => {
      if (todo.id === payload.id) {
        return todo.title = payload.title;
      }
      return todo;
    });
    patchState({
      todos: [...state.todos]
    });
  }

  @Action(ToggleTodo)
  toggle({ getState, patchState }: StateContext<TodoStateModel>, { payload }: ToggleTodo) {
    const state = getState();
    state.todos.map((todo) => {
      if (todo.id === payload.id) {
        return todo.completed = payload.completed;
      }
      return todo;
    });
    patchState({
      todos: [...state.todos]
    });
  }
}
