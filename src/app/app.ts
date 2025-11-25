import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInputExample } from "./examples/form-input-example/form-input-example";
import { FormTextareaExample } from "./examples/form-textarea-example/form-textarea-example";
import { FormCheckboxExample } from "./examples/form-checkbox-example/form-checkbox-example";
import { FormRadioExample } from "./examples/form-radio-example/form-radio-example";
import { FormSelectExample } from "./examples/form-select-example/form-select-example";

@Component({
  selector: 'mec-root',
  imports: [RouterOutlet, FormInputExample, FormTextareaExample, FormCheckboxExample, FormRadioExample, FormSelectExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-component-library');
}
