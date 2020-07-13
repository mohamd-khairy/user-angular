import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueServiceComponent } from './venue-service.component';

describe('VenueServiceComponent', () => {
  let component: VenueServiceComponent;
  let fixture: ComponentFixture<VenueServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
