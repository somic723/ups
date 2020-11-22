import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstimeComponent } from './upstime.component';

describe('UpstimeComponent', () => {
  let component: UpstimeComponent;
  let fixture: ComponentFixture<UpstimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpstimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpstimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
