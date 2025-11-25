import { Component, signal } from '@angular/core';
import { Field, form, required, minLength, maxLength, email, min, max } from '@angular/forms/signals';
import { FormInput } from '../../components/form-input/form-input';

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
  imports: [Field, FormInput],
  templateUrl: './form-input-example.html',
  styleUrl: './form-input-example.css',
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
    // Perform login logic here
    const credentials = this.demoModel();
    console.log('Logging in with:', credentials);
    // e.g., await this.authService.login(credentials);
  }
}
