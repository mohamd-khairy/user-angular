import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHorizentalVenueResultComponent } from './the-horizental-venue-result.component';

describe('TheHorizentalVenueResultComponent', () => {
  let component: TheHorizentalVenueResultComponent;
  let fixture: ComponentFixture<TheHorizentalVenueResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheHorizentalVenueResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheHorizentalVenueResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
