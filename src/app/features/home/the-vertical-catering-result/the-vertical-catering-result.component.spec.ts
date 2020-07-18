import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVerticalCateringResultComponent } from './the-vertical-catering-result.component';

describe('TheVerticalCateringResultComponent', () => {
  let component: TheVerticalCateringResultComponent;
  let fixture: ComponentFixture<TheVerticalCateringResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheVerticalCateringResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheVerticalCateringResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
