import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllTabComponent } from './controll-tab.component';

describe('ControllTabComponent', () => {
  let component: ControllTabComponent;
  let fixture: ComponentFixture<ControllTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
