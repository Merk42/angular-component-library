import { ChangeDetectionStrategy, Component, OnDestroy, contentChildren, effect, inject, input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccordionContent } from './accordion-content/accordion-content';
import { AccordionService } from './accordion-service';

@Component({
  selector: 'mec-accordion',
  templateUrl: './accordion.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Accordion implements OnDestroy {
  private accordionService = inject(AccordionService);

  readonly multiple = input(false);
  readonly groups = contentChildren(AccordionContent);
  groupsSubscription!: Subscription;

/** Inserted by Angular inject() migration for backwards compatibility */
constructor(...args: unknown[]);
  constructor() {
    const accordionService = this.accordionService;

    accordionService.openedAccordion$.subscribe(
      IDtoOpen => {
        this.scrollToAndOpen(IDtoOpen);
      });

    effect(() => {
      const G = this.groups();
      if (this.groupsSubscription) {
        this.unsubscribeGroupToggle();
      }
      this.onGroupInit();
    });
  }

  unsubscribeGroupToggle(): void {
    this.groupsSubscription.unsubscribe();
  }

  onGroupInit(): void {
    this.groupsSubscription = new Subscription();
    // Loop through all Groups
    this.groups().forEach((t) => {
      // when title bar is clicked
      // (toggle is an @output event of Group)
      this.groupsSubscription.add(t.toggle.subscribe(() => {
        // Open the group
        this.openGroup(t);
      }));
    });
  }

  openGroup(group: any, scrollTo?: boolean, ID?: string): void {
    if (typeof group !== 'undefined') {
      if (group.opened()) {
        group.opened.set(false);
      } else {
        if (!this.multiple()) {
          this.groups().forEach((t) => t.opened.set(false));
          group.opened.set(true);
        } else {
          group.opened.set(!group.opened);
        }
      }
      if (scrollTo) {
        group.opened.set(true);
        const elQuery = `'#${ID}']`;
        const summarySelector = document.querySelector(elQuery) && document.querySelector(elQuery)!.parentElement!.parentElement!.parentElement ? document.querySelector(elQuery)!.parentElement!.parentElement!.parentElement : null;
        if (summarySelector) {
          summarySelector.scrollIntoView();
        }
      }
    }
  }

  scrollToAndOpen(IDtoOpen: string): void {
    const contentToOpen = this.groups().filter(groupobj => groupobj['id']() === IDtoOpen)[0];
    this.openGroup(contentToOpen, true, IDtoOpen);
  }

  ngOnDestroy(): void {
    this.unsubscribeGroupToggle();
  }
}
