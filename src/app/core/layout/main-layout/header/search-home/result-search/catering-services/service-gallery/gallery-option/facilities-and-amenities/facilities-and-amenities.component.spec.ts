import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesAndAmenitiesComponent } from './facilities-and-amenities.component';

describe('FacilitiesAndAmenitiesComponent', () => {
  let component: FacilitiesAndAmenitiesComponent;
  let fixture: ComponentFixture<FacilitiesAndAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesAndAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesAndAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
