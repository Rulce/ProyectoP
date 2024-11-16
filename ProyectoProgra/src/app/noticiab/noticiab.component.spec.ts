import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiabComponent } from './noticiab.component';

describe('NoticiabComponent', () => {
  let component: NoticiabComponent;
  let fixture: ComponentFixture<NoticiabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
