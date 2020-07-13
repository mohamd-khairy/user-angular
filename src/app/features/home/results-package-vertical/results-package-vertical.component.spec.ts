import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPackageVerticalComponent } from './results-package-vertical.component';

describe('ResultsPackageVerticalComponent', () => {
  let component: ResultsPackageVerticalComponent;
  let fixture: ComponentFixture<ResultsPackageVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPackageVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPackageVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
