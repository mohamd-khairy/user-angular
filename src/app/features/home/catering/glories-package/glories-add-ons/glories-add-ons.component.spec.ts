import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriesAddOnsComponent } from './glories-add-ons.component';

describe('GloriesAddOnsComponent', () => {
  let component: GloriesAddOnsComponent;
  let fixture: ComponentFixture<GloriesAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloriesAddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloriesAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
