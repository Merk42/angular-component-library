import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormField, email, form, required, submit } from '@angular/forms/signals';
import { Button, FormCheckbox, FormInput, FormRadio, FormSelect, FormTextarea } from 'mec-at';
import { JsonPipe } from '@angular/common';

interface DemoData {
  first_name: string;
  last_name: string;
  email: string;
  feedback: string;
  state: string;
  favorite:string;
  confirm:boolean;
}

@Component({
  selector: 'mec-form-example',
  imports: [Button, FormField, FormCheckbox, FormInput, FormRadio, FormSelect, FormTextarea, JsonPipe],
  templateUrl: './form-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormExample {
  submitbutton = viewChild.required(Button);

  options = [{
    label:'yes',
    value:'yes'
  },{
    label:'no',
    value:'no'
  }]

  demoModel = signal<DemoData>({
    first_name: '',
    last_name: '',
    email: '',
    feedback: '',
    state: '',
    favorite: '',
    confirm: false
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.first_name);
    required(schemaPath.email);
    email(schemaPath.email);
    required(schemaPath.favorite);
    required(schemaPath.confirm);
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
        console.error('Somehow, an error returned:', error);
        throw error
      }
    })
  }
}
