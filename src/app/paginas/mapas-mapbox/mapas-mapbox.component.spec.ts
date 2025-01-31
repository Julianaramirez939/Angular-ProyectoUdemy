import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasMapboxComponent } from './mapas-mapbox.component';

describe('MapasMapboxComponent', () => {
  let component: MapasMapboxComponent;
  let fixture: ComponentFixture<MapasMapboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapasMapboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapasMapboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
