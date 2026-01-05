import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExample } from './table-example';

describe('TableExample', () => {
  let component: TableExample;
  let fixture: ComponentFixture<TableExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
