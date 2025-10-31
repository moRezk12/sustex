import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSelfComponent } from './smart-self.component';

describe('SmartSelfComponent', () => {
  let component: SmartSelfComponent;
  let fixture: ComponentFixture<SmartSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartSelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
