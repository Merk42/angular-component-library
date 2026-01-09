import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotes } from './form-notes';

describe('FormNotes', () => {
  let component: FormNotes;
  let fixture: ComponentFixture<FormNotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNotes],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNotes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
