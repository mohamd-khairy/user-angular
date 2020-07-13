import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMoreUiComponent } from './discover-more-ui.component';

describe('DiscoverMoreUiComponent', () => {
  let component: DiscoverMoreUiComponent;
  let fixture: ComponentFixture<DiscoverMoreUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverMoreUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverMoreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
