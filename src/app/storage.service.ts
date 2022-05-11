import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  addTodo(todo: Todo[]): void {
    localStorage.setItem('list', JSON.stringify(todo));
  }

  getTodos(): Todo[] {
    const todos: Todo[] = JSON.parse(localStorage.getItem('list') || '[]');
    return [...todos];
  }
}
