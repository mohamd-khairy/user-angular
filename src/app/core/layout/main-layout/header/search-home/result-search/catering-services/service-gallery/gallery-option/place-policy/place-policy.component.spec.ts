import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacePolicyComponent } from './place-policy.component';

describe('PlacePolicyComponent', () => {
  let component: PlacePolicyComponent;
  let fixture: ComponentFixture<PlacePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
