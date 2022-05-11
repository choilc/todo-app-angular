import { Todo } from './../todo';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.scss'],
})
export class ItemTodoComponent implements OnInit {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() completed: boolean = false;

  @Output() newEditTodo = new EventEmitter<{ id: number; value: string }>();
  @Output() newDeleteTodo = new EventEmitter<number>();
  @Output() newCompleteTodo = new EventEmitter<number>();

  @ViewChild('editTodo', { static: false })
  editTodoElement!: ElementRef<HTMLInputElement>;

  isEdit: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onEdit(): void {
    this.isEdit = true;
    setTimeout(() => {
      this.editTodoElement.nativeElement.focus();
    }, 0);
  }

  handleEdit(id: number, value: string): void {
    this.newEditTodo.emit({ id, value });
  }

  deleteTodo(id: number): void {
    this.newDeleteTodo.emit(id);
  }

  handleComplete(id: number): void {
    this.newCompleteTodo.emit(id);
  }
}
