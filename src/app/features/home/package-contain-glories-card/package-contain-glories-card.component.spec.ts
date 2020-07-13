import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageContainGloriesCardComponent } from './package-contain-glories-card.component';

describe('PackageContainGloriesCardComponent', () => {
  let component: PackageContainGloriesCardComponent;
  let fixture: ComponentFixture<PackageContainGloriesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageContainGloriesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageContainGloriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
