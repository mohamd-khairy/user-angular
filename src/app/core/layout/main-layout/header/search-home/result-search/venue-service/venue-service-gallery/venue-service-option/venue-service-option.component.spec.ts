import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueServiceOptionComponent } from './venue-service-option.component';

describe('VenueServiceOptionComponent', () => {
  let component: VenueServiceOptionComponent;
  let fixture: ComponentFixture<VenueServiceOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueServiceOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueServiceOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
