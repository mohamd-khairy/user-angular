import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalGalleryComponent } from './royal-gallery.component';

describe('RoyalGalleryComponent', () => {
  let component: RoyalGalleryComponent;
  let fixture: ComponentFixture<RoyalGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
