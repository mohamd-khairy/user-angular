import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesUiComponent } from './venues-ui.component';

describe('VenuesUiComponent', () => {
  let component: VenuesUiComponent;
  let fixture: ComponentFixture<VenuesUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
