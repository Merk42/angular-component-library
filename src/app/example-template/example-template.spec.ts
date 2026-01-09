import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTemplate } from './example-template';

describe('ExampleTemplate', () => {
  let component: ExampleTemplate;
  let fixture: ComponentFixture<ExampleTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTemplate);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'test-example');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
