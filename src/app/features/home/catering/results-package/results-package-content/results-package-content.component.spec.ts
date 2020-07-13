import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPackageContentComponent } from './results-package-content.component';

describe('ResultsPackageContentComponent', () => {
  let component: ResultsPackageContentComponent;
  let fixture: ComponentFixture<ResultsPackageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPackageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPackageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
