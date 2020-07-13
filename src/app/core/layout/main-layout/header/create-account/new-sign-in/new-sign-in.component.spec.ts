import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSignInComponent } from './new-sign-in.component';

describe('NewSignInComponent', () => {
  let component: NewSignInComponent;
  let fixture: ComponentFixture<NewSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
