import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, AfterContentInit, HostBinding, AfterViewInit, OnDestroy, input, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccordionContent } from './accordion-content/accordion-content';
import { AccordionService } from './accordion-service';

@Component({
  selector: 'mec-accordion',
  imports: [],
  templateUrl: './accordion.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Accordion implements AfterContentInit, AfterViewInit, OnDestroy {
private accordionService = inject(AccordionService);

readonly multiple = input(false);
  readonly size = input('');
  readonly bg = input('');
  @HostBinding('class') get className() {
		return this.accordionClasses(this.size(), this.bg());
	}
  @ContentChildren(AccordionContent)
  groups!: QueryList<AccordionContent>;
  groupsSubscription!: Subscription;

/** Inserted by Angular inject() migration for backwards compatibility */
constructor(...args: unknown[]);
  constructor() {
    const accordionService = this.accordionService;

    accordionService.openedAccordion$.subscribe(
      IDtoOpen => {
        this.scrollToAndOpen(IDtoOpen);
      });
  }

  ngAfterContentInit(): void {
    this.onGroupInit();
  }

  ngAfterViewInit(): void {
    this.groups.changes.subscribe((res) => {
      this.unsubscribeGroupToggle();
      this.onGroupInit();
    });
  }

  unsubscribeGroupToggle(): void {
    this.groupsSubscription.unsubscribe();
  }

  onGroupInit(): void {
    this.groupsSubscription = new Subscription();

    // Loop through all Groups
    this.groups.toArray().forEach((t) => {
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
          this.groups.toArray().forEach((t) => t.opened.set(false));
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
    // tslint:disable-next-line:no-string-literal
    const contentToOpen = this.groups.toArray().filter(groupobj => groupobj['id']() === IDtoOpen)[0];
    this.openGroup(contentToOpen, true, IDtoOpen);
  }

  accordionClasses(size: string, bg: string) {
		const SIZE = size ? ' accordion--' + size : '';
		const BG = bg ? ' accordion--' + bg : '';
		return 'accordion' + SIZE + BG;
  }

  ngOnDestroy(): void {
    this.unsubscribeGroupToggle();
  }
}
