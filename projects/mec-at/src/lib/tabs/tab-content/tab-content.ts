import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'mec-tab-content',
  imports: [],
  templateUrl: './tab-content.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
		'[class.hidden]':'!this.active()',
		'[class.block]':'this.active()'
	}
})
export class TabContent {
	readonly title = input('');
	active = model(false);
	id = input.required();
}
