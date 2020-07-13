import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFilterComponent } from './the-filter.component';

describe('TheFilterComponent', () => {
  let component: TheFilterComponent;
  let fixture: ComponentFixture<TheFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
