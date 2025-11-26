import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { customError, Field, form, required, submit } from '@angular/forms/signals';
import { FormRadio } from '../../components/form-radio/form-radio';
import { Button } from "../../components/button/button";

interface DemoData {
  favorite:string;
  must: string
}

@Component({
  selector: 'mec-form-radio-example',
  imports: [Button, Field, FormRadio],
  templateUrl: './form-radio-example.html',
  styleUrl: './form-radio-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormRadioExample {

  options = [{
    label:'yes',
    value:'yes'
  },{
    label:'no',
    value:'no'
  }]

  demoModel = signal<DemoData>({
    favorite: '',
    must: ''
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.must)
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
