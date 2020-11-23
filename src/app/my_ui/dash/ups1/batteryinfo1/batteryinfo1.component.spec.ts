import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Batteryinfo1Component } from './batteryinfo1.component';

describe('Batteryinfo1Component', () => {
  let component: Batteryinfo1Component;
  let fixture: ComponentFixture<Batteryinfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Batteryinfo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Batteryinfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
