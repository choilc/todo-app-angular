import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Input() completedAll: boolean = false;

  @Output() newAddTodo = new EventEmitter<string>();
  @Output() newHandleCheckAll = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  addTodo(value: string): void {
    this.newAddTodo.emit(value);
  }

  handleCheckAll(check: boolean): void {
    this.newHandleCheckAll.emit(check);
  }
}
