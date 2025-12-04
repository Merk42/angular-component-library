import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accordion } from '../../components/accordion/accordion';
import { AccordionContent } from '../../components/accordion/accordion-content/accordion-content';
@Component({
  selector: 'mec-accordion-example',
  imports: [Accordion, AccordionContent],
  templateUrl: './accordion-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionExample {

}
