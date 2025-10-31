import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenComponent } from './golden.component';

describe('GoldenComponent', () => {
  let component: GoldenComponent;
  let fixture: ComponentFixture<GoldenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
