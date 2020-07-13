import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueHallComponent } from './venue-hall.component';

describe('VenueHallComponent', () => {
  let component: VenueHallComponent;
  let fixture: ComponentFixture<VenueHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
