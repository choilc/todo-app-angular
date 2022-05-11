import { TodoService } from './../todo.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { getRandomId, Todo } from '../todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  todos: Todo[] = [];
  editing: number | null = null;
  @ViewChild('editTodo', { static: false })
  editTodoElement!: ElementRef<HTMLInputElement>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  onEdit(id: number): void {
    this.editing = id;
    setTimeout(() => {
      this.editTodoElement.nativeElement.focus();
    }, 0);
  }

  addTodo(todo: string): void {
    const newTodo = new Todo(getRandomId(), todo, false);
    this.todos.push(newTodo);
    this.todoService.addTodo(todo);
  }

  getTodos(): void {
    this.todos = this.todoService.getTodo();
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todoService.deleteTodo(id);
  }

  handleEdit(id: number, todo: string): void {
    this.todoService.handleEdit(id, todo);
  }
}
