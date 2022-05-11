import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output() newAddTodo = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  addTodo(value: string): void {
    this.newAddTodo.emit(value);
  }
}
