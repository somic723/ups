import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Status1Component } from './status1.component';

describe('Status1Component', () => {
  let component: Status1Component;
  let fixture: ComponentFixture<Status1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Status1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Status1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
