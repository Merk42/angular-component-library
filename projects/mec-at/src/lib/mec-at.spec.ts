import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecAt } from './mec-at';

describe('MecAt', () => {
  let component: MecAt;
  let fixture: ComponentFixture<MecAt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecAt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecAt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
