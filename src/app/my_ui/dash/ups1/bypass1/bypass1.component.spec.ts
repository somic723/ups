import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bypass1Component } from './bypass1.component';

describe('Bypass1Component', () => {
  let component: Bypass1Component;
  let fixture: ComponentFixture<Bypass1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bypass1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bypass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
