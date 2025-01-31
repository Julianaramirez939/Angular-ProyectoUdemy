import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comunicacion2Component } from './comunicacion2.component';

describe('Comunicacion2Component', () => {
  let component: Comunicacion2Component;
  let fixture: ComponentFixture<Comunicacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comunicacion2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Comunicacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
