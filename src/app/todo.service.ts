import { StorageService } from './storage.service';
import { getRandomId, Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private storageService: StorageService) {}

  addTodo(value: string): void {
    const item: Todo = new Todo(getRandomId(), value, false);

    const list: Todo[] = this.storageService.getTodos();
    this.storageService.addTodo([...list, item]);
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
}
