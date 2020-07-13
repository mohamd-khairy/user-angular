import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAccSettingComponent } from './the-acc-setting.component';

describe('TheAccSettingComponent', () => {
  let component: TheAccSettingComponent;
  let fixture: ComponentFixture<TheAccSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheAccSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAccSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
