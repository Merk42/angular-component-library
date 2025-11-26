import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, customError, form, required, minLength, maxLength, submit } from '@angular/forms/signals';
import { FormTextarea } from '../../components/form-textarea/form-textarea';
import { Button } from "../../components/button/button";

interface DemoData {
  required: string;
  optional: string;
  minlength: string;
  maxlength: string;
  minmaxlength: string;
}

@Component({
  selector: 'mec-form-textarea-example',
  imports: [Field, FormTextarea, Button],
  templateUrl: './form-textarea-example.html',
  styleUrl: './form-textarea-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTextareaExample {
  demoModel = signal<DemoData>({
    required: 'bar',
    optional: 'baz',
    minlength: 'minlength',
    maxlength: 'maxlength',
    minmaxlength: 'minmaxlength'
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.required);

     minLength(schemaPath.minlength, 8)
     maxLength(schemaPath.maxlength, 16)
     minLength(schemaPath.minmaxlength, 8)
     maxLength(schemaPath.minmaxlength, 16)
     required(schemaPath.minmaxlength);

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
