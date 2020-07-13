import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceOptionComponent } from './card-service-option.component';

describe('CardServiceOptionComponent', () => {
  let component: CardServiceOptionComponent;
  let fixture: ComponentFixture<CardServiceOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardServiceOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServiceOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
