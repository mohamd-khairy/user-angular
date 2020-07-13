import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheReservationsComponent } from './the-reservations.component';

describe('TheReservationsComponent', () => {
  let component: TheReservationsComponent;
  let fixture: ComponentFixture<TheReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
