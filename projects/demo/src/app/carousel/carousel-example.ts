import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { Carousel, CarouselContent, CarouselConfig } from 'mec-at';

@Component({
  selector: 'app-carousel-example',
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

  toofew = computed<{id:number,src:string}[]>(() => {
    return this.slides().slice(0, 2)
  })
}
