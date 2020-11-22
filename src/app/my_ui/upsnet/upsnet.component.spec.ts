import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsnetComponent } from './upsnet.component';

describe('UpsnetComponent', () => {
  let component: UpsnetComponent;
  let fixture: ComponentFixture<UpsnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
