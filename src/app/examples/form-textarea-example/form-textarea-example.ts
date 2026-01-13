import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormField, disabled, form, maxLength, minLength, readonly, required, submit } from '@angular/forms/signals';
import { FormTextarea } from '../../components/form-textarea/form-textarea';
import { Button } from "../../components/button/button";
import { ExampleTemplate } from "../../example-template/example-template";

interface DemoData {
  required: string;
  optional: string;
  minlength: string;
  maxlength: string;
  minmaxlength: string;
  disabled: string;
  readonly: string;
}

@Component({
  selector: 'mec-form-textarea-example',
  imports: [FormField, FormTextarea, Button, ExampleTemplate],
  templateUrl: './form-textarea-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTextareaExample {
  demoModel = signal<DemoData>({
    required: 'bar',
    optional: 'baz',
    minlength: 'minlength',
    maxlength: 'maxlength',
    minmaxlength: 'minmaxlength',
    disabled: '',
    readonly: ''
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.required);

    minLength(schemaPath.minlength, 8)
    maxLength(schemaPath.maxlength, 16)
    minLength(schemaPath.minmaxlength, 8)
    maxLength(schemaPath.minmaxlength, 16)
    required(schemaPath.minmaxlength);

    disabled(schemaPath.disabled)
    readonly(schemaPath.readonly)
  });

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.demoForm, async (form) => {
      console.log(form)
      try {
        console.log(this.demoForm().value());
        return undefined
      } catch (error) {
        console.error('Somehow, an error returned:', error);
        throw error
      }
    })
  }
}
