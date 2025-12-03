import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[mec-button]',
  imports: [],
  templateUrl: './button.html',
  host: {
    'class': 'cursor-pointer grow text-center border-yellow-800 border-2 p-2 rounded-md bg-yellow-500'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {

}
