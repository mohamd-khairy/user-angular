import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVerticalVenueResultComponent } from './the-vertical-venue-result.component';

describe('TheVerticalVenueResultComponent', () => {
  let component: TheVerticalVenueResultComponent;
  let fixture: ComponentFixture<TheVerticalVenueResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheVerticalVenueResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheVerticalVenueResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
