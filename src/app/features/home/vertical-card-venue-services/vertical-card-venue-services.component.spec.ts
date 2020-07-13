import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardVenueServicesComponent } from './vertical-card-venue-services.component';

describe('VerticalCardVenueServicesComponent', () => {
  let component: VerticalCardVenueServicesComponent;
  let fixture: ComponentFixture<VerticalCardVenueServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCardVenueServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCardVenueServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
