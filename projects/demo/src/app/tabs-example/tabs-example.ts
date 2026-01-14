import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tabs, TabContent } from "mec-at";
import { ExampleTemplate } from '../example-template/example-template';
@Component({
  selector: 'app-tabs-example',
  imports: [ExampleTemplate, Tabs, TabContent],
  templateUrl: './tabs-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsExample {

}
