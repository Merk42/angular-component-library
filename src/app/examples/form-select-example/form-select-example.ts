import { Component, signal } from '@angular/core';
import { Field, form, required, minLength, maxLength, email, min, max } from '@angular/forms/signals';
import { FormSelect } from '../../components/form-select/form-select';

interface DemoData {
  required: string;
  optional: string;
}

@Component({
  selector: 'app-form-select-example',
  imports: [Field, FormSelect],
  templateUrl: './form-select-example.html',
  styleUrl: './form-select-example.css',
})
export class FormSelectExample {
  demoModel = signal<DemoData>({
    required: 'bar',
    optional: 'baz'
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.required);
  });

  onSubmit(event: Event) {
    event.preventDefault();
    // Perform login logic here
    const credentials = this.demoModel();
    console.log('Logging in with:', credentials);
    // e.g., await this.authService.login(credentials);
  }
}
