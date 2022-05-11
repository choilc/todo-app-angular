import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { FormsModule } from '@angular/forms';
import { ItemTodoComponent } from './item-todo/item-todo.component';

@NgModule({
  declarations: [AppComponent, ListTodoComponent, ItemTodoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
