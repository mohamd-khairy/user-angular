import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringUiComponent } from './catering-ui.component';

describe('CateringUiComponent', () => {
  let component: CateringUiComponent;
  let fixture: ComponentFixture<CateringUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
