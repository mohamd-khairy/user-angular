import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriesCardComponent } from './glories-card.component';

describe('GloriesCardComponent', () => {
  let component: GloriesCardComponent;
  let fixture: ComponentFixture<GloriesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloriesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
