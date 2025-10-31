import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuttimatedChatComponent } from './auttimated-chat.component';

describe('AuttimatedChatComponent', () => {
  let component: AuttimatedChatComponent;
  let fixture: ComponentFixture<AuttimatedChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuttimatedChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuttimatedChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
