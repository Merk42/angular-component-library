import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'button[mec-button-small]',
  imports: [],
  templateUrl: './button-small.html',
  host: {
    'class': 'border-2 border-b-4 p-2 text-sm cursor-pointer border-sky-800 transition duration-150 box-content leading-none bg-canvas disabled:bg-sky-100 dark:disabled:bg-slate-800 rounded-lg disabled:rounded-full',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSmall {
  isDisabled = signal<boolean>(false)
}
