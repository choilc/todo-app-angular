import { Todo } from './../todo';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  Renderer2,
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
  initName: string = '';

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.editTodoElement.nativeElement) {
        this.isEdit = false;
        this.name = this.initName;
      }
    });
  }

  ngOnInit(): void {
    this.initName = this.name;
  }

  onEdit(): void {
    this.isEdit = true;
    setTimeout(() => {
      this.editTodoElement.nativeElement.focus();
    }, 0);
  }

  handleEdit(id: number, value: string): void {
    this.initName = this.name;
    this.newEditTodo.emit({ id, value });
  }

  deleteTodo(id: number): void {
    this.newDeleteTodo.emit(id);
  }

  handleComplete(id: number): void {
    this.newCompleteTodo.emit(id);
  }
}
