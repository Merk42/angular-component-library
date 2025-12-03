import { Component, input } from '@angular/core';

@Component({
  selector: 'mec-hero-icon',
  imports: [],
  templateUrl: './hero-icon.html',
  styleUrl: './hero-icon.css',
})
export class HeroIcon {
  readonly icon = input.required()
}
