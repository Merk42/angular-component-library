import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accordion, AccordionContent} from 'mec-at';
import { ExampleTemplate } from '../example-template/example-template';

@Component({
  selector: 'app-accordion-example',
  imports: [Accordion, AccordionContent, ExampleTemplate],
  templateUrl: './accordion-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionExample {

}
