import { Component } from '@angular/core';
import { Tabs } from "../../components/tabs/tabs";
import { TabContent } from '../../components/tabs/tab-content/tab-content';

@Component({
  selector: 'mec-tabs-example',
  imports: [Tabs, TabContent],
  templateUrl: './tabs-example.html',
  styleUrl: './tabs-example.css',
})
export class TabsExample {

}
