import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGalleryComponent } from './the-gallery.component';

describe('TheGalleryComponent', () => {
  let component: TheGalleryComponent;
  let fixture: ComponentFixture<TheGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
