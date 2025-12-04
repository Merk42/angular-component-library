import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInputExample } from "./examples/form-input-example/form-input-example";
import { FormTextareaExample } from "./examples/form-textarea-example/form-textarea-example";
import { FormCheckboxExample } from "./examples/form-checkbox-example/form-checkbox-example";
import { FormRadioExample } from "./examples/form-radio-example/form-radio-example";
import { FormSelectExample } from "./examples/form-select-example/form-select-example";
import { FormExample } from "./examples/form-example/form-example";
import { FormRangeExample } from "./examples/form-range-example/form-range-example";
import { AccordionExample } from "./exmaples/accordion-example/accordion-example";

@Component({
  selector: 'mec-root',
  imports: [RouterOutlet, FormInputExample, FormTextareaExample, FormCheckboxExample, FormRadioExample, FormSelectExample, FormExample, FormRangeExample, AccordionExample],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('angular-component-library');
}
