import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHorizentalCateringResultComponent } from './the-horizental-catering-result.component';

describe('TheHorizentalCateringResultComponent', () => {
  let component: TheHorizentalCateringResultComponent;
  let fixture: ComponentFixture<TheHorizentalCateringResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheHorizentalCateringResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheHorizentalCateringResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
