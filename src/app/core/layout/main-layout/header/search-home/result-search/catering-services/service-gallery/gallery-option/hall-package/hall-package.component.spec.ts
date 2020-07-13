import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallPackageComponent } from './hall-package.component';

describe('HallPackageComponent', () => {
  let component: HallPackageComponent;
  let fixture: ComponentFixture<HallPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
