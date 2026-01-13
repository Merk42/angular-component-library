import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSmall } from './button-small';

describe('ButtonSmall', () => {
  let component: ButtonSmall;
  let fixture: ComponentFixture<ButtonSmall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSmall],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSmall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
