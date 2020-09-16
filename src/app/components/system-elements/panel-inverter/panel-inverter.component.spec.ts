import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInverterComponent } from './panel-inverter.component';

describe('PanelInverterComponent', () => {
  let component: PanelInverterComponent;
  let fixture: ComponentFixture<PanelInverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelInverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
