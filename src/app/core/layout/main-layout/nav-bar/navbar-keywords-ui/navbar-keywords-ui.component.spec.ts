import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarKeywordsUiComponent } from './navbar-keywords-ui.component';

describe('NavbarKeywordsUiComponent', () => {
  let component: NavbarKeywordsUiComponent;
  let fixture: ComponentFixture<NavbarKeywordsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarKeywordsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarKeywordsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
