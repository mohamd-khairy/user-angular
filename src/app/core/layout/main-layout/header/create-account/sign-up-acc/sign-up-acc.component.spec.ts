import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAccComponent } from './sign-up-acc.component';

describe('SignUpAccComponent', () => {
  let component: SignUpAccComponent;
  let fixture: ComponentFixture<SignUpAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
