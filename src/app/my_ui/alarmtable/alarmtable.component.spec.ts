import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmtableComponent } from './alarmtable.component';

describe('AlarmtableComponent', () => {
  let component: AlarmtableComponent;
  let fixture: ComponentFixture<AlarmtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
