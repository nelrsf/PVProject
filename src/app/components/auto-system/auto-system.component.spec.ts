import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSystemComponent } from './auto-system.component';

describe('AutoSystemComponent', () => {
  let component: AutoSystemComponent;
  let fixture: ComponentFixture<AutoSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
