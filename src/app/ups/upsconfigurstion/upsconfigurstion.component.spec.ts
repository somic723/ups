import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsconfigurstionComponent } from './upsconfigurstion.component';

describe('UpsconfigurstionComponent', () => {
  let component: UpsconfigurstionComponent;
  let fixture: ComponentFixture<UpsconfigurstionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsconfigurstionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsconfigurstionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
