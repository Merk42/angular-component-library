import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {

  // Observable string sources
  private openedAccordionSource = new Subject<string>();

  // Observable string streams
  openedAccordion$ = this.openedAccordionSource.asObservable();


  // Service message commands
  openAndGoTo(id: string): void {
    this.openedAccordionSource.next(id);
  }
}
