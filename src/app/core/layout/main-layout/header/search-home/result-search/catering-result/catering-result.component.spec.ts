import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringResultComponent } from './catering-result.component';

describe('CateringResultComponent', () => {
  let component: CateringResultComponent;
  let fixture: ComponentFixture<CateringResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
