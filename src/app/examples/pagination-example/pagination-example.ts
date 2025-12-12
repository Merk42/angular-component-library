import { Component, signal } from '@angular/core';
import { Field, customError, max, min, form, submit } from '@angular/forms/signals';
import { Pagination } from "../../components/pagination/pagination";
import { FormInput } from "../../components/form-input/form-input";

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
