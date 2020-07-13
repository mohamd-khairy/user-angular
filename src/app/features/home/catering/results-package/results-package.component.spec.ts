import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPackageComponent } from './results-package.component';

describe('ResultsPackageComponent', () => {
  let component: ResultsPackageComponent;
  let fixture: ComponentFixture<ResultsPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
