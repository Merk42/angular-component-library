import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordion } from './accordion';

describe('Accordion', () => {
  let component: Accordion;
  let fixture: ComponentFixture<Accordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accordion],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
