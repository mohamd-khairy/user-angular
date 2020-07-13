import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAccComponent } from './sign-in-acc.component';

describe('SignInAccComponent', () => {
  let component: SignInAccComponent;
  let fixture: ComponentFixture<SignInAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
