import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { HeroIcon } from '../hero-icon/hero-icon';
type ButtonStatus = ''|'try'|'success'|'fail'

@Component({
  selector: 'button[mec-button]',
  imports: [HeroIcon],
  templateUrl: './button.html',
  host: {
    'class': 'group cursor-pointer disabled:cursor-not-allowed text-center relative before:content-[\'\'] before:absolute before:inset-0 before:bg-yellow-800 dark:before:bg-yellow-900 before:rounded-md disabled:opacity-50',
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

  stateClasses = computed(() => {
    let animating = '';
    let status = '';
    if (this.isAnimating()) {
      animating = 'translate-y-0 cursor-wait'
    } else {
      animating = 'group-hover:-translate-y-2 group-focus-visible:-translate-y-2 group-active:-translate-y-0'
    }
    if (this.displayState() === '' || this.displayState() === 'try') {
      status = 'bg-yellow-500 border-yellow-800 dark:bg-yellow-600'
    }
    if (this.displayState() === 'fail') {
      status = 'bg-rose-200 border-rose-800 dark:bg-rose-600 dark:border-rose-800'
    }
    if (this.displayState() === 'success') {
      status = 'bg-green-200 border-green-800 dark:bg-green-600 dark:border-green-800'
    }
    return animating + ' ' + status
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
