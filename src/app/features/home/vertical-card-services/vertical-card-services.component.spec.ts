import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardServicesComponent } from './vertical-card-services.component';

describe('VerticalCardServicesComponent', () => {
  let component: VerticalCardServicesComponent;
  let fixture: ComponentFixture<VerticalCardServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCardServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCardServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
