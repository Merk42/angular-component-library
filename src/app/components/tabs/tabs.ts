import { Component, ContentChildren, ElementRef, QueryList, AfterContentInit, AfterViewInit, Output, EventEmitter, signal, viewChild, viewChildren, effect, ChangeDetectionStrategy } from '@angular/core';
import { TabContent } from './tab-content/tab-content';

@Component({
    selector: 'mec-tabs',
    imports: [],
    templateUrl: './tabs.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tabs implements AfterViewInit{
	@Output() tabClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectedTabClicked: EventEmitter<object> = new EventEmitter<object>();

  @ContentChildren(TabContent) tabs!: QueryList<TabContent>;


  indicatorWidth = signal('');
  indicatorLeft = signal('');
  tablist = viewChild.required<ElementRef>('tabcontainer');
  btz = viewChildren<ElementRef>('buttonz');

  constructor() {
    effect(() => {
      if (this.tabs) {
        const ACTIVE_INDEX = this.tabs.toArray().findIndex(t => t.active() === true)
        const L = this.btz()[ACTIVE_INDEX].nativeElement.offsetLeft + 'px';
        const W = this.btz()[ACTIVE_INDEX].nativeElement.offsetWidth / this.tablist().nativeElement.offsetWidth * 100 + '%';
        this.indicatorLeft.set(L);
        this.indicatorWidth.set(W);
      }
    })
  }

  // contentChildren are set
  ngAfterViewInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active());

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabContent) {
    this.emitClick();
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active.set(false));

    // activate the tab the user has clicked on.
    tab.active.set(true);
    this.selectedTabClicked.emit(tab);



    if (this.btz().length) {
      console.log('activetab reff', tab)
      console.log('activetab elemn', this.btz()[1].nativeElement)
      console.log('activetab left ', this.btz()[1].nativeElement.offsetLeft);
      console.log('activetab width', this.btz()[1].nativeElement.offsetWidth);
      console.log('container width', this.tablist().nativeElement.offsetWidth);

      const ACTIVE_INDEX = this.tabs.toArray().findIndex(t => t.active() === true)
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
    if (event.key === 'ArrowLeft') {
      tabnav = true;
      const index = this.tabs.toArray().findIndex(tab => tab.active() === true);
      if (index === 0) {
        this.selectTab(this.tabs.last)
      } else {
        this.selectTab(this.tabs.toArray()[index-1]);
      }
    }
    if (event.key === 'ArrowRight') {
      tabnav = true;
      const index = this.tabs.toArray().findIndex(tab => tab.active() === true);
      if (index === this.tabs.toArray().length-1) {
        this.selectTab(this.tabs.first)
      } else {
        this.selectTab(this.tabs.toArray()[index+1]);
      }
    }
    if (event.key === 'Home') {
      tabnav = true
      this.selectTab(this.tabs.first);
    }
    if (event.key === 'End') {
      tabnav = true
      this.selectTab(this.tabs.last);
    }
    if (tabnav) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
}
