import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringResultUiComponent } from './catering-result-ui.component';

describe('CateringResultUiComponent', () => {
  let component: CateringResultUiComponent;
  let fixture: ComponentFixture<CateringResultUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringResultUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringResultUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
