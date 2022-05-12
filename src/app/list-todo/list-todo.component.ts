import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { getRandomId, Todo } from '../todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  todos: Todo[] = [];
  lenghtAllTodo: number = 0;
  activeTab: string = 'all';
  completedAll: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
    this.lenghtAllTodo = this.todoService.getTodo().length;
    this.setCheckAll();
  }

  setCheckAll() {
    this.completedAll = !this.todos.find((todo) => todo.completed === false);
  }

  addTodo(todo: string): void {
    const newTodo = new Todo(getRandomId(), todo, false);
    this.todos.push(newTodo);
    this.todoService.addTodo(newTodo);
    this.lenghtAllTodo++;
    this.setCheckAll();
  }

  getTodos(): void {
    const listTodo = this.todoService.getTodo();
    switch (this.activeTab) {
      case 'all':
        this.todos = listTodo;
        break;
      case 'active':
        this.todos = listTodo.filter((todo) => !todo.completed);
        break;
      default:
        this.todos = listTodo.filter((todo) => todo.completed);
        break;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todoService.deleteTodo(id);
    this.lenghtAllTodo--;
    this.setCheckAll();
  }

  handleEdit(valueEdit: { id: number; value: string }): void {
    this.todoService.handleEdit(valueEdit.id, valueEdit.value);
  }

  completeTodo(id: number): void {
    const newTodos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.todos = [...newTodos];
    this.todoService.completeTodo(id);
    this.getTodos();
    this.setCheckAll();
  }

  handleActive(tab: string) {
    this.activeTab = tab;
    this.getTodos();
  }

  handleCheckAll(check: boolean): void {
    const newTodos = this.todos.map((todo) => {
      if (todo.completed === check) {
        return { ...todo, completed: !check };
      }
      return todo;
    });
    this.todos = [...newTodos];
    this.todoService.handleCheckAll(!check);
    this.completedAll = !check;
    this.getTodos();
  }
}
