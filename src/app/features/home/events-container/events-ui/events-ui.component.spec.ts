import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUiComponent } from './events-ui.component';

describe('EventsUiComponent', () => {
  let component: EventsUiComponent;
  let fixture: ComponentFixture<EventsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
