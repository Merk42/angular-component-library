import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { Table } from './table';

describe('Table', () => {
  let component: Table;
  let fixture: ComponentFixture<Table>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table]
    }).compileComponents();

    fixture = TestBed.createComponent(Table);
    component = fixture.componentInstance;

    const testData = [
      { id: 1, name: 'Alice', age: 30 },
      { id: 2, name: 'Bob', age: 25 },
      { id: 3, name: 'Charlie', age: 35 }
    ];

    const testColumns = [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'age', label: 'Age', alignment: 'right' as const }
    ];

    fixture.componentRef.setInput('data', testData);
    fixture.componentRef.setInput('columns', testColumns);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data', () => {
    expect(component.data().length).toBe(3);
    expect(component.displaydata().length).toBe(3);
  });

  it('should sort data ascending', () => {
    component.updateSort({ key: 'name', label: 'Name' });
    fixture.detectChanges();

    expect(component.displaydata()[0].name).toBe('Alice');
    expect(component.sortby()).toBe('name');
  });

  it('should sort data descending', () => {
    component.updateSort({ key: 'name', label: 'Name' });
    component.updateSort({ key: 'name', label: 'Name' });
    fixture.detectChanges();

    expect(component.displaydata()[0].name).toBe('Charlie');
    expect(component.sortby()).toBe('-name');
  });

  it('should display correct icon for sort state', () => {
    expect(component.columnicon('name')).toBe('arrows-up-down');

    component.sortby.set('name');
    expect(component.columnicon('name')).toBe('arrow-up');

    component.sortby.set('-name');
    expect(component.columnicon('name')).toBe('arrow-down');
  });
});
