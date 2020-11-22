import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsconfigComponent } from './upsconfig.component';

describe('UpsconfigComponent', () => {
  let component: UpsconfigComponent;
  let fixture: ComponentFixture<UpsconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
