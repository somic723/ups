import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input1Component } from './input1.component';

describe('Input1Component', () => {
  let component: Input1Component;
  let fixture: ComponentFixture<Input1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Input1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Input1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
