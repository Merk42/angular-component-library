import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Field, form, required, email } from '@angular/forms/signals';
import { FormCheckbox } from '../../components/form-checkbox/form-checkbox';
import { FormInput } from '../../components/form-input/form-input';
import { FormRadio } from '../../components/form-radio/form-radio';
import { FormSelect } from '../../components/form-select/form-select';
import { FormTextarea } from '../../components/form-textarea/form-textarea';
import { Button } from '../../components/button/button';
import { JsonPipe } from '@angular/common';


interface DemoData {
  basic: string;
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
  imports: [Button, Field, FormCheckbox, FormInput, FormRadio, FormSelect, FormTextarea, JsonPipe],
  templateUrl: './form-example.html',
  styleUrl: './form-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormExample {

  options = [{
    label:'yes',
    value:'yes'
  },{
    label:'no',
    value:'no'
  }]

  demoModel = signal<DemoData>({
    basic: '',
    first_name: '',
    last_name: '',
    email: '',
    feedback: '',
    state: '',
    favorite: '',
    confirm: false
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.basic);
    required(schemaPath.first_name);
    required(schemaPath.email)
    email(schemaPath.email)
    required(schemaPath.confirm);
  });

  onSubmit(event: Event) {
    event.preventDefault();
    // Perform login logic here
    const credentials = this.demoModel();
    console.log('Logging in with:', credentials);
    // e.g., await this.authService.login(credentials);
  }
}
