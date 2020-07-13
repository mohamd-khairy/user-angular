import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersReservationComponent } from './orders-reservation.component';

describe('OrdersReservationComponent', () => {
  let component: OrdersReservationComponent;
  let fixture: ComponentFixture<OrdersReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
