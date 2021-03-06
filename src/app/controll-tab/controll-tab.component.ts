import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-controll-tab',
  templateUrl: './controll-tab.component.html',
  styleUrls: ['./controll-tab.component.scss'],
})
export class ControllTabComponent implements OnInit {
  tabs: string[] = ['all', 'active', 'completed'];

  @Input() activeTab: string = 'all';
  @Input() todoCounter: number = 0;
  @Input() lengthCompleted: number = 0;

  @Output() newHandleActive = new EventEmitter<string>();
  @Output() newHandleClearAll = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleActive(tab: string) {
    this.newHandleActive.emit(tab);
  }

  handleClearAll(): void {
    this.newHandleClearAll.emit();
  }
}
