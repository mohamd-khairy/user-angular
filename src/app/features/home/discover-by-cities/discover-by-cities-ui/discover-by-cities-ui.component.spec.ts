import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverByCitiesUiComponent } from './discover-by-cities-ui.component';

describe('DiscoverByCitiesUiComponent', () => {
  let component: DiscoverByCitiesUiComponent;
  let fixture: ComponentFixture<DiscoverByCitiesUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverByCitiesUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverByCitiesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
