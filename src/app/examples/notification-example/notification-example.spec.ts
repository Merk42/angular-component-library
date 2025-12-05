import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationExample } from './notification-example';

describe('NotificationExample', () => {
  let component: NotificationExample;
  let fixture: ComponentFixture<NotificationExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
