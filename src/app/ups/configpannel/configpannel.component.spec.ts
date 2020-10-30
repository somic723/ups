import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigpannelComponent } from './configpannel.component';

describe('ConfigpannelComponent', () => {
  let component: ConfigpannelComponent;
  let fixture: ComponentFixture<ConfigpannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigpannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
