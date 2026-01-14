import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-example-template',
  imports: [],
  templateUrl: './example-template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleTemplate {
  readonly name = input.required<string>()
}
