import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesionstorage2Component } from './sesionstorage2.component';

describe('Sesionstorage2Component', () => {
  let component: Sesionstorage2Component;
  let fixture: ComponentFixture<Sesionstorage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sesionstorage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sesionstorage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
