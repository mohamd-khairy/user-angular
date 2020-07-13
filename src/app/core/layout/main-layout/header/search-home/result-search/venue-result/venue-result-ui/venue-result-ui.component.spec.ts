import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueResultUiComponent } from './venue-result-ui.component';

describe('VenueResultUiComponent', () => {
  let component: VenueResultUiComponent;
  let fixture: ComponentFixture<VenueResultUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueResultUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueResultUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
