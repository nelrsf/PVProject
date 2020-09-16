import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterLoadComponent } from './inverter-load.component';

describe('InverterLoadComponent', () => {
  let component: InverterLoadComponent;
  let fixture: ComponentFixture<InverterLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InverterLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InverterLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
