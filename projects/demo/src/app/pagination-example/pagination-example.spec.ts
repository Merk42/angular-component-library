import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationExample } from './pagination-example';

describe('PaginationExample', () => {
  let component: PaginationExample;
  let fixture: ComponentFixture<PaginationExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
