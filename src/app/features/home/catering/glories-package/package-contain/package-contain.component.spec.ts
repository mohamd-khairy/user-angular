import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageContainComponent } from './package-contain.component';

describe('PackageContainComponent', () => {
  let component: PackageContainComponent;
  let fixture: ComponentFixture<PackageContainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageContainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
