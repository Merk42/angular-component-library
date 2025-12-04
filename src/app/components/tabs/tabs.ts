import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, contentChildren, effect, output, signal, viewChild, viewChildren } from '@angular/core';
import { TabContent } from './tab-content/tab-content';

@Component({
    selector: 'mec-tabs',
    imports: [],
    templateUrl: './tabs.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tabs implements AfterViewInit{
	readonly tabClicked = output<boolean>();
  readonly selectedTabClicked = output<object>();
  readonly tabs = contentChildren(TabContent);
  indicatorWidth = signal('');
  indicatorLeft = signal('');
  tablist = viewChild.required<ElementRef>('tabcontainer');
  btz = viewChildren<ElementRef>('buttonz');

  constructor() {
    effect(() => {
      const tabs = this.tabs();
      const buttons = this.btz();
      if (tabs && buttons && buttons.length) {
        const ACTIVE_INDEX = tabs.findIndex(t => t.active() === true) || 0;
        const L = buttons[ACTIVE_INDEX].nativeElement.offsetLeft + 'px';
        const W = buttons[ACTIVE_INDEX].nativeElement.offsetWidth / this.tablist().nativeElement.offsetWidth * 100 + '%';
        this.indicatorLeft.set(L);
        this.indicatorWidth.set(W);
      }
    })
  }

  // contentChildren are set
  ngAfterViewInit() {
    // get all active tabs
    let activeTabs = this.tabs().filter((tab) => tab.active());

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs().at(0)!);
    }
  }

  selectTab(tab: TabContent) {
    this.emitClick();
    // deactivate all tabs
    this.tabs().forEach(tab => tab.active.set(false));

    // activate the tab the user has clicked on.
    tab.active.set(true);
    this.selectedTabClicked.emit(tab);
    if (this.btz().length) {
      const ACTIVE_INDEX = this.tabs().findIndex(t => t.active() === true)
      const L = this.btz()[ACTIVE_INDEX].nativeElement.offsetLeft + 'px';
      const W = this.btz()[ACTIVE_INDEX].nativeElement.offsetWidth / this.tablist().nativeElement.offsetWidth * 100 + '%';
      this.indicatorLeft.set(L);
      this.indicatorWidth.set(W);
    }
  }

	emitClick() {
		this.tabClicked.emit(true);
	}

  onKeyDown(event: KeyboardEvent) {
    let tabnav = false;
    const tabs = this.tabs();
    if (event.key === 'ArrowLeft') {
      tabnav = true;
      const index = this.tabs().findIndex(tab => tab.active() === true);
      if (index === 0) {
        this.selectTab(tabs.at(-1)!)
      } else {
        this.selectTab(tabs[index-1]);
      }
    }
    if (event.key === 'ArrowRight') {
      tabnav = true;
      const index = tabs.findIndex(tab => tab.active() === true);
      if (index === tabs.length-1) {
        this.selectTab(tabs.at(0)!)
      } else {
        this.selectTab(tabs[index+1]);
      }
    }
    if (event.key === 'Home') {
      tabnav = true
      this.selectTab(tabs.at(0)!);
    }
    if (event.key === 'End') {
      tabnav = true
      this.selectTab(tabs.at(-1)!);
    }
    if (tabnav) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
}
