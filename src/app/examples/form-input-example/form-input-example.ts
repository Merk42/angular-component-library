import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, customError, form, required, minLength, maxLength, email, min, max, submit } from '@angular/forms/signals';
import { FormInput } from '../../components/form-input/form-input';
import { Button } from "../../components/button/button";

interface DemoData {
  required: string;
  optional: string;
  minlength: string;
  maxlength: string;
  minmaxlength: string;
  min:number;
  max:number;
  minmax:number;
}

@Component({
  selector: 'mec-form-input-example',
  imports: [Field, FormInput, Button],
  templateUrl: './form-input-example.html',
  styleUrl: './form-input-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputExample {

  demoModel = signal<DemoData>({
    required: 'bar',
    optional: 'baz',
    minlength: 'minlength',
    maxlength: 'maxlength',
    minmaxlength: 'minmaxlength',
    min: 0,
    max: 99,
    minmax: 50
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
  });

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.demoForm, async (form) => {
      console.log(form)
      try {
        console.log(this.demoForm().value());
        return undefined
      } catch (error) {
        return customError( {
          message: 'Somehow, an error returned'
        })
      }
    })
  }
}
