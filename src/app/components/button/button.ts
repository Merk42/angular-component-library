import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[mec-button]',
  imports: [],
  templateUrl: './button.html',
  host: {
    'class': 'group cursor-pointer disabled:cursor-not-allowed grow text-center relative before:content-[\'\'] before:absolute before:inset-0 before:bg-yellow-800 before:rounded-md disabled:opacity-50'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {

}
