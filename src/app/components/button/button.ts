import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[mec-button]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
  host: {
    'class': 'cursor-pointer grow text-center border-yellow-800 border-2 p-2 rounded-md'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {

}
