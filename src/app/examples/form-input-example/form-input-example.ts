import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { Field, customError, disabled, email, form, min, minLength, max, maxLength, readonly, required, submit } from '@angular/forms/signals';
import { FormInput } from '../../components/form-input/form-input';
import { Button } from "../../components/button/button";
import { ExampleTemplate } from "../../example-template/example-template";

interface DemoData {
  required: string;
  optional: string;
  minlength: string;
  maxlength: string;
  minmaxlength: string;
  min:number;
  max:number;
  minmax:number;
  disabled:string;
  readonly: string;
}

@Component({
  selector: 'mec-form-input-example',
  imports: [Field, FormInput, Button, ExampleTemplate],
  templateUrl: './form-input-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputExample {
  submitbutton = viewChild.required(Button);

  demoModel = signal<DemoData>({
    required: '',
    optional: '',
    minlength: '',
    maxlength: '',
    minmaxlength: '',
    min: 0,
    max: 99,
    minmax: 50,
    disabled: '',
    readonly: ''
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.required);
     minLength(schemaPath.minlength, 8)
     maxLength(schemaPath.maxlength, 16)
     minLength(schemaPath.minmaxlength, 8)
     maxLength(schemaPath.minmaxlength, 16)
      email(schemaPath.minlength)

     required(schemaPath.minmaxlength);
     min(schemaPath.min, 10)
     max(schemaPath.max, 100)
     min(schemaPath.minmax, 10)
     max(schemaPath.minmax, 100)

      disabled(schemaPath.disabled)
      readonly(schemaPath.readonly)
  });

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitbutton().animateTry();
    if (!this.demoForm().valid()) {
      this.submitbutton().animateFail();
    }
    submit(this.demoForm, async (form) => {
      try {
        this.submitbutton().animateSuccess();
        return undefined
      } catch (error) {
        this.submitbutton().animateFail();
        return customError( {
          message: 'Somehow, an error returned'
        })
      }
    })
  }
}
