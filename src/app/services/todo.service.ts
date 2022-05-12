import { StorageService } from './storage.service';
import { getRandomId, Todo } from '../todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private storageService: StorageService) {}

  addTodo(todo: Todo): void {
    const list: Todo[] = this.storageService.getTodos();
    this.storageService.addTodo([...list, todo]);
  }

  getTodo(): Todo[] {
    const list: Todo[] = this.storageService.getTodos();
    return [...list];
  }

  deleteTodo(id: number): void {
    const list: Todo[] = this.storageService.getTodos();
    const newTodos: Todo[] = list.filter((t) => t.id !== id);
    this.storageService.addTodo(newTodos);
  }

  handleEdit(id: number, value: string): void {
    const list: Todo[] = this.storageService.getTodos();
    const newTodos = list.map((t) => {
      if (t.id === id) {
        return { ...t, name: value };
      }
      return t;
    });
    this.storageService.addTodo(newTodos);
  }

  completeTodo(id: number): void {
    const list: Todo[] = this.storageService.getTodos();
    const newTodos = list.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    this.storageService.addTodo(newTodos);
  }

  handleCheckAll(check: boolean): void {
    const list: Todo[] = this.storageService.getTodos();
    const newTodos = list.map((todo) => {
      if (todo.completed !== check) {
        return { ...todo, completed: check };
      }
      return todo;
    });
    this.storageService.addTodo(newTodos);
  }

  clearCompleted(): void {
    const list: Todo[] = this.storageService.getTodos();
    const newTodos: Todo[] = list.filter((todo) => !todo.completed);
    this.storageService.addTodo(newTodos);
  }
}
