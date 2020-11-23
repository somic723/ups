import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Status2Component } from './status2.component';

describe('Status2Component', () => {
  let component: Status2Component;
  let fixture: ComponentFixture<Status2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Status2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Status2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
