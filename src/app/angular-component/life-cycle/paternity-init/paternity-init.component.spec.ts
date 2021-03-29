import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaternityInitComponent } from './paternity-init.component';

describe('PaternityInitComponent', () => {
  let component: PaternityInitComponent;
  let fixture: ComponentFixture<PaternityInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaternityInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaternityInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
