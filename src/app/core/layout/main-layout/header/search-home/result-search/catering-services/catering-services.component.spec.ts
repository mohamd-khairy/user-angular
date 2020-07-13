import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringServicesComponent } from './catering-services.component';

describe('CateringServicesComponent', () => {
  let component: CateringServicesComponent;
  let fixture: ComponentFixture<CateringServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
