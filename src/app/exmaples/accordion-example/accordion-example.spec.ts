import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionExample } from './accordion-example';

describe('AccordionExample', () => {
  let component: AccordionExample;
  let fixture: ComponentFixture<AccordionExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
