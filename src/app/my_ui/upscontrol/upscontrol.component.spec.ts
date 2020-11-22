import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscontrolComponent } from './upscontrol.component';

describe('UpscontrolComponent', () => {
  let component: UpscontrolComponent;
  let fixture: ComponentFixture<UpscontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpscontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
