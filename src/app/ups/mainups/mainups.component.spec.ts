import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainupsComponent } from './mainups.component';

describe('MainupsComponent', () => {
  let component: MainupsComponent;
  let fixture: ComponentFixture<MainupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
