import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueUiComponent } from './venue-ui.component';

describe('VenueUiComponent', () => {
  let component: VenueUiComponent;
  let fixture: ComponentFixture<VenueUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
