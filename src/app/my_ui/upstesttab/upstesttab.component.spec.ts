import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstesttabComponent } from './upstesttab.component';

describe('UpstesttabComponent', () => {
  let component: UpstesttabComponent;
  let fixture: ComponentFixture<UpstesttabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpstesttabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpstesttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
