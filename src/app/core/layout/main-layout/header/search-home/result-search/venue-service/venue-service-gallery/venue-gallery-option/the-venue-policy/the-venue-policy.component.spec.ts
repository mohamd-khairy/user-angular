import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVenuePolicyComponent } from './the-venue-policy.component';

describe('TheVenuePolicyComponent', () => {
  let component: TheVenuePolicyComponent;
  let fixture: ComponentFixture<TheVenuePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheVenuePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheVenuePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
