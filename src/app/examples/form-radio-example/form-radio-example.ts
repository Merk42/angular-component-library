import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Field, customError, disabled, form, required, submit } from '@angular/forms/signals';
import { FormRadio } from '../../components/form-radio/form-radio';
import { Button } from "../../components/button/button";
import { FormNotes } from '../../components/form-notes/form-notes';
import { FormError } from '../../components/form-error/form-error';

interface DemoData {
  favorite:string;
  must: string;
  disabled: string;
}

@Component({
  selector: 'mec-form-radio-example',
  imports: [Button, Field, FormRadio, FormNotes, FormError],
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
    must: '',
    disabled: ''
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    required(schemaPath.must)
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

    showerrors = computed(() => {
    return this.demoForm.must().invalid() && this.demoForm.must().touched()
  })
}
