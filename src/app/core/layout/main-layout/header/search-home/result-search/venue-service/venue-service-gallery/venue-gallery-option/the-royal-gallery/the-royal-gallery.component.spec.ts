import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRoyalGalleryComponent } from './the-royal-gallery.component';

describe('TheRoyalGalleryComponent', () => {
  let component: TheRoyalGalleryComponent;
  let fixture: ComponentFixture<TheRoyalGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRoyalGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRoyalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
