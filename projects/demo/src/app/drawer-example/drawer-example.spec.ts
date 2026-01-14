import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerExample } from './drawer-example';

describe('DrawerExample', () => {
  let component: DrawerExample;
  let fixture: ComponentFixture<DrawerExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
