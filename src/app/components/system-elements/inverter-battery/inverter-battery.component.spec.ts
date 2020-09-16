import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterBatteryComponent } from './inverter-battery.component';

describe('InverterBatteryComponent', () => {
  let component: InverterBatteryComponent;
  let fixture: ComponentFixture<InverterBatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InverterBatteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InverterBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
