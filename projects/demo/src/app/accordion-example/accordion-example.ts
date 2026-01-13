import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accordion, AccordionContent} from 'mec-at';

@Component({
  selector: 'mec-accordion-example',
  imports: [Accordion, AccordionContent],
  templateUrl: './accordion-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionExample {

}
