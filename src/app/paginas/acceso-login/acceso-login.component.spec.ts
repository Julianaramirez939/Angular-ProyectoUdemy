import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoLoginComponent } from './acceso-login.component';

describe('AccesoLoginComponent', () => {
  let component: AccesoLoginComponent;
  let fixture: ComponentFixture<AccesoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
