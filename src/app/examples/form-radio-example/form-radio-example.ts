import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, customError, disabled, form, required, submit } from '@angular/forms/signals';
import { FormRadio } from '../../components/form-radio/form-radio';
import { Button } from "../../components/button/button";

interface DemoData {
  optional:string;
  required: string;
  disabled: string;
}

@Component({
  selector: 'mec-form-radio-example',
  imports: [Button, Field, FormRadio],
  templateUrl: './form-radio-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormRadioExample {

  optional = [{
    label:'yes',
    value:'yes'
  },{
    label:'no',
    value:'no'
  }]

  required = [{
    label:'yes',
    value:'yes'
  },{
    label:'no',
    value:'no'
  }]

  disabled = [{
    label:'checked',
    value:'yes'
  },{
    label:'unchecked',
    value:'no'
  }]

  demoModel = signal<DemoData>({
    optional: '',
    required: '',
    disabled: 'yes'
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.required)
    disabled(schemaPath.disabled)
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
