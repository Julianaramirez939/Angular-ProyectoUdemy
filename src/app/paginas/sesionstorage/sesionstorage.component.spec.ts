import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionstorageComponent } from './sesionstorage.component';

describe('SesionstorageComponent', () => {
  let component: SesionstorageComponent;
  let fixture: ComponentFixture<SesionstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesionstorageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SesionstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
