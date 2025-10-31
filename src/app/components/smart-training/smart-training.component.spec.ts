import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTrainingComponent } from './smart-training.component';

describe('SmartTrainingComponent', () => {
  let component: SmartTrainingComponent;
  let fixture: ComponentFixture<SmartTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
