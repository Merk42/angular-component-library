import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ExampleTemplate } from "../../example-template/example-template";
import { Table, tablecolumn } from "../../components/table/table";
import { FormField, form } from '@angular/forms/signals';
import { FormCheckbox } from '../../components/form-checkbox/form-checkbox';

interface DemoData {
  cards:boolean
}

@Component({
  selector: 'mec-table-example',
  imports: [ExampleTemplate, Table, FormField, FormCheckbox],
  templateUrl: './table-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableExample {
  exampledata = [
    {

      company: 'Google',
      extension: '.ts',
      framework: 'Angular (2+)',
      date:'2016-09-14',
      dates:new Intl.DateTimeFormat("en-US").format(new Date('2016-09-14')),
      ver: '21'
    },
    {

      company: 'Meta',
      extension: '.tsx',
      framework: 'React',
      date:'2013-05-29',
      dates:new Intl.DateTimeFormat("en-US").format(new Date('2013-05-29')),
      ver: '19'
    },
    {

      company: 'Evan',
      extension: '.vue',
      framework: 'Vue',
      date:'2014-02-04',
      dates:new Intl.DateTimeFormat("en-US").format(new Date('2014-02-04')),
      ver: '3.5'
    },
    {

      company: 'FOSS',
      extension: '.svelte',
      framework: 'Svelte',
      date:'2016-11-01',
      dates:new Intl.DateTimeFormat("en-US").format(new Date('2016-11-01')),
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
      key: 'dates',
      label: 'date',
      sortkey: 'date',
      alignment: 'right'
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
