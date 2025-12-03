import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIcon } from './hero-icon';

describe('HeroIcon', () => {
  let component: HeroIcon;
  let fixture: ComponentFixture<HeroIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
