import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstestComponent } from './upstest.component';

describe('UpstestComponent', () => {
  let component: UpstestComponent;
  let fixture: ComponentFixture<UpstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpstestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
