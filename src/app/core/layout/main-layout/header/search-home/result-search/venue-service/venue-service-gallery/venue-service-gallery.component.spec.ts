import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueServiceGalleryComponent } from './venue-service-gallery.component';

describe('VenueServiceGalleryComponent', () => {
  let component: VenueServiceGalleryComponent;
  let fixture: ComponentFixture<VenueServiceGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueServiceGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueServiceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
