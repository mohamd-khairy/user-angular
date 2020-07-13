import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCategoriesUiComponent } from './explore-categories-ui.component';

describe('ExploreCategoriesUiComponent', () => {
  let component: ExploreCategoriesUiComponent;
  let fixture: ComponentFixture<ExploreCategoriesUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCategoriesUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCategoriesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
