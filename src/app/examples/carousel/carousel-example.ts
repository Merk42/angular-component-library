import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import { CarouselContent } from '../../components/carousel/carousel-content/carousel-content';
import { CarouselConfig } from '../../components/carousel/carousel.config';

@Component({
  selector: 'mec-carousel-example',
  imports: [Carousel, CarouselContent],
  templateUrl: './carousel-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselExample {
  products: any[] = [
    {
      id:1,
      title:'alpha'
    },
    {
      id:2,
      title:'beta'
    },
    {
      id:3,
      title:'gamma'
    },
    {
      id:4,
      title:'delta'
    },
    {
      id:5,
      title:'epsilon'
    },
    {
      id:6,
      title:'zeta'
    },
    {
      id:7,
      title:'eta'
    },
    {
      id:8,
      title:'theta'
    },
    {
      id:9,
      title:'iota'
    },
    {
      id:10,
      title:'kappa'
    }
  ];
  carouselconfig: CarouselConfig = new CarouselConfig();
}
