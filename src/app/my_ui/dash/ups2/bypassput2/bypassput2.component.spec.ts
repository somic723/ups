import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bypassput2Component } from './bypassput2.component';

describe('Bypassput2Component', () => {
  let component: Bypassput2Component;
  let fixture: ComponentFixture<Bypassput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bypassput2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bypassput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
