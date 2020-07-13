import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVenueGalleryComponent } from './the-venue-gallery.component';

describe('TheVenueGalleryComponent', () => {
  let component: TheVenueGalleryComponent;
  let fixture: ComponentFixture<TheVenueGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheVenueGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheVenueGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
