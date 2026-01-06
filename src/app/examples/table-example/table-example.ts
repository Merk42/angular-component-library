import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ExampleTemplate } from "../../example-template/example-template";
import { Table, tablecolumn } from "../../components/table/table";
import { Field, form } from '@angular/forms/signals';
import { FormCheckbox } from '../../components/form-checkbox/form-checkbox';

interface DemoData {
  cards:boolean
}

@Component({
  selector: 'mec-table-example',
  imports: [ExampleTemplate, Table, Field, FormCheckbox],
  templateUrl: './table-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableExample {
  exampledata = [
    {

      company: 'Google',
      extension: '.ts',
      framework: 'Angular',
      year: 2010,
      ver: '21'
    },
    {

      company: 'Meta',
      extension: '.tsx',
      framework: 'React',
      year: 2013,
      ver: '19'
    },
    {

      company: 'Evan',
      extension: '.vue',
      framework: 'Vue',
      year: 2014,
      ver: '3.5'
    },
    {

      company: 'FOSS',
      extension: '.svelte',
      framework: 'Svelte',
      year: 2016,
      ver: '5.3.8'
    }
  ]
  examplecols:tablecolumn[] = [
    {
      key: 'framework',
      label: 'Framework / Library',
      alignment: 'left'
    },
    {
      key: 'company',
      label: 'Company'
    },
    {
      key: 'extension',
      label: 'Extension',
      unsortable: true
    },
    {
      key: 'year',
      label: 'Year'
    },
    {
      key: 'ver',
      label: 'Version',
      unsortable: true,
      alignment: 'right'
    }
  ]

  demoModel = signal<DemoData>({

    cards: false
  });

  demoForm = form(this.demoModel, (schemaPath) => {

  });
  onSubmit(event: Event) {
    event.preventDefault();
  }
}
