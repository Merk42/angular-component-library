import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
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
  carouselconfig: CarouselConfig = new CarouselConfig();

  slides = computed<{id:number,src:string}[]>(() => {
    return Array.from({length:15}, (element, index) => {
      const min = 300;
      const max = 400;
      const SIZE = Math.floor(Math.random() * (max - min) + min);
      return {
        id: index + 1,
        src: `https://placecats.com/${SIZE}/${SIZE}`
      }
    })
  });
}
