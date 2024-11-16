import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbComponent } from './loginb.component';

describe('LoginbComponent', () => {
  let component: LoginbComponent;
  let fixture: ComponentFixture<LoginbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
