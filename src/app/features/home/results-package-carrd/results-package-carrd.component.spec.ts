import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPackageCarrdComponent } from './results-package-carrd.component';

describe('ResultsPackageCarrdComponent', () => {
  let component: ResultsPackageCarrdComponent;
  let fixture: ComponentFixture<ResultsPackageCarrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPackageCarrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPackageCarrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
