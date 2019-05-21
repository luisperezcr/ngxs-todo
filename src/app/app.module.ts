import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './state/todo.state';

import { AppComponent } from './app.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { MaterialModule } from './shared/material.module';
import { TodoAddComponent } from './containers/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    NgxsModule.forRoot([
      TodoState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
