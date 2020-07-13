import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressesSettingComponent } from './adresses-setting.component';

describe('AdressesSettingComponent', () => {
  let component: AdressesSettingComponent;
  let fixture: ComponentFixture<AdressesSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressesSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressesSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
