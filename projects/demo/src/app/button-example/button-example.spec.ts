import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExample } from './button-example';

describe('ButtonExample', () => {
  let component: ButtonExample;
  let fixture: ComponentFixture<ButtonExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
