import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCateringUiComponent } from './the-catering-ui.component';

describe('TheCateringUiComponent', () => {
  let component: TheCateringUiComponent;
  let fixture: ComponentFixture<TheCateringUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCateringUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCateringUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
