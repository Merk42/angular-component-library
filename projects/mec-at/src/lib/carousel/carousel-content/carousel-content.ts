import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mec-carousel-content',
  imports: [],
  templateUrl: './carousel-content.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "relative px-2 items-start min-w-0 w-auto grow-0 shrink-0"
  }
})
export class CarouselContent {

}
