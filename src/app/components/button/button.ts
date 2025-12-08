import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { HeroIcon } from '../hero-icon/hero-icon';
type ButtonStatus = ''|'try'|'success'|'fail'

@Component({
  selector: 'button[mec-button]',
  imports: [HeroIcon],
  templateUrl: './button.html',
  host: {
    'class': 'group cursor-pointer disabled:cursor-not-allowed grow text-center relative before:content-[\'\'] before:absolute before:inset-0 before:bg-yellow-800 before:rounded-md disabled:opacity-50',

  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {

  // '[attr.disabled]': 'isDisabled() || isAnimating() || null'

  isDisabled = signal<boolean>(false)
  displayState = signal<ButtonStatus>('');
  isAnimating = computed(() => {
    return this.displayState() !== ''
  })

	private updateStatus(status: ButtonStatus, disabledafter: boolean) {
		this.displayState.set(status);
		if (status === 'fail' || status === 'success') {
			this.resetStatus(disabledafter)
		}
	}

	private resetStatus(disabledafter: boolean) {
		setTimeout(() => {
      this.displayState.set('');
			if (disabledafter) {
				this.isDisabled.set(true)
			} else {
				this.isDisabled.set(false)
			}
		}, 3000);
	}

	animateTry(disabledafter: boolean = false) {
		this.updateStatus('try', disabledafter)
	}

	animateSuccess(disabledafter: boolean = false) {
		this.updateStatus('success', disabledafter)
	}

	animateFail(disabledafter: boolean = false) {
		this.updateStatus('fail', disabledafter)
	}
}
