import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselExample } from './carousel-example';

describe('CarouselExample', () => {
  let component: CarouselExample;
  let fixture: ComponentFixture<CarouselExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
