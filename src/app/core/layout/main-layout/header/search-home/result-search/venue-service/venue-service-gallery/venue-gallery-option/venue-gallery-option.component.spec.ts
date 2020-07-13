import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueGalleryOptionComponent } from './venue-gallery-option.component';

describe('VenueGalleryOptionComponent', () => {
  let component: VenueGalleryOptionComponent;
  let fixture: ComponentFixture<VenueGalleryOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueGalleryOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueGalleryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
