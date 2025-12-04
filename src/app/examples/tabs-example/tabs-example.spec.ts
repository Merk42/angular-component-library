import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsExample } from './tabs-example';

describe('TabsExample', () => {
  let component: TabsExample;
  let fixture: ComponentFixture<TabsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
