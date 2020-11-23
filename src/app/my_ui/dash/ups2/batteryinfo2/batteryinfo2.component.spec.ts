import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Batteryinfo2Component } from './batteryinfo2.component';

describe('Batteryinfo2Component', () => {
  let component: Batteryinfo2Component;
  let fixture: ComponentFixture<Batteryinfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Batteryinfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Batteryinfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
