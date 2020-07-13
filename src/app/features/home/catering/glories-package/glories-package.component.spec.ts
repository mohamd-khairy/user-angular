import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriesPackageComponent } from './glories-package.component';

describe('GloriesPackageComponent', () => {
  let component: GloriesPackageComponent;
  let fixture: ComponentFixture<GloriesPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloriesPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloriesPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
