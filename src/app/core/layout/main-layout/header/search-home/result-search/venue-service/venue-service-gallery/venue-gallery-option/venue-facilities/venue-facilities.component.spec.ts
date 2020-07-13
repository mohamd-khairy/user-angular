import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueFacilitiesComponent } from './venue-facilities.component';

describe('VenueFacilitiesComponent', () => {
  let component: VenueFacilitiesComponent;
  let fixture: ComponentFixture<VenueFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
