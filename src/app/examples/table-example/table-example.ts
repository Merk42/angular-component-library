import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExampleTemplate } from "../../example-template/example-template";
import { Table } from "../../components/table/table";

@Component({
  selector: 'mec-table-example',
  imports: [ExampleTemplate, Table],
  templateUrl: './table-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableExample {
  exampledata = [
    {

      company: 'Google',
      extension: '.ts',
      framework: 'Angular',
    },
    {

      company: 'Meta',
      extension: '.tsx',
      framework: 'React',
    },
    {

      company: 'Evan',
      extension: '.vue',
      framework: 'Vue',
    },
    {

      company: 'FOSS',
      extension: '.svelte',
      framework: 'Svelte',
    }
  ]
  examplecols = [
    {
      key: 'framework',
      value: 'Framework / Library',
      alignment: 'left'
    },
    {
      key: 'company',
      value: 'Company'
    },
    {
      key: 'extension',
      value: 'Extension',
      unsortable: true
    }
  ]
}
