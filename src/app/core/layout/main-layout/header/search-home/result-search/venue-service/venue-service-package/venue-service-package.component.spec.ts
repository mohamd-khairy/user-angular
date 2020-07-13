import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueServicePackageComponent } from './venue-service-package.component';

describe('VenueServicePackageComponent', () => {
  let component: VenueServicePackageComponent;
  let fixture: ComponentFixture<VenueServicePackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueServicePackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueServicePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
