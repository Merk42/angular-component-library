import { Component, signal, viewChild } from '@angular/core';
import { Field, customError, max, min, form, submit } from '@angular/forms/signals';
import { Pagination } from "../../components/pagination/pagination";
import { FormInput } from "../../components/form-input/form-input";
import { Button } from '../../components/button/button';

interface DemoData {
  max:number;
  total:number;
}

@Component({
  selector: 'mec-pagination-example',
  imports: [Pagination, FormInput, Field],
  templateUrl: './pagination-example.html',
  styleUrl: './pagination-example.css',
})
export class PaginationExample {
  submitbutton = viewChild.required(Button);

  demoModel = signal<DemoData>({
    max: 5,
    total: 10
  });

  demoForm = form(this.demoModel, (schemaPath) => {
    min(schemaPath.max, 1)
    min(schemaPath.total, 1);
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
