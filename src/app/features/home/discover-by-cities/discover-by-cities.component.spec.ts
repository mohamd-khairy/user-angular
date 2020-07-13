import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverByCitiesComponent } from './discover-by-cities.component';

describe('DiscoverByCitiesComponent', () => {
  let component: DiscoverByCitiesComponent;
  let fixture: ComponentFixture<DiscoverByCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverByCitiesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverByCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
