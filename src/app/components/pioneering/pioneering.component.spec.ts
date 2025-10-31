import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneeringComponent } from './pioneering.component';

describe('PioneeringComponent', () => {
  let component: PioneeringComponent;
  let fixture: ComponentFixture<PioneeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PioneeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PioneeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
