import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRebootComponent } from './save-reboot.component';

describe('SaveRebootComponent', () => {
  let component: SaveRebootComponent;
  let fixture: ComponentFixture<SaveRebootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveRebootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveRebootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
