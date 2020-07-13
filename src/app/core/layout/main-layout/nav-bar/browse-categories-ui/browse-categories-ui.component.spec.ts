import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCategoriesUiComponent } from './browse-categories-ui.component';

describe('BrowseCategoriesUiComponent', () => {
  let component: BrowseCategoriesUiComponent;
  let fixture: ComponentFixture<BrowseCategoriesUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCategoriesUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCategoriesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
