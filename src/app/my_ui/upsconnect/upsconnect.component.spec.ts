import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsconnectComponent } from './upsconnect.component';

describe('UpsconnectComponent', () => {
  let component: UpsconnectComponent;
  let fixture: ComponentFixture<UpsconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsconnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
